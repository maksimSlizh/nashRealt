import { $authHost, $host } from './index'

export const createInsurance = async (formData) => {
  const {data} = await $authHost.post('api/insurance', formData)
  return data
}

export const requestInsurance = async (page, limit) => {
  const {data} = await $host.get('api/insurance', {params: {page, limit}})
  return data
}

export const requestOneInsurance = async (id) => {
  const {data} = await $host.get('api/insurance/' + id)
  return data
}

export const deleteInsurance = async (id) => {
  const {data} = await $authHost.delete('api/insurance' + '/' + id)
  return data
}
