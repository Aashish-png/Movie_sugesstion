import React, { useEffect, useState } from 'react'
import './LandingPage.css'
import { Header } from '../Header/Header.jsx'
import { CardList } from '../CardList/CardList.jsx'

import useNowPlaying from '../../hooks/useNowPlaying.js'
import MainConatiner from '../MainConatiner/MainConatiner.jsx'
import usePopular from '../../hooks/usePopular.js'
import useTopRated from '../../hooks/useToprated.js'
import useUpcoming from '../../hooks/useUpcoming.js'
import SearchBar from '../SearchBar/SearchBar.jsx'
export const LandingPage = () => {


  useNowPlaying() /// this a custom hooks which calls now playing movies api and store it in store 
  usePopular()
  useTopRated()
  useUpcoming()
  // const isMobile = window.innerWidth <= 768;

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div  className='mainLandingPageDiv'>
    <Header/>
    {/* <MainConatiner/>
    <SearchBar/> */}
     {isMobile ? <SearchBar /> : <MainConatiner />}
    <CardList/>


    </div>
  )
}
