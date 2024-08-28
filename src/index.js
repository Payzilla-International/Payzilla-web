import React from 'react'
import ReactDOM from 'react-dom/client'
// import { BrowserRouter } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'
// import { AliveScope } from 'react-activation'
import './index.css'
import 'amfe-flexible'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // <RouterProvider router={router} />
  <HashRouter>
    {/* <AliveScope> */}
    <App />
    {/* </AliveScope> */}
  </HashRouter>

)

