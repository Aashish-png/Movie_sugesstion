
import { useDispatch } from 'react-redux'
import { addTopRated } from '../utils/movieSlice'
import { useEffect } from 'react'
import { options } from '../utils/constants'


const useTopRated=()=>{
  const dispatch= useDispatch()
  const useTopRatedApi=async ()=>{
   let data=  await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
       data= await data.json()
      dispatch(addTopRated(data))
  }

  useEffect(()=>{
    useTopRatedApi()
  },[])
}

export default useTopRated;