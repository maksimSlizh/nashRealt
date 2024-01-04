import { $authHost, $host } from './index'
import { jwtDecode }  from "jwt-decode"

export const registration = async (email, password) => {
  const {data} = await $host.post('api/user/registration', {email, password, role: 'ADMIN'})
  console.log(data)
  return jwtDecode(data.token)
}

export const login = async (email, password) => {
  console.log(email, password)
  const {data} = await $host.post('api/user/login', {email, password})
  return jwtDecode(data.token)
}

export const check = async () => {
  const response = await $host.post('api/auth/registration')
  return response
}
