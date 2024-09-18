import USD from '../assets/images/USD.png'
import EUR from '../assets/images/EUR.png'
import GBP from '../assets/images/GBP.png'
import JPY from '../assets/images/JPY.png'
import SGD from '../assets/images/SGD.png'
import Bitcoin from '../assets/images/Bitcoin.png'
import Ethereum from '../assets/images/Ethereum.png'
import Binance from '../assets/images/Binance.png'
import USDT from '../assets/images/USDT.png'
import USDC from '../assets/images/USDC.png'
const currencyList = [
  {
    id: 1,
    name: 'USD',
    imgUrl: USD,
  },
  {
    id: 2,
    name: 'EUR',
    imgUrl: EUR,
  },
  {
    id: 3,
    name: 'GBP',
    imgUrl: GBP,
  },
  {
    id: 4,
    name: 'JPY',
    imgUrl: JPY,
  },
  {
    id: 5,
    name: 'SGD',
    imgUrl: SGD,
  },
]
const cryptoList = [
  {
    id: 1,
    name: 'Bitcoin',
    imgUrl: Bitcoin,
    subtitle: 'BTC·Bitcoin',
    label: 'BTC'
  },
  {
    id: 2,
    name: 'Ethereum',
    imgUrl: Ethereum,
    subtitle: 'ETH·Ethereum',
    label: 'ETH'
  },
  {
    id: 3,
    name: 'Binance Coin ( BEP - 20',
    imgUrl: Binance,
    subtitle: 'ETH·Ethereum',
    label: 'BNB'
  },
  {
    id: 4,
    name: 'USDT',
    imgUrl: USDT,
    subtitle: 'USDT·ERC - 20',
    label: 'USDT'
  },
  {
    id: 5,
    name: 'USDC',
    imgUrl: USDC,
    subtitle: 'USDC·ERC - 20',
    label: 'USDC'
  },
]
export { currencyList, cryptoList }