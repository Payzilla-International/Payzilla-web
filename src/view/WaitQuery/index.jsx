import { useState, useEffect } from 'react'
import { getDecision } from '../../utils/api'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { Button } from 'antd-mobile'
import './index.less'
export default function WaitQuery() {
  const [params] = useSearchParams()
  const navigate = useNavigate()
  let [count, setCount] = useState(10)
  let [status, setStatus] = useState('pending')
  const vendorData = params.get('vendorData')
  const email = sessionStorage.getItem('email')
  useEffect(() => {
    let timer = setTimeout(async () => {
      if (count == 0) {
        let { data } = await getDecision({ vendorData })
        if (data.code == 200) {
          if (data.data.verification) {
            if (data.data.verification.code === '9001') {
              setStatus('success')
              clearTimeout(timer)
            } else {
              clearTimeout(timer)
              setStatus('error')
            }
          } else {
            clearTimeout(timer)
            setStatus('error')
          }
        } else {
          clearTimeout(timer)
          setStatus('error')
        }
      } else {
        setCount(count - 1)
      }
    }, 1000)
    return () => {
      clearTimeout(timer)
    }
  }, [count])
  const nextFun = () => {
    navigate('/buy?email=' + email)
  }
  return (
    <>
      {
        {
          ['success']: (
            <div style={{ padding: '0 20px' }}>
              <div className="wait-text">Verification success</div>
              <Button
                block
                onClick={() => {
                  nextFun()
                }}
                style={{
                  backgroundColor: '#3553b0',
                  color: '#fff',
                  marginTop: '20px',
                }}
                size="large">
                Continue
              </Button>
            </div>
          ),
          ['error']: <div className="wait-text-error">error!</div>,
          ['pending']: (
            <div className="wait-text">Please be patient... {count}s</div>
          ),
        }[status]
      }
    </>
  )
}
