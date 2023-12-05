import React from 'react'
import './LandingPage.css'
import { Header } from '../Header/Header.jsx'
import Videoback from '../VideoBack/Videoback.jsx'
import { SearchBar } from '../SearchBar/SearchBar.jsx'
import { CardList } from '../CardList/CardList.jsx'
import { Videotitle } from '../Videotitle/Videotitle.jsx'

import useNowPlaying from '../../hooks/useNowPlaying.js'
import MainConatiner from '../MainConatiner/MainConatiner.jsx'
export const LandingPage = () => {


  useNowPlaying() /// this a custom hooks which calls now playing movies api and store it in store 
  

  return (
    <div  className='mainLandingPageDiv'>
    <Header/>
    <MainConatiner/>
    {/* <Videoback/>  mainCOntianer
    <Videotitle/> */}
    {/* <SearchBar/> */}
    <CardList/>


    </div>
  )
}
