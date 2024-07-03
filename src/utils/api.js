import { http } from './http'
export const getVeriff = (data = {}) => {
  return http({
    url: '/api/kyc/createSession',
    data,
    method: 'post'
  })
}

export const getDecision = (params = {}) => {
  return http({
    url: '/api/kyc/getDecision',
    method: 'get',
    params
  })
}
export const checkWalletAddress = (params = {}) => {
  return http({
    url: '/api/reports/aml/standard',
    params,
    method: 'get'
  })
}

export const sendCode = (params = {}) => {
  return http({
    url: '/verify/send/code',
    params,
    method: 'get'
  })
}
export const verifyCodeCheck = (data = {}) => {
  return http({
    url: '/verify/verify/code',
    data,
    method: 'post'
  })
}

export const getQuote = (data = {}) => {
  return http({
    url: '/quote/quote',
    data,
    method: 'post'
  })
}

export const createOrder = (data = {}) => {
  return http({
    url: '/order/create',
    data,
    method: 'post'
  })
}