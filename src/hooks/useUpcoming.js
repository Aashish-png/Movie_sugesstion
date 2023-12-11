
import { useDispatch } from 'react-redux'
import { addUpcoming } from '../utils/movieSlice'
import { useEffect, useState } from 'react'
import { options } from '../utils/constants'


const useUpcoming=({ pageNum: initialPageNum = 1 } = {})=>{
  const dispatch= useDispatch()
  const [pageNum, setPageNum] = useState(initialPageNum);
  const useUpcomingApi=async ()=>{

   let data=  await fetch(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${pageNum}`, options)
       data= await data.json()
      dispatch(addUpcoming(data))
  }

  useEffect(()=>{
    useUpcomingApi()
  },[pageNum])

  const nextPage = () => {
    setPageNum((prevPageNum) => prevPageNum + 1);
  };
  const prevPage = () => {
    setPageNum((prevPageNum) => Math.max(1, prevPageNum - 1));
  };

  return {
    nextPage,
    prevPage,
  };
}

export default useUpcoming;