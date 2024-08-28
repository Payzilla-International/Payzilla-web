import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
function Index({ children }) {
  const location = useLocation()
  useEffect(() => {
    if (location.pathname !== '/') {
      window.scrollTo(0, 0)
    }
  }, [location.pathname])
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Index
