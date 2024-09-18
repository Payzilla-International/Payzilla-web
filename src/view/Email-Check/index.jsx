import { Form, Input, Button } from 'antd-mobile'
import './index.less'
import { useState } from 'react'
export default function EmailCheck() {
  const [codeText, SetCodeText] = useState('Get code')
  let [count, setCount] = useState(10)
  const [disabled, setDisabled] = useState(false)
  const getCode = () => {
    setDisabled(true)
    SetCodeText(`Get code(${count}s)`)
    let timer = setInterval(() => {
      if (count === 0) {
        SetCodeText('Get code')
        setCount(10)
        clearInterval(timer)
        setDisabled(false)
        return
      }
      setCount(count--)
      SetCodeText(`Get code(${count}s)`)
    }, 1000)
  }
  const EmailcheckFun = (_, email) => {
    if (!email) {
      return Promise.reject(new Error('Email is not correct.!'))
    }
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    if (!emailRegex.test(email)) {
      return Promise.reject(new Error('Email is not correct.!'))
    }
    return Promise.resolve()
  }
  return (
    <div className="email-check-wrap">
      <div className="title">Email verification code check</div>
      {/* <Form
        layout="horizontal"
        mode="card"
        className="form-wrap"
        footer={
          <Button
            block
            type="submit"
            style={{ 'background-color': '#3553b0', color: '#fff' }}
            size="large">
            Verify
          </Button>
        }>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: 'Email address is empty！' },
            { validator: EmailcheckFun },
          ]}>
          <Input placeholder="Enter your email" />
        </Form.Item>
        <Form.Item
          name="code"
          label="code"
          extra={
            <div
              className={`${
                !disabled ? 'code-button' : 'code-button not-clickable'
              }`}
              onClick={getCode}>
              {codeText}
            </div>
          }
          rules={[{ required: true, message: 'code is empty！' }]}>
          <Input placeholder="Enter Code" />
        </Form.Item>
      </Form> */}

      <div className="email-check-wrap">
        <div className="inp-wrap">
          <input
            type="text"
            style={{ width: '100%' }}
            placeholder="Enter your email"
          />
          {/* <div className="tips">Email is not correct.! </div> */}
        </div>
        <div className="inp-wrap">
          <div className="code-wrap">
            <input
              type="text"
              style={{ width: '60%' }}
              placeholder="6-digit email code"
            />
            <div
              className={`${!disabled ? 'code-btn' : 'code-btn not-clickable'}`}
              onClick={getCode}>
              {codeText}
            </div>
          </div>
          {/* <div className="tips">Email is not correct.! </div> */}
        </div>
        <Button
          block
          type="submit"
          style={{
            'background-color': '#3553b0',
            color: '#fff',
            marginTop: '20px',
          }}
          size="large">
          Verify
        </Button>
      </div>
    </div>
  )
}
