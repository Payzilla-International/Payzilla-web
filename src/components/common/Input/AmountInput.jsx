import './index.less'
export default function AmountInput(props) {
  const { label, onChange, error, value, defaultValue } = props
  return (
    <div className="common-input-wrap">
      <div
        className={`common-inner-input common-inner-amount-input ${
          !error ? '' : 'border-feedback-warning'
        }`}>
        <div className="label-name">{label}</div>
        <input
          type="number"
          value={value}
          defaultValue={defaultValue}
          onChange={(e) => {
            onChange && onChange(e.target.value)
          }}
        />
      </div>

      {!!error && <div className="error-tip">{error}</div>}
    </div>
  )
}
