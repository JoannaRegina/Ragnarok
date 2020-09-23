import React from 'react'
import './styles.css'

import logo from '../../assets/images/logo.png'

export default function Header() {
    return (
        <div id="header">
            <img src={logo} alt="Logo da loja Ragnarok"/>
        </div>
    )
}