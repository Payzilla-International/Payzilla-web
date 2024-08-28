import Coins from '../../assets/images/coins.png'
import Easy from '../../assets/images/easy-to-use.png'
import multipleoptions from '../../assets/images/multiple-options.jpg'
import Kyc from '../../assets/images/KYC1.png'
import fast from '../../assets/images/fast-cs.jpg'
import wallet from '../../assets/images/digital-wallet.png'
import './index.less'
function Home() {
  return (
    <div className="home-wrap">
      <div className="elementor-container">
        <div>A one-stop solution for trading digital currency</div>
        <div>
          Payzilla provides you fiat to crypto and crypto to fiat transfer and
          payment.
        </div>
        <img src={Coins} alt="" />
      </div>
      <div className="payzilla-title">Why Payzilla?</div>
      <div className="easy-wrap">
        <div>Easy to use</div>
        <div>Our easy-to-use UI guides you thought the buy & sell journey</div>
        <img src={Easy} alt="" />
      </div>
      <div className="payment-warp">
        <div>Multiple payment options</div>
        <div>
          We accept major payment options, including VISA / Mastercard, Goolge
          pay, Apple pay, SEPA, bank transfers.
        </div>
        <img src={multipleoptions} alt="" />
      </div>
      <div className="kyc-wrap">
        <div>Compliance and security</div>
        <div>
          KYC process done right to ensure minimal drop offs while protecting
          your risks with our anti-fraud capability.
        </div>
        <img src={Kyc} alt="" />
      </div>
      <div className="custom-support-wrap">
        <div>Custom support</div>
        <div>
          Our professional custom support makes your on/off ramping experience
          smooth.
        </div>
        <img src={fast} alt="" />
      </div>
      <div className="wallet-wrap">
        <div>Your key, your coins</div>
        <div>
          We are non-custodial platform which connect to your cold and hot
          wallet for transactions. Your coins are protected.
        </div>
        <img src={wallet} alt="" />
      </div>
    </div>
  )
}
export default Home
