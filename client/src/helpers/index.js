import { jwtDecode } from "jwt-decode"
import Cookies from 'js-cookie'

export function getUserIdFromToken() {
  const token = Cookies.get('token')
  if (token) {
    return jwtDecode(token).id
  }
  return null
}

export const calculateItemsToDisplay = (windowWidth) => {
  if (windowWidth < 768) {
    return 2
  } else if (windowWidth < 1400) {
    return 3
  } else {
    return 4
  }
}

export const calculateItemsToDisplayInsurance = (windowWidth) => {
  if (windowWidth < 579) {
    return 1
  } else if (windowWidth < 992) {
    return 2
  } else {
    return 3
  }
}
