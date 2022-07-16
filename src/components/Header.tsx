import React from 'react'

function Header() {
  return (
    <div className='header'>
        <img src='logo-white.png' alt='' className='header__logo'/>

<ul className='header__lists'>
    <li className='header__lists--item'>Abous Us</li>
    <li className='header__lists--item'>Blog</li>
    <li className='header__lists--item'>Contact Us</li>
</ul>
    </div>
  )
}

export default Header