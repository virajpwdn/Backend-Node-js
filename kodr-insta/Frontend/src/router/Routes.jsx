import React from 'react'
import {BrowserRouter as Browser, Route, Routes} from 'react-router-dom'
import Login from '../views/Login'
import Register from '../views/Register'

const routes = () => {
  return (
    <div>
        <Browser>
            <Routes>
                <Route path='/login' element={<Login />}/>
                <Route path='/register' element={<Register />}/>
            </Routes>
        </Browser>
    </div>
  )
}

export default routes