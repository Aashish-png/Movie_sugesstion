import React from 'react'
import './LandingPage.css'
import { Header } from '../Header/Header.jsx'
import { CardList } from '../CardList/CardList.jsx'

import useNowPlaying from '../../hooks/useNowPlaying.js'
import MainConatiner from '../MainConatiner/MainConatiner.jsx'
import usePopular from '../../hooks/usePopular.js'
import useTopRated from '../../hooks/useToprated.js'
import useUpcoming from '../../hooks/useUpcoming.js'
export const LandingPage = () => {


  useNowPlaying() /// this a custom hooks which calls now playing movies api and store it in store 
  usePopular()
  useTopRated()
  useUpcoming()

  return (
    <div  className='mainLandingPageDiv'>
    <Header/>
    <MainConatiner/>
    <CardList/>


    </div>
  )
}
