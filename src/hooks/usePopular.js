import { useDispatch } from "react-redux";
import { addPopularPlaying } from "../utils/movieSlice";
import { useEffect, useState } from "react";
import { options } from "../utils/constants";

const usePopular = ({ pageNum: initialPageNum = 1 } = {}) => {
  const dispatch = useDispatch();
  const [pageNum, setPageNum] = useState(initialPageNum);
  const nowPopularPlayingApi = async () => {
    let data = await fetch(
      `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${pageNum}`,
      options
    );
    data = await data.json();
    dispatch(addPopularPlaying(data));
  };

  useEffect(() => {
    nowPopularPlayingApi();
  }, [pageNum]);

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
};

export default usePopular;
