import { useState, useEffect } from 'react'
import './index.less'
import AmountInput from '../../components/common/Input/AmountInput'
import SelectInput from '../../components/common/Input/SelectInput'
import { Button } from 'antd-mobile'
import { getQuote } from '../../utils/api'
import { useNavigate, useSearchParams } from 'react-router-dom'
export default function Buy() {
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const email = params.get('email')
  const [count, setCount] = useState(10)
  const [fiatAmount, setFiatAmount] = useState('0.00')
  const [cryptoAmount, setCryptoAmount] = useState('0.00000')
  const [currencyId] = useState(1)
  const [cryptoId] = useState(4)
  const [disabled, setDisabled] = useState(true)
  // const [quote, setQuote] = useState({
  //   liquidityPool: 'B2C2',
  //   liquidityQuotes: '1.00150000',
  // })
  const [quote, setQuote] = useState({})
  useEffect(() => {
    let timer = setTimeout(async () => {
      if (count === 0) {
        setCount(10)
        getQuoteFun()
        return
      } else {
        setCount(count - 1)
      }
    }, 1000)
    return () => {
      clearTimeout(timer)
    }
  }, [count])
  useEffect(() => {
    getQuoteFun()
  }, [])
  useEffect(() => {
    if (fiatAmount && Number(fiatAmount) > 0) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }, [fiatAmount])
  async function getQuoteFun() {
    let { data } = await getQuote({
      quantity: 1,
      crypto: 'UST',
      currency: 'USD',
      side: 'buy',
    })
    setQuote(data.data)
    if (fiatAmount && Number(fiatAmount) > 0) {
      setCryptoAmount(getCrypto(fiatAmount || 0, quote))
    }
  }
  const getCrypto = (amount, quote) => {
    if (amount == 0) return '0.00000'
    return Math.max(+amount / +quote.liquidityQuotes, 0).toFixed(5)
  }

  const getFiat = (amount, quote) => {
    if (amount == 0) return '0.00'
    return Math.max(+amount * +quote.liquidityQuotes, 0).toFixed(2)
  }
  const onChangeFiatAmount = (value) => {
    setFiatAmount(value)
    let newValue = +value
    setCryptoAmount(getCrypto(newValue || 0, quote))
  }

  const onChangeCryptoAmount = (value) => {
    setCryptoAmount(value)
    setFiatAmount(getFiat(parseFloat(value || '0'), quote))
  }
  const submitEvent = () => {
    navigate('/wallet-address', {
      state: {
        email,
        orderType: 'buy',
        quantity: cryptoAmount,
        referenceQuotes: quote.liquidityQuotes,
        referenceAmt: fiatAmount,
        crypto: 'UST',
        currency: 'USD',
      },
    })
  }

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
                // setFiatAmount(value)
                onChangeFiatAmount(value)
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
                onChangeCryptoAmount(value)
              }}
            />
          </div>
          <div>
            <SelectInput cryptoId={cryptoId} />
          </div>
        </div>
        <div className="fee-wrap pd15">
          <div className="title">
            You get <span>{Number(cryptoAmount).toFixed(5)} USDT</span> for
            <span> ${Number(fiatAmount).toFixed(2)}</span>
          </div>
          <div>
            <div>
              {Number(cryptoAmount).toFixed(5)} <span> @ $1.00</span>
            </div>
            <div>${Number(fiatAmount).toFixed(2)}</div>
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
          onClick={() => {
            submitEvent()
          }}
          disabled={disabled}
          type="submit"
          style={{ backgroundColor: '#3553b0', color: '#fff' }}
          size="large">
          Continue
        </Button>
      </div>
    </div>
  )
}
