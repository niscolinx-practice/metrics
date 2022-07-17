import Link from 'next/link'
import React from 'react'
import { BsYoutube } from 'react-icons/bs'
import { AiFillFacebook, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai'
import { FaTwitterSquare } from 'react-icons/fa'

function Footer() {
    return (
        <footer className='footer'>
            <ul className='footer__links'>
                <li className='footer__links--item'>
                    <Link href='/'>
                        <BsYoutube />
                    </Link>
                </li>
                <li className='footer__links--item'>
                    <Link href='/'>
                        <AiFillFacebook />
                    </Link>
                </li>
                <li className='footer__links--item'>
                    <Link href='/'>
                        <AiFillLinkedin />
                    </Link>
                </li>
                <li className='footer__links--item'>
                    <Link href='/'>
                        <AiFillInstagram />
                    </Link>
                </li>
                <li className='footer__links--item'>
                    <Link href='/'>
                        <FaTwitterSquare />
                    </Link>
                </li>
            </ul>

            <div className='footer__contracts'>
                <Link href='/'>
                    Terms of services
                </Link>
                <Link href='/'>
                    Privacy Policy
                </Link>
            </div>
            <div className='footer__copyright'>
                <p>
                    Copyright 2021 @ Peddle Technologies. All Rights Reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer
