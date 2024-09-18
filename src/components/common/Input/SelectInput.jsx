import { currencyList } from '../../../utils/dataList'
import { cryptoList } from '../../../utils/dataList'
import arrow from '../../../assets/images/arrow.png'
export default function SelectInput({
  openCurrency,
  openCrypto,
  currencyId,
  cryptoId,
}) {
  let item = {}
  if (cryptoId) {
    item = cryptoList.filter((item) => item.id === cryptoId)[0]
  }
  if (currencyId) {
    item = currencyList.filter((item) => item.id === currencyId)[0]
  }

  return (
    <div
      className="selectWrap"
      // onClick={() => {
      //   if (cryptoId) {
      //     openCrypto()
      //   }
      //   if (currencyId) {
      //     openCurrency()
      //   }
      // }}
    >
      <div className="label-name">currency</div>
      <div className="currency">
        <div>
          <img className="currency-icon" src={item.imgUrl} />
          {item.label ? item.label : item.name}
        </div>
        {/* <img className="arrow" src={arrow} alt="" /> */}
      </div>
    </div>
  )
}
