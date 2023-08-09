import { useState } from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import HomePage from './Pages/HomePage'
import TopRated from './Components/TopRated'
import Upcoming from './Components/Upcoming'
import Popular from './Components/Popular'

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} /> 
        <Route path ='/upcoming' element={<Upcoming />} />
        <Route path='/topRated' element={<TopRated />} />
        <Route path = '/popular' element={<Popular />} />
      </Routes>
    </BrowserRouter> 
   
    </>
  )
}

export default App
