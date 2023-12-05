import { createSlice } from "@reduxjs/toolkit";

const movieSlice= createSlice({
    name:"movies",
    initialState:{
        nowPlaying:null,
        TrailerVideo:null,
        popularVideos:null,
        upComingMovies:null,
        topRatedMovies:null
    },
    reducers:{
        addNowPlayingMovies:(state, action)=>{
                state.nowPlaying=action.payload;
        },
        addTrailerVideo: (state, action)=>{
            state.TrailerVideo= action.payload;
        },
        addPopularPlaying:(state,action)=>{
            state.popularVideos= action.payload
        },
        addUpcoming:(state,action)=>{
            state.upComingMovies= action.payload;
        },
        addTopRated:(state, action)=>{
            state.topRatedMovies=action.payload
        }


    }

})

export const {addNowPlayingMovies, addTrailerVideo,addPopularPlaying,addUpcoming ,addTopRated} = movieSlice.actions;

export default movieSlice.reducer;