import './index.less'
import KYC2 from '../../assets/images/kyc2.png'
import KYC3 from '../../assets/images/kyc3.png'
import payment from '../../assets/images/payment4.png'
function Onofframps() {
  return (
    <div className="on-off-ramps-wrap">
      <div className="banner-wrap">
        <div>On & off ramping</div>
        <div>now simple and reliable</div>
      </div>
      <div className="kyc-warp">
        <div>KYC & onboarding monitoring</div>
        <div>
          Instant verifications and extensive testing allow us to eliminate
          common drop-off points.
        </div>
        <img src={KYC2} alt="" />
        <img src={KYC3} alt="" />
      </div>
      <div className="payment-warp">
        <div>Support common payment methods</div>
        <div>
          Accept all major payment methods, including Debit and Credit card from
          Visa, Mastercard, Google Pay, Apple Pay, SEPA, Open banking.
        </div>
        <img src={payment} alt="" />
      </div>
    </div>
  )
}
export default Onofframps
