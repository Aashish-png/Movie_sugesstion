
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utils/movieSlice'
import { useEffect, useState } from 'react'
import { options } from '../utils/constants'

const useNowPlaying = ({ pageNum: initialPageNum = 1 } = {}) => {
  const dispatch = useDispatch();
  const [pageNum, setPageNum] = useState(initialPageNum);

  const nowPlayingApi = async () => {
    try {
      let data = await fetch(`https://api.themoviedb.org/3/movie/now_playing?&page=${pageNum}`, options);
      data = await data.json();
      dispatch(addNowPlayingMovies(data));
    } catch (error) {
      console.error("Error fetching now playing movies:", error);
    }
  };

  useEffect(() => {
    nowPlayingApi();
  }, [pageNum]);

  const nextPage = () => {
    setPageNum((prevPageNum) => prevPageNum + 1);
  };
  const prevPage = () => {
    setPageNum((prevPageNum) => Math.max(1, prevPageNum - 1));
  };

  return {
    nextPage,
    prevPage
  };
};

export default useNowPlaying;