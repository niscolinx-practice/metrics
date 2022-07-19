import Image from 'next/image'
import React from 'react'

type CardProps = {
    image: string,
    date: string,
    title: string,
    description: string
}

function Card({image, date, title, description}: CardProps) {
    return (
        <div className='card'>{
            
            <Image
                src={image}
                alt=''
                width={'487px'}
                height={'322px'}
            />
        }
            <div className='card__details'>
                <p className='card__date'>
                    {date}
                </p>
                <h2 className='card__title'>
                    {title}
                </h2>
                <p className='card__description'>
                    {description}
                </p>

                <div className='card__btn'>
                    <span className='card__btn--dash'></span>
                    <button className='card__btn--main'>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default Card
