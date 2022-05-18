import React from 'react'
import './Home.css'

const Heading = (props) => {
  return (
    <div className='head-main'>
        <h1 className='head-h1'>{props.name}</h1>
    </div>
  )
}

export default Heading