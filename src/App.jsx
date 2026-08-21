import { useEffect, useEffectEvent, useState } from 'react'
import {useDispatch} from 'react-redux'
import {login, logout} from './Features/auth'
import Footer from './Components/Footer/Footer'
import authservice from './auth.js/authService'
import Header from './Components/Header/Header'

import './App.css'

function App() {
  const [Loading, setLoading] = useState(true);
  const dispatch = useDispatch()

  useEffect((userData)=>{
    authservice.currentState()
    .then((userData) => {
      if(userData) {
        dispatch(login(userData))
      }else{
        logout
      }
    })
    .catch((error) => {throw error;})
    .finally(() => {setLoading(false)})
  },[])


  return !Loading ? (
    <div className='bg-gray-500'  >
      <div className='min-w-full'>
        <Header/>
        {/* <Outlet/> */}
        <Footer/>
      </div>
    </div>
  ):null
}

export default App
