
import Index from '../view/Index'
import Home from '../view/Home'
import Onofframps from '../view/On-off-ramps'
import Aboutus from '../view/Aboutus'
import Career from '../view/Career'
import Contactus from '../view/Contact-us'
import AmlKycPolicy from '../view/Aml-kyc-policy'
import CookiePolicy from '../view/Cookie-policy'
import EmailCheck from '../view/Email-Check'
import Veriff from '../view/Veriff'
import Wallet from '../view/Wallet'
import Buy from '../view/Buy'
import WalletAddress from '../view/Wallet-address'
import WaitQuery from '../view/WaitQuery'
const routes = [
  {
    path: '/',
    element: <Index>
      <Home />
    </Index>
  },
  {
    path: '/on-off-ramps',
    element: <Index>
      <Onofframps />
    </Index>
  },
  {
    path: '/about-us',
    element: <Index>
      <Aboutus />
    </Index>
  },
  {
    path: '/career',
    element: <Index>
      <Career />
    </Index>
  },
  {
    path: '/contact-us',
    element: <Index>
      <Contactus />
    </Index>
  },
  {
    path: '/cookie-policy',
    element: <Index>
      <CookiePolicy />
    </Index>
  },
  {
    path: '/aml-kyc-policy',
    element: <Index>
      <AmlKycPolicy />
    </Index>
  },
  {
    path: '/veriff',
    element: <Veriff />,
  },
  {
    path: '/wallet',
    element: <Wallet />,
  },
  {
    path: '/email-check',
    element: <EmailCheck />,
  },
  {
    path: '/buy',
    element: <Buy />,
  },
  {
    path: '/wallet-address',
    element: <WalletAddress />,
  },
  {
    path: '/waitQuery',
    element: <WaitQuery />,
  },
]

export default routes