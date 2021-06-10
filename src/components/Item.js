import './Item.css'
import React from 'react'

function Item(props) {

        return (
            <div className="item">
                <h3>{props.name}</h3>
                <img src={props.src} />
                <p>{props.desc}</p>
            </div>
        )
    

}
export default Item;