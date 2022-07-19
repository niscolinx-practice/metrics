import React from 'react'

type CardTextProps = {
  title: string
  text: string
}


function CardText({title, text}: CardTextProps) {
  return (
    <div className='cardText'>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  )
}

export default CardText