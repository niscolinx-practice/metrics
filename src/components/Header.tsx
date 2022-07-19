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

    return (
        <header className='header' style={useStyle}>
            <div className='header__logo'>
                <Link href='/'>
                    <img src='logo-white.png' alt='' />
                </Link>
            </div>

            <ul className='header__lists' style={{ useLinkStyles }}>
                <li className='header__lists--item'>
                    <Link href='/about'> About Us</Link>
                </li>
                <li className='header__lists--item'>
                    <Link href='/blog'> Blog</Link>
                </li>
                <li className='header__lists--item header__lists--item-active'>
                    Contact Us
                </li>
            </ul>
        </header>
    )
}

export default Header
