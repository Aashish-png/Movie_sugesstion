import React from 'react'
import './CardList.css'
import Cards from '../Cards/Cards'
import { useSelector } from 'react-redux'

export const CardList = () => {


  const movies= useSelector(store=> store.movies)
  console.log("movies", movies )

  return (
    <div className='cardListMain'>
        {
          movies?.nowPlaying?.results.map((videoData)=>(
            <Cards   key={videoData.key} imgUrl={videoData?.poster_path} rating={videoData.vote_average} title={videoData.original_title} date={videoData?.release_date} />

          ))
        }
    
      {/* <Cards/> */}

    </div>
  )
}
