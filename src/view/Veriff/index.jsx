import './index.less'
import { getVeriff } from '../../utils/api'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
function Veriff() {
  const [params] = useSearchParams()
  let uuid = uuidv4()
  const [verifftext, setVerifftext] = useState('Start Verification')
  const veriffCreate = async () => {
    const email = params.get('email')
    setVerifftext('Please wait...')
    let { data } = await getVeriff({
      callback:
        process.env.REACT_APP_VERIFF_WEB_URL + 'waitQuery?vendorData=' + uuid,
      email,
      vendorData: uuid,
    })
    setVerifftext('Start Verification')
    window.location.href = data.data.url
  }
  return (
    <>
      <div className="veriff-title">IDENTITY VERIFICATION</div>
      <div className="veriff-root" onClick={veriffCreate}>
        {verifftext}
      </div>
    </>
  )
}

export default Veriff
