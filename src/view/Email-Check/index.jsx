import { Button } from 'antd-mobile'
import { sendCode, verifyCodeCheck } from '../../utils/api'
import './index.less'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Toast } from 'antd-mobile'
export default function EmailCheck() {
  const navigate = useNavigate()
  const [codeText, SetCodeText] = useState('Get code')
  let [count, setCount] = useState(60)
  const [disabled, setDisabled] = useState(false)
  const [email, setEmail] = useState('')
  const [errorEmail, setErrorEmail] = useState('')
  const [errorCode, setErrorCode] = useState('')
  const [verifyCode, setVerifyCode] = useState('')
  const getCode = () => {
    if (errorEmail || !email) {
      return setErrorEmail('Email is not correct.!')
    }
    setDisabled(true)
    sendCode({ email })
    SetCodeText(`Get code(${count}s)`)
    let timer = setInterval(() => {
      if (count === 0) {
        SetCodeText('Get code')
        setCount(60)
        clearInterval(timer)
        setDisabled(false)
        return
      }
      setCount(count--)
      SetCodeText(`Get code(${count}s)`)
    }, 1000)
  }
  const emailcheckFun = (email) => {
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/ // eslint-disable-line
    if (!emailRegex.test(email)) {
      setErrorEmail('Email is not correct.!')
    } else {
      setErrorEmail('')
    }
  }
  const codeCheckFun = (code) => {
    if (!code || code.length !== 6) {
      setErrorCode('Email verification code is error!')
    } else {
      setErrorCode('')
    }
  }
  const submit = async () => {
    if (errorEmail || !email) {
      setErrorEmail('Email is not correct.!')
    }
    if (!verifyCode || errorCode) {
      setErrorCode('Email verification code is error!')
    }
    if (!errorEmail && email && !errorCode && verifyCode) {
      let { data } = await verifyCodeCheck({ email, verifyCode })
      sessionStorage.setItem('email', email)
      if (data.data.veriffFlag === 0) {
        navigate('/veriff?email=' + email)
      } else if (data.data.veriffFlag === 1) {
        navigate('/buy?email=' + email)
      } else {
        Toast.show({
          content: 'Verification failure!',
        })
      }
    }
  }
  return (
    <div className="email-check-wrap">
      <div className="title">Email verification code check</div>
      <div className="email-check-wrap">
        <div className="inp-wrap">
          <input
            type="text"
            style={{ width: '100%' }}
            placeholder="Enter your email"
            onChange={(e) => {
              emailcheckFun(e.target.value)
              setEmail(e.target.value)
            }}
          />
          {errorEmail && <div className="tips">{errorEmail} </div>}
        </div>
        <div className="inp-wrap">
          <div className="code-wrap">
            <input
              type="text"
              style={{ width: '60%' }}
              placeholder="6-digit email code"
              onChange={(e) => {
                codeCheckFun(e.target.value)
                setVerifyCode(e.target.value)
              }}
            />
            <div
              className={`${!disabled ? 'code-btn' : 'code-btn not-clickable'}`}
              onClick={getCode}>
              {codeText}
            </div>
          </div>
          {errorCode && <div className="tips">{errorCode} </div>}
        </div>
        <Button
          block
          onClick={() => {
            submit()
          }}
          style={{
            backgroundColor: '#3553b0',
            color: '#fff',
            marginTop: '20px',
          }}
          size="large">
          Confirm
        </Button>
      </div>
    </div>
  )
}
