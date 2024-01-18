import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { NavbarComponent } from './components/Navbar'
import { AppRouter } from './components/AppRouter'
import { checkAuth } from './http/userApi'
import { setIsAuth, setUser } from './redux/userSlice'
import { Spinner } from 'react-bootstrap'
import { fetchNews } from './redux/newsSlice'
import { fetchInsurance } from './redux/insuranceSlice'

export function App() {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    dispatch(fetchNews({ page: 1 }))
    dispatch(fetchInsurance({ page: 1 }))
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
    return <Spinner animation="border" variant="success" />
  }
  return (
    <BrowserRouter>
      <div className="App">
        <NavbarComponent />
        <div style={{ paddingTop: '70px' }}> {/* Пример значения, в зависимости от высоты вашего Navbar */}
          <AppRouter />
        </div>
      </div>
    </BrowserRouter>
  )
}
