import React from 'react'
import ReactDOM from 'react-dom/client'
// import { BrowserRouter } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'
import './index.css'
import 'amfe-flexible'
import App from './App'
// import translate from 'i18n-jsautotranslate'
// import { createContext } from 'react'

// translate.setUseVersion2() //设置使用v2.x 版本
// translate.selectLanguageTag.show = false //是否显示切换栏
// translate.listener.start() //监控页面动态渲染的文本进行自动翻译
// export const Base = createContext(null)
// if (!localStorage.getItem('language')) {
//   localStorage.setItem('language', 'en')
// }
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <HashRouter>
    {/* <Base.Provider value={translate}> */}
    <App />
    {/* </Base.Provider> */}
  </HashRouter >

)

