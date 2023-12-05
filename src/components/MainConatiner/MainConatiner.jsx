import React from 'react'
import { useSelector } from 'react-redux'
import Videoback from '../VideoBack/Videoback';
// import VideoTitle from './VideoTitle'
import './MainConatiner.css'


const MainConatiner = () => {

    const movies= useSelector((store)=>store.movies?.nowPlaying)
    // console.log("movies ", movies)
    if(!movies) return ;

    const mainMovie= movies?.results[0]
    console.log("main movie ", mainMovie)
    const {overview, original_title , id} =mainMovie


  return (
    <div className='mainiCoainterMain'>
        {/* <VideoTitle  overview={overview}  title={original_title}    />
        <VideoBackground movieId={id} /> */}

        <Videoback movieId={id}/>






    </div>
  )
}

export default MainConatiner