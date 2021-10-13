import React from 'react'
import './card.css'

const Card = (props) => {
    return (
        <article {...props}>
            {props.children}
        </article>
    )
}

export default Card