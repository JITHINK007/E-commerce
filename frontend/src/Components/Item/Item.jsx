import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const item = (props) => {
  return (
    <div className='item'>
        
          <Link to={`/product/${props.id}`}>
            <img onClick={window.scrollTo(0,0)} src={props.image} alt="" />
          </Link>
        
        <h4>{props.name}</h4>
        <div className="item-prices">
            <div className="item-price-new">
                Rs: {props.new_price}

            </div>
            <div className="item-price-old">
                {props.old_price}

            </div>
        </div>
      
    </div>
  )
}

export default item
