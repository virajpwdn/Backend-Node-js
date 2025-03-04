import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/home/Home'
import ProjectPage from '../pages/projectPage/ProjectPage'

const AppRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/project/:project_id' element={<ProjectPage />}/>
        </Routes>
    </Router>
  )
}

export default AppRoutes