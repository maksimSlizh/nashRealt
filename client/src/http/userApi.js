import { $authHost, $host } from './index'
import { jwtDecode }  from "jwt-decode"

export const registration = async (email, password) => {
  const {data} = await $host.post('api/user/registration', {email, password, role: 'USER'})
  localStorage.setItem('token', data.token)
  return jwtDecode(data.token)
}

export const login = async (email, password) => {
  const {data} = await $host.post('api/user/login', {email, password})
  localStorage.setItem('token', data.token)
  return jwtDecode(data.token)
}

export const checkAuth = async () => {
  const response = await $authHost.get('api/user/auth')
  return response.data // assuming the response has a `data` property containing the user's data
}
