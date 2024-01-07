import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { AppRouter } from './components/AppRouter'
import { checkAuth } from './http/userApi'
import { setIsAuth, setUser } from './redux/userSlice'
import { Spinner } from 'react-bootstrap'

export function App() {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await checkAuth()
        dispatch(setUser(data))
        dispatch(setIsAuth(true))
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchUser()
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
