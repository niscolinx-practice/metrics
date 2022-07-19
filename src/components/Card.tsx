import Image from 'next/image'
import React from 'react'

function Card() {
    return (
        <div className='card'>
            <Image
                src='/person1.jpeg'
                alt=''
                width={'487px'}
                height={'322px'}
            />
            <p className='card__date'>
                SEPTEMBER 6, 2021 . FEATURED ARTICLE . AFFILATE
            </p>
            <h2 className='card__title'>
                12 Popup Use Cases To Increase Conversions
            </h2>
            <p className='card__description'>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum
            </p>

            <div className='card__btn'>
                <span className='card__btn--dash'></span>
                <button className='card__btn--main'>Read More</button>
            </div>
        </div>
    )
}

export default Card
