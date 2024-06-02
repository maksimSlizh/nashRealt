import { $authHost, $host } from './index'
import { jwtDecode } from "jwt-decode"
import Cookies from 'js-cookie'

export const registration = async (email, password) => {
  const { data } = await $host.post('api/user/registration', { email, password, role: 'USER' })
  const token = Cookies.get('token')
  if (token) {
    return jwtDecode(token)
  }
  throw new Error('Token not found after registration')
}

export const login = async (email, password) => {
  const { data } = await $host.post('api/user/login', { email, password })
  const token = Cookies.get('token')
  if (token) {
    return jwtDecode(token)
  }
  throw new Error('Token not found after login')
}

export const checkAuth = async () => {
  const response = await $authHost.get('api/user/auth')
  return response.data
}
