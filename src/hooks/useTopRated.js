
import { useDispatch } from 'react-redux'
import { addTopRated } from '../utils/movieSlice'
import { useEffect, useState } from 'react'
import { options } from '../utils/constants'


const useTopRated=({ pageNum: initialPageNum = 1 } = {})=>{

  const [pageNum, setPageNum] = useState(initialPageNum);
  const dispatch= useDispatch()
  const useTopRatedApi=async ()=>{
   let data=  await fetch(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${pageNum}`, options)
       data= await data.json()
      dispatch(addTopRated(data))
  }

  useEffect(()=>{
    useTopRatedApi()
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

export default useTopRated;