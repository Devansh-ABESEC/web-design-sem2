import React from 'react'

const Card = (props) => {
    return (
        <div style={{ border: '5px solid red', width: '200px' }}>
            <h3>Student reord</h3>
            <img src={props.img} width={100} height={100} />
            <h3>Student Name:{props.name}</h3>
            <h3>Student Class:{props.class}</h3>
        </div>
    )
}

export default Card