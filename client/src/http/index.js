import axios from 'axios'

const $host = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_URL,
  withCredentials: true // Важно для отправки куки
})

const $authHost = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_URL,
  withCredentials: true // Важно для отправки куки
})

export {
  $host,
  $authHost
}
