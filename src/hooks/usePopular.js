
import { useDispatch } from 'react-redux'
import { addPopularPlaying } from '../utils/movieSlice'
import { useEffect } from 'react'
import { options } from '../utils/constants'


const usePopular=()=>{
  const dispatch= useDispatch()
  const nowPopularPlayingApi=async ()=>{

   let data=  await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
       data= await data.json()
      dispatch(addPopularPlaying(data))
  }

  useEffect(()=>{
    nowPopularPlayingApi()
  },[])
}

export default usePopular;