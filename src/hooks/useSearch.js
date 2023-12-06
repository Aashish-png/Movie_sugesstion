
import { useDispatch } from 'react-redux'
// import { addUpcoming } from '../utils/movieSlice'
import { addSearchData } from '../utils/movieSlice'
import { useEffect } from 'react'
import { options } from '../utils/constants'
// import { options } from '../utils/constants'


const useSearchMovie=({query})=>{
  const dispatch= useDispatch()
  const useSearchMovieApi=async ()=>{

   let data=  await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, options)
       data= await data.json()
      dispatch(addSearchData(data))
  }

  useEffect(()=>{
    useSearchMovieApi()
  },[])
}

export default useSearchMovie;