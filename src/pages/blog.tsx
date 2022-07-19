import React from 'react'
import CardText from '../components/CardText'
import { IoIosSearch } from 'react-icons/io'

function blog() {
    return (
        <div className='blog'>
            <div className='blog__banner'>
                <div className='blog__banner--left'></div>
                <div className='blog__banner--text'>
                    <p className='text__subTitle'>
                        <span className='span-1'></span>
                        <span className='span-2'>blog</span>
                    </p>
                    <p className='text__title'>Articles and News</p>
                </div>
                <div className='blog__banner--left-sub'></div>
                <div className='blog__banner--right'></div>
            </div>

            <div className='blog__main'>
                <div className='blog__main--1'>
                    <CardText
                        title='Latest From The Blog'
                        text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam'
                    />
                    <div className='main__searchBox'>
                        <input type='text' placeholder='Search here' />
                        <IoIosSearch className='main__searchBox--icon' />
                    </div>
                </div>

                <div className="blog__main--2">
                    <Card/>
                </div>
            </div>
        </div>
    )
}

export default blog
