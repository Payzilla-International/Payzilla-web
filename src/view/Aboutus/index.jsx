import './index.less'
import digitalworld from '../../assets/images/digital-world.jpg'
import passion from '../../assets/images/passion2.jpg'
import multicultual from '../../assets/images/multicultual.png'
import humanCentric from '../../assets/images/human-centric.png'
import veriff from '../../assets/images/veriff.jpg'
import coinfirm from '../../assets/images/coinfirm-logo.png'
import fireblocks from '../../assets/images/fireblocks-logo.png'
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
      <div className="corevalues-wrap">
        <div className="title1">Our Core Values</div>
        <div>
          <img src={passion} alt="" />
          Passion for innovation
        </div>
        <div>
          <img src={multicultual} alt="" />
          Multi culture
        </div>
        <div>
          <img src={humanCentric} alt="" />
          Huiman centric
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
