import './index.less'
import { getVeriff } from '../../utils/api'
import { useState } from 'react'
function Veriff() {
  const [verifftext, setVerifftext] = useState('Start Verification')
  const veriffCreate = async () => {
    setVerifftext('Please wait...')
    let { data } = await getVeriff()
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
