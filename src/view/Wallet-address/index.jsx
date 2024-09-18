import WalletAddressInput from '../../components/common/Input/WalletAddressInput'
import { useState } from 'react'
import { Button } from 'antd-mobile'
import './index.less'
export default function WalletAddress() {
  const [walletAddress, setWalletAddress] = useState('')
  return (
    <div className="Wallet-address-wrap">
      <div>
        <div className="title">Enter USDT Wallet Address</div>
        <WalletAddressInput
          label="Wallet Address"
          onChange={(value) => {
            setWalletAddress(value)
          }}
          cryptoId={4}
        />
      </div>
      <div>
        <Button
          block
          type="submit"
          style={{ 'background-color': '#3553b0', color: '#fff' }}
          size="large">
          Continue
        </Button>
        <p>
          By continuing you confirm that you own and have control of this
          wallet.
        </p>
      </div>
    </div>
  )
}
