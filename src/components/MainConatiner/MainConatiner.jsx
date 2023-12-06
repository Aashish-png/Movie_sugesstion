import React from 'react'
import { useSelector } from 'react-redux'
import Videoback from '../VideoBack/Videoback';
// import VideoTitle from './VideoTitle'
import './MainConatiner.css'


const MainConatiner = () => {

    const movies= useSelector((store)=>store.movies?.nowPlaying)
    if(!movies) return ;

    const mainMovie= movies?.results[0]
    // console.log("main movie ", movies)
    const {overview, original_title , id} =mainMovie
    
    
  return (
    <div className='mainiCoainterMain'>
       
        
        <Videoback  movieId={id} title={original_title}  overview={overview}/>
        
      






    </div>
  )
}

export default MainConatiner