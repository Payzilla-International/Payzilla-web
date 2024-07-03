import './index.less'
import { cryptoList } from '../../../utils/dataList'
export default function WalletAddressInput({
  label,
  cryptoId,
  onChange,
  error,
}) {
  const item = cryptoList.filter((item) => item.id === cryptoId)[0]
  return (
    <>
      <div className={`walletWrap ${!error ? '' : 'border-feedback-warning'}`}>
        <div className="label-name">
          {item.label} {label}
        </div>
        <div className="wallet-input-wrap">
          <input
            type="text"
            onChange={(e) => {
              onChange && onChange(e.target.value)
            }}
          />
          <img src={item.imgUrl} />
        </div>
      </div>
      {!!error && (
        <div className="error-tip" style={{ marginTop: 10, marginLeft: 20 }}>
          {error}
        </div>
      )}
    </>
  )
}
