import WalletAddressInput from '../../components/common/Input/WalletAddressInput'
import { useState, useEffect } from 'react'
import { validate } from 'crypto-address-validator-ts'
import { Button, Modal } from 'antd-mobile'
import { useLocation } from 'react-router-dom'
import { createOrder } from '../../utils/api'
import './index.less'
export default function WalletAddress() {
  const { state } = useLocation()
  console.log(state, 'state')
  const [walletAddress, setWalletAddress] = useState('')
  const [error, setError] = useState('')
  useEffect(() => {
    const valid = validate(walletAddress, 'USDT', {
      networkType: '',
      chainType: '',
    })
    console.log(valid)
    if (!valid && walletAddress) {
      setError('Wallet Address is not correct.')
    } else {
      setError('')
    }
  }, [walletAddress])
  const submit = async () => {
    let { data } = await createOrder({ ...state, walletAddress })
    if (data.code === 200) {
      Modal.show({
        content: '62284804437333333',
        closeOnAction: true,
        onClose: () => {
          console.log(123)
        },
        actions: [
          {
            key: 'close',
            text: ' close',
          },
        ],
      })
    }
  }
  return (
    <div className="Wallet-address-wrap">
      <div>
        <div className="title">Enter USDT Wallet Address</div>
        <WalletAddressInput
          label="Wallet Address"
          value={walletAddress}
          error={error}
          onChange={(value) => {
            setWalletAddress(value)
          }}
          cryptoId={4}
        />
      </div>
      <div>
        <Button
          block
          disabled={error || !walletAddress ? true : false}
          type="submit"
          onClick={() => {
            submit()
          }}
          style={{ backgroundColor: '#3553b0', color: '#fff' }}
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
