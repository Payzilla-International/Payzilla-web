import Logo from '../../assets/images/logo.png'
import { Popup } from 'antd-mobile'
import { useState } from 'react'
import { DownOutline } from 'antd-mobile-icons'
import { useNavigate } from 'react-router-dom'
import './index.less'
function Header() {
  const navigate = useNavigate()
  const menuData = [
    {
      name: 'Introducing',
      visible: false,
      children: [
        {
          name: 'On & Off Ramps',
          path: '/on-off-ramps',
        },
      ],
    },
    {
      name: 'Company',
      visible: false,
      children: [
        {
          name: 'About us',
          path: '/about-us',
        },
        {
          name: 'Career',
          path: '/career',
        },
      ],
    },
    {
      name: 'Support',
      visible: false,
      children: [
        {
          name: 'Contact us',
          path: '/contact-us',
        },
      ],
    },
    {
      name: 'Trade',
      visible: false,
      children: [
        {
          name: 'KYC/KYB',
          path: '/veriff',
        },
        {
          name: 'AML(KYT)',
          path: '/wallet',
        },
      ],
    },
  ]
  const [visible, setVisible] = useState(false)
  const [menuList, setMenuList] = useState(menuData)
  return (
    <div className="header-wrap">
      <img
        className="logo"
        src={Logo}
        onClick={() => {
          navigate('/', { replace: true, scroll: true })
        }}
        alt=""
      />
      <div className="menu-wrap">
        <div
          className="menu"
          onClick={() => {
            setVisible(true)
          }}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {/* <div className="login-btn">Login</div> */}
      </div>

      <Popup
        visible={visible}
        onMaskClick={() => {
          setVisible(false)
        }}
        onClose={() => {
          setVisible(false)
        }}
        position="left"
        showCloseButton
        bodyStyle={{
          width: '60vw',
          paddingTop: '30px',
          boxSizing: 'border-box',
        }}>
        <div style={{ paddingTop: '30px' }}>
          {menuList.map((item, index) => {
            return (
              <div className="menu-item" key={index}>
                <div
                  onClick={() => {
                    setMenuList(
                      menuList.map((a, aIndex) => {
                        console.log(a, 'aaa')
                        if (index === aIndex) {
                          return {
                            ...a,
                            visible: !item.visible,
                          }
                        }
                        return a
                      })
                    )
                  }}>
                  {item.name}
                  <DownOutline
                    fontSize={20}
                    style={{
                      rotate: item.visible ? '180deg' : '0deg',
                      transition: '0.3s all linear',
                    }}
                  />
                </div>

                {item.visible &&
                  item.children.map((i, Iindex) => (
                    <div
                      key={Iindex}
                      className="menu-child"
                      onClick={() => {
                        setVisible(false)
                        navigate(i.path)
                      }}>
                      {i.name}
                    </div>
                  ))}
              </div>
            )
          })}
        </div>
      </Popup>
    </div>
  )
}

export default Header
