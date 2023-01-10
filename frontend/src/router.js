import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Homescreen from './components/Screens/Homescreen'


function Router() {
  
  return (
    <div>
        <Routes>
            <Route path='/' element={<Layout><Homescreen /></Layout>} />
            
            
        </Routes>
    </div>
  )
}

export default Router