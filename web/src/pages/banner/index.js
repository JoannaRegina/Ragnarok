import React from 'react'
import banner from '../../assets/images/medim-banner2.png'
import './styles.css'

export default function Banner () {
    return(
        <div id="banner-container">
            <img src={banner} alt="banner"/>
        </div>
    )
}