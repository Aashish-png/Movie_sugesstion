import { useState } from 'react'
import './App.css'
import { LandingPage } from './components/landingPage/LandingPage.jsx'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import HomeScreen from './Loach/Components/HomeScreen/HomeScreen.jsx'
import { WatchTrailer } from './components/WatchTrailer/WatchTrailer.jsx'


function App() {
 
  const appRouter=createBrowserRouter([
    {
      path:"/",
      element:<LandingPage/>
  },
    {
        path:"/login",
        element:<HomeScreen/>
    },
    {
        path:"/watchTrailer",
        element:<WatchTrailer/>
    },
])


  return (
    <>
    <RouterProvider router={appRouter}/>
        
    </>
  )
}

export default App
