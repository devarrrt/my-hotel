import React from 'react'
import { Routes, Route } from 'react-router'

import { HomePage, LoginPage, NotFoundPage, RequireAuth } from './pages/index'
import './styles.scss'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={
        <RequireAuth>
          <HomePage />
        </RequireAuth>
      } />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
