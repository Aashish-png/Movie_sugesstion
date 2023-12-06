
import { useDispatch } from 'react-redux'
import { addUpcoming } from '../utils/movieSlice'
import { useEffect } from 'react'
import { options } from '../utils/constants'


const useUpcoming=()=>{
  const dispatch= useDispatch()
  const useUpcomingApi=async ()=>{

   let data=  await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
       data= await data.json()
      dispatch(addUpcoming(data))
  }

  useEffect(()=>{
    useUpcomingApi()
  },[])
}

export default useUpcoming;