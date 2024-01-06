import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { AppRouter } from './components/AppRouter'
import { check } from './http/userApi'
import { setIsAuth } from './redux/userSlice'
import { Spinner } from 'react-bootstrap'

export function App() {
  const { user } = useSelector(state => state.user)
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    check().then(data => {
      dispatch(setIsAuth(true))
    }).finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <Spinner animation={"grow"} />
  }
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  )
}
