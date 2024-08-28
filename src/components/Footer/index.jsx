import './index.less'
import logo2 from '../../assets/images/logo2.png'
import facebook from '../../assets/icons/facebook3.png'
import ins from '../../assets/icons/in.png'
import tuite from '../../assets/icons/tuite.png'
import { useNavigate } from 'react-router-dom'
function Footer() {
  const navigate = useNavigate()
  return (
    <div className="footer-wrap">
      <div className="menu-footer-wrap">
        <div>
          <div>Introducing</div>
          <div
            onClick={() => {
              navigate('/on-off-ramps')
            }}>
            On & Off Ramps
          </div>
        </div>
        <div>
          <div>Company</div>
          <div
            onClick={() => {
              navigate('/about-us')
            }}>
            About us
          </div>
          <div>
            <a href="https://www.payzilla.io/wp-content/uploads/doc/Payzilla-Terms-of-service_latest.pdf">
              Terms of service
            </a>
          </div>
        </div>
        <div>
          <div>Support</div>
          <div
            onClick={() => {
              navigate('/contact-us')
            }}>
            Contact us
          </div>
        </div>
        <div>
          <div>Policies</div>
          <div>
            <a href="https://www.payzilla.io/wp-content/uploads/doc/Payzilla-Privacy-Statement_latest.pdf">
              Privacy Statement
            </a>
          </div>
          <div
            onClick={() => {
              navigate('/cookie-policy')
            }}>
            Cookie Policy
          </div>
          <div
            onClick={() => {
              navigate('/aml-kyc-policy')
            }}>
            AML/KYC Policy
          </div>
        </div>
      </div>
      <div className="msg-wrap">
        <img src={logo2} alt="" />
        <div>
          Payzilla is the brand name of the crypto exchange gateway owned by
          Liechtenstein-based Payzilla International AG and provides on and off
          ramping service to individual customers, merchant customers and web3
          platforms. Payzilla’s service is registered as TT Exchange Service
          Provider under TVTG by the FMA Liechtenstein.
        </div>
        <div>
          Registered business address: Alvierweg 17, 9490 Vaduz, Liechtenstein
        </div>
        <div>Copyright © 2024 Payzilla International AG</div>
      </div>
      <div className="subscribe-wrap">
        <div className="subscribe-title">Subscribe to our newsletter</div>
        <input type="text" placeholder="Enter your email" />
        <button>SUBSCRIBE</button>
        <div className="subscribe-msg">
          By submitting this form, you agree to receive marketing and other
          communications from Payzilla about the Payzilla products and other
          company updates. You can unsubscribe from these communications at any
          time. For more information on our privacy practices, please review our
          Privacy Policy.
        </div>
      </div>
      <div className="foot-bottom">
        <div className="foot-bottom-t">Follow Payzilla social</div>
        <div className="icon-wrap">
          <div>
            <img src={facebook} alt="" />
          </div>
          <div>
            <img src={tuite} alt="" />
          </div>
          <div>
            <img src={ins} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
