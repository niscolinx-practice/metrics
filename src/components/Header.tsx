import Link from 'next/link'
import React from 'react'

type HeaderProps = {
    isComingSoon: boolean
    isBlog: boolean
}

const Header = ({ isComingSoon, isBlog }: HeaderProps) => {
    const useStyle: React.CSSProperties = {
        display: isComingSoon ? 'none' : 'flex',
        background: isBlog ? 'white' : '',
    }

    const useLinkStyles = {
        color: 'black',
    }

    const useLinkStyles__active = {
        background: 'white',
        color: 'black'
    }

    return (
        <header className='header' style={useStyle}>
            <div className='header__logo'>
                <Link href='/'>
                    <img src='logo-white.png' alt='' />
                </Link>
            </div>

            <ul className='header__lists'>
                <li className='header__lists--item'>
                    <Link href='/about'>
                        <a style={useLinkStyles}>About Us</a>
                    </Link>
                </li>
                <li className='header__lists--item'>
                    <Link href='/blog'>
                        <a style={useLinkStyles}>Blog</a>
                    </Link>
                </li>
                <li className='header__lists--item header__lists--item-active' style={useLinkStyles__active}>
                    Contact Us
                </li>
            </ul>
        </header>
    )
}

export default Header
