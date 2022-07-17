import Link from 'next/link'
import React from 'react'
import { BsYoutube, BsLinkedin } from 'react-icons/bs'
import {AiFillFacebook} from'react-icons/ai'
import {RiInstagramLine} from'react-icons/ri'
import {FaTwitterSquare} from 'react-icons/fa'

function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <Link href='/'>Hello</Link>
        </li>
      </ul>
    </footer>
  )
}

export default Footer