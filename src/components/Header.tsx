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
        background: 'red',
    }

    return (
        <header className='header' style={useStyle}>
            <div className='header__logo'>
                <Link href='/'>
                    <img src='logo-white.png' alt='' />
                </Link>
            </div>

            <ul className='header__lists'>
                <li className='header__lists--item' style={useLinkStyles}>
                    <Link href='/about'>
                        <a style={{ color: 'black' }}>About Us</a>
                    </Link>
                </li>
                <li className='header__lists--item'>
                    <Link href='/blog' style={useLinkStyles}>
                        Blog
                    </Link>
                </li>
                <li className='header__lists--item header__lists--item-active'>
                    Contact Us
                </li>
            </ul>
        </header>
    )
}

export default Header
