import React from 'react'

export default function NewsProfile(props) {
  return (
    <div>
        <h3>{props.title}</h3>
        <img src={props.image} alt="not found" className='h-32 w-32' />
        <p>{props.description}</p>
        <p>{props.content}</p>
    </div>
  )
}
