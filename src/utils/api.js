import { http } from './http'
export const getVeriff = (data = {}) => {
  return http({
    url: '/api/kyc/createSession',
    data: data,
    method: 'post'
  })
}


export const checkWalletAddress = (params = {}) => {
  return http({
    url: '/api/reports/aml/standard',
    params,
    method: 'get'
  })
}
