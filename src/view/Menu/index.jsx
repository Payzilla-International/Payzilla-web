import './index.less'
import ArrowRightSvg from '../../assets/icons/arrow-right.svg'
import { useNavigate } from 'react-router-dom'
function Menu() {
  const navigate = useNavigate()
  return (
    <div className="menu-wrap">
      <div
        onClick={() => {
          navigate('/veriff')
        }}>
        KYC/KYB <img src={ArrowRightSvg} />
      </div>
      <div
        onClick={() => {
          navigate('/wallet')
        }}>
        AML(KYT) <img src={ArrowRightSvg} />
      </div>
    </div>
  )
}
export default Menu
