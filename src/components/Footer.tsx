import Link from 'next/link'
import React from 'react'
import { BsYoutube, BsLinkedin } from 'react-icons/bs'
import {AiFillFacebook} from'react-icons/ai'
import {RiInstagramLine} from'react-icons/ri'
import {FaTwitterSquare} from 'react-icons/fa'

function Footer() {
  return (
    <footer className='footer'>
      <ul>
        <li>
          <Link href='/'>
            <BsYoutube/>
          </Link>
        </li>
        <li>
          <Link href='/'>
            <AiFillFacebook/>
          </Link>
        </li>
        <li>
          <Link href='/'>
            <BsLinkedin/>
          </Link>
        </li>
        <li>
          <Link href='/'>
            <RiInstagramLine/>
          </Link>
        </li>
        <li>
          <Link href='/'>
            <FaTwitterSquare/>
          </Link>
        </li>
      </ul>

      <div className="footer__contracts">
        <Link href='/'>Terms of services</Link>
        <Link href='/'>Privacy Policy</Link>
      </div>
    </footer>
  )
}

export default Footer