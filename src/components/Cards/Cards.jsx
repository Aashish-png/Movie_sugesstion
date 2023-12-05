import React from 'react'
import './Cards.css'
import { IMG_URL } from '../../utils/constants'
import { dummyImg } from '../../utils/constants'

const Cards = ({imgUrl , rating, title, date}) => {

    if(!imgUrl) imgUrl=dummyImg
    else imgUrl=IMG_URL+imgUrl
  return (
    <div className='mainsCards'>
        <div className='ratingdiv'>  <span>{rating}</span>  <span>⭐</span></div>
        <div className='topimg'>
            <img src={imgUrl} alt="cover Image" />

        </div>
        <div className='bottom'>
            <span>{title} </span>
            <span> 20 jan 2020</span>
        </div>


    </div>
  )
}

export default Cards