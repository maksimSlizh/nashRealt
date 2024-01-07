import { $authHost, $host } from './index'

export const createNews = async (formData) => {
  const {data} = await $authHost.post('api/news', formData)
  return data
}

export const requestNews = async (page, limit) => {
  const {data} = await $host.get('api/news', {params: {page, limit}})
  return data
}

export const requestOneNews = async (id) => {
  const {data} = await $host.get('api/news/' + id)
  return data
}

export const deleteNews = async (id) => {
  const {data} = await $authHost.delete('api/news' + '/' + id)
  return data
}
