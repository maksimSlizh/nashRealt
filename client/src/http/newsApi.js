import { $authHost, $host } from './index'

export const createNews = async (formData) => {
  const {data} = await $authHost.post('api/news', formData)
  return data
}

export const requestNews = async () => {
  const {data} = await $host.get('api/news')
  return data
}

export const requestOneNews = async (id) => {
  const {data} = await $host.get('api/news/' + id)
  return data
}
