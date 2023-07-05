import React from 'react'
import '../styles/card.css'
import { IMG_API } from '../utils/api'


function Card({ data }) {
    console.log(data)
    return (
        <div className='card_container'>
            <img src={`${IMG_API}${data.cloudinaryImageId}`} className='card_banner' />
            <div>
                <div>{data.name}</div>
                <div>{data.avgRating}</div>
                <div>{data.costForTwoString}</div>
            </div>
        </div>
    )
}

export default Card