import './index.less'
import { Form, Input, Button, Toast, Selector, Modal } from 'antd-mobile'
import { validate } from 'crypto-address-validator-ts'
import { useState } from 'react'
import { checkWalletAddress } from '../../utils/api'
import {
  ExclamationCircleFill,
  CheckCircleFill,
  CloseCircleFill,
} from 'antd-mobile-icons'

function Wallet() {
  const [addressType, setAddressType] = useState('BTC')
  const checkAddress = (_, walletAddress) => {
    if (!walletAddress) {
      return Promise.reject(new Error('Wallet Address is not correct.!'))
    }
    const valid = validate(walletAddress, addressType.toLowerCase(), {
      networkType: '',
      chainType: '',
    })
    if (!valid && walletAddress) {
      return Promise.reject(new Error('Wallet Address is not correct.!'))
    }
    return Promise.resolve()
  }
  function picFilter(type) {
    if (type === 'PASSED') {
      return (
        <CheckCircleFill
          style={{
            fontSize: 100,
            color: 'var(--adm-color-primary)',
          }}
        />
      )
    } else if (type === 'PENDING') {
      return (
        <ExclamationCircleFill
          style={{
            fontSize: 100,
            color: 'var(--adm-color-warning)',
          }}
        />
      )
    } else {
      return (
        <CloseCircleFill
          style={{
            fontSize: 100,
            color: 'var(--adm-color-danger)',
          }}
        />
      )
    }
  }
  const modal = (type) => {
    Modal.show({
      header: picFilter(type),
      closeOnAction: true,
      content: (
        <>
          <div className="text-style">{type}</div>
        </>
      ),
      actions: [
        {
          key: 'online',
          text: 'close',
          primary: true,
          style: { background: '#0a33ff' },
        },
      ],
    })
  }
  const onFinish = async (v) => {
    console.log(v)
    const toast = Toast.show({
      icon: 'loading',
      content: 'Please wait...',
      duration: 0,
      position: 'top',
    })
    try {
      let { data } = await checkWalletAddress({
        addressType,
        address: v.address,
      })
      console.log(data.data, 'data')
      toast.close()
      modal(data.data.riskLevel)
    } catch (e) {
      console.log(e)
      toast.close()
    }
  }
  const RadioMode = () => {
    return (
      <Selector
        options={[
          { label: 'BTC', value: 'BTC' },
          { label: 'ETH', value: 'ETH' },
          { label: 'TRON', value: 'TRON' },
        ]}
        style={{
          '--checked-text-color': '#0a33ff',
        }}
        value={[addressType]}
        onChange={(v) => {
          if (v.length) {
            setAddressType(v[0])
          }
        }}
      />
    )
  }
  return (
    <div className="wallet-wrap">
      <h5>Enter {addressType} Wallet Address</h5>
      <Form
        onFinish={onFinish}
        footer={
          <Button
            block
            type="submit"
            style={{ background: '#0a33ff', color: '#fff' }}
            size="large">
            Continue
          </Button>
        }>
        <Form.Item
          name="address"
          rules={[
            { required: true, message: 'Wallet Address is required.!' },
            { validator: checkAddress },
          ]}>
          <Input placeholder={`${addressType} Wallet Address`} />
        </Form.Item>
        <Form.Item name="addressType">
          <RadioMode />
        </Form.Item>
      </Form>
    </div>
  )
}
export default Wallet
