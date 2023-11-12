import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path='/'>
                <HomePage />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router
