import React from 'react'
import './Videotitle.css'

export const Videotitle = ({title ,overview}) => {
  return (
    <div className="container">
    <h1 className="title"> {title} </h1>
    <p className="overview"> {overview} </p>
    {/* <div className="btnparent">
      <button className="button play"> ▶ Play </button>
      <button className="button more-info"> More Info </button>
    </div> */}
  </div>
  
  )
}
