import './index.less'
import digitalworld from '../../assets/images/digital-world.jpg'
import passion from '../../assets/images/passion2.jpg'
import multicultual from '../../assets/images/multicultual.png'
import humanCentric from '../../assets/images/human-centric.png'
import veriff from '../../assets/images/veriff.jpg'
import coinfirm from '../../assets/images/coinfirm-logo.png'
import fireblocks from '../../assets/images/fireblocks-logo.png'
import cmp from '../../assets/images/logo_finanzmarktaufsicht-liechtenstein.jpeg'
import tablepic from '../../assets/images/table.png'
import { Swiper } from 'antd-mobile'

function Aboutus() {
  return (
    <div className="aboutus-wrap">
      <div className="title">About us</div>
      <div className="msg-text-wrap">
        <img src={digitalworld} alt="" />
        <div className="sub-title">
          Our mission is to bridge the fiat and crypto world
        </div>
        <p>
          We offer our customer a on/off ramping platform they need to engage in
          web3 and metaverse.
        </p>
        <p>
          We’ll also continue empowering businesses with the tools they need to
          start, run, and scale. In practice, this means enabling them to pay
          and spend with minimise cost.
        </p>
      </div>
      <div className="title4">About Payzilla 's service</div>
      <div className="qualification-wrap">
        <div>
          The Financial Market Authority (FMA) Liechtenstein has examined
          Payzilla’s business model for providing on and off-ramping services
          and has determined that it complies with the registration requirements
          set forth in Article 13 of the TVTG.
        </div>
        <div>
          Payzilla International AG has successfully registered as VT service
          provider within the meaning of Art. 12 Para. 1 TVTG. on 31.01.2024
        </div>
        <div>
          Please visit the FMA Liechtenstein website for the registration
          detail:
        </div>
        <a href="https://register.fma-li.li/search?searchText=payzilla">
          https://register.fma-li.li/search?searchText=payzilla
        </a>
        <img src={cmp} alt="" />
        <img src={tablepic} alt="" />
      </div>

      <div className="corevalues-wrap">
        <div className="title1">Our Core Values</div>
        <div>
          <img src={passion} alt="" />
          Passion for innovation
        </div>
        <div>
          <img src={multicultual} alt="" />
          Multi-cultrue
        </div>
        <div>
          <img src={humanCentric} alt="" />
          Human centric
        </div>
      </div>
      <div className="partners-wrap">
        <div className="title2">Our Partners</div>
        <Swiper
          indicator={false}
          slideSize={70}
          trackOffset={15}
          loop
          stuckAtBoundary={false}>
          <Swiper.Item>
            <div className="partners-logo-wrap">
              <img src={veriff} alt="" />
            </div>
          </Swiper.Item>
          <Swiper.Item>
            <div className="partners-logo-wrap">
              <img src={coinfirm} alt="" />
            </div>
          </Swiper.Item>
          <Swiper.Item>
            <div className="partners-logo-wrap">
              <img src={fireblocks} alt="" />
            </div>
          </Swiper.Item>
        </Swiper>
      </div>
    </div>
  )
}
export default Aboutus
