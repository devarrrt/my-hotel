import React, { useContext } from 'react'
import { Routes, Route } from 'react-router'
import ContextApp, { Context } from './AppContext'

import { HomePage, LoginPage, NotFoundPage, RequireAuth } from './pages/index'
import './styles.scss'

const App = () => {
  const { user } = useContext(Context)

  return (
    <Routes>
      {/* <Route path="/" element={
        <RequireAuth>
          <HomePage />
        </RequireAuth>
      } /> */}
      {/* <Route path="/login" element={<LoginPage />} /> */}

      <Route path="/" element={<HomePage />} />
      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  )
}

export default App
