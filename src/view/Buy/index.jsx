import { useState, useEffect } from 'react'
import './index.less'
import AmountInput from '../../components/common/Input/AmountInput'
import SelectInput from '../../components/common/Input/SelectInput'
import { Button } from 'antd-mobile'
export default function Buy() {
  const [count, setCount] = useState(10)
  const [fiatAmount, setFiatAmount] = useState('0.00')
  const [cryptoAmount, setCryptoAmount] = useState('0.00000')
  const [currencyId, setCurrencyId] = useState(1)
  const [cryptoId, setCryptoId] = useState(4)
  useEffect(() => {
    let timer = setTimeout(async () => {
      if (count == 0) {
        setCount(10)
        return
      } else {
        setCount(count - 1)
      }
    }, 1000)
    return () => {
      clearTimeout(timer)
    }
  }, [count])
  return (
    <div className="buyWrap pb24">
      <div className="pd-lr-16">
        <div className="header">
          <div></div>
          <div>Quote updates in {count}s</div>
        </div>
        <div className="form-title">I want to spend</div>
        <div className="amount-wrap mt8">
          <div>
            <AmountInput
              label="Amount"
              value={fiatAmount}
              onChange={(value) => {
                setFiatAmount(value)
              }}
            />
          </div>
          <div>
            <SelectInput currencyId={currencyId} />
          </div>
        </div>
        <div className="form-title mt32">I want to Buy</div>
        <div className="amount-wrap mt8">
          <div>
            <AmountInput
              label="Amount"
              value={cryptoAmount}
              onChange={(value) => {
                setCryptoAmount(value)
              }}
            />
          </div>
          <div>
            <SelectInput cryptoId={cryptoId} />
          </div>
        </div>
        <div className="fee-wrap pd15">
          <div className="title">
            You get <span>{cryptoAmount} USDT</span> for
            <span> ${fiatAmount}</span>
          </div>
          <div>
            <div>
              {cryptoAmount} <span> @ $1.00</span>
            </div>
            <div>${fiatAmount}</div>
          </div>
          <div>
            <div>Processing fee</div>
            <div>
              <span>as low as</span> $0
            </div>
          </div>
        </div>

        <Button
          block
          type="submit"
          style={{ 'background-color': '#3553b0', color: '#fff' }}
          size="large">
          Continue
        </Button>
      </div>
    </div>
  )
}
