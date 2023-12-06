import React, { useState } from 'react';
import './SearchBar.css'; // Import your CSS file
import { options } from '../../utils/constants';
import { useDispatch } from 'react-redux';
import { addSearchData } from '../../utils/movieSlice';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  const dispatch= useDispatch()

  const useSearchMovieApi=async ()=>{

    let data=  await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, options)
        data= await data.json()
        console.log("search questipawdad",data)
       dispatch(addSearchData(data))
   }
 
  //  useEffect(()=>{   //// every time query values channge and 2 second delay then 
  //   let time=  setTimeout(() => {
  //     useSearchMovieApi()
      
  //   }, 2000);
  //   return clearTimeout(time)
  //  },[query])

  const handleSearch = () => {
    if (query.trim() !== '') {
      useSearchMovieApi()
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className='searchBarMain'>

   
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search...Any Movies"
        value={query}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
    </div>
  );
};

export default SearchBar;
