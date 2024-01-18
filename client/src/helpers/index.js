import {jwtDecode} from "jwt-decode";

export function getUserIdFromToken () {
  const token = localStorage.getItem('token')
  if (token) {
    return jwtDecode(token).id
  }
}
