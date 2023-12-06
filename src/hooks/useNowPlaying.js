
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utils/movieSlice'
import { useEffect } from 'react'
import { options } from '../utils/constants'
const useNowPlaying=()=>{
  const dispatch= useDispatch()
  const nowPlayingApi=async ()=>{
   let data=  await fetch('https://api.themoviedb.org/3/movie/now_playing?&page=1', options)
       data= await data.json()
      dispatch(addNowPlayingMovies(data))
  }

  useEffect(()=>{
    nowPlayingApi()
  },[])
}

export default useNowPlaying;