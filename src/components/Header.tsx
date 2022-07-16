import React from 'react'

function Header() {
    return (
        <div className='header'>
            <div className='header__logo'>
                <img src='logo-white.png' alt='' />
            </div>

            <ul className='header__lists'>
                <li className='header__lists--item'>Abous Us</li>
                <li className='header__lists--item'>Blog</li>
                <li className='header__lists--item header__lists--item-active'>Contact Us</li>
            </ul>
        </div>
    )
}

export default Header
