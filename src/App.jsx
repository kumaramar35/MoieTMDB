import { useState } from 'react'

import './App.css'
import SideNavbar from './Pages/Header'
import Header from './Pages/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <div className="w-[20%]  ">
    </div> */}
    <div><Header  ></Header></div>
   
     {/* <h1 className='text-blue-500'>Hello</h1> */}
    </>
  )
}

export default App
