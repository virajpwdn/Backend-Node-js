import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Register from '../views/register/Register'
import Profile from '../views/feed/Profile'

const AppRoutes = () => {
  return (
    <div>
        <Router>
            <Routes>
                <Route path='/' element={<h1>Hello world</h1>}/>
                <Route path='/register' element={<Register />}/>
                <Route path='/profile' element={<Profile />} />
            </Routes>
        </Router>
    </div>
  )
}

export default AppRoutes