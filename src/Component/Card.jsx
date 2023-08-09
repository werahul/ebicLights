import React from 'react'
import '../CSS/Card.css'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Tooltip from '@material-ui/core/Tooltip';

const Card = (props) => {
    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                <img src={props.imgsrc} className="card-img-top" alt="listed Products" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">
                        {props.disc}
                    </p>
                    <hr/>
                    <div className='flex-btn'>
                        <h4 > <span>₹ </span>  {props.price}</h4>
                        <Tooltip title="Add to Cart">
                        <ShoppingCartIcon className='btn-ele' /></Tooltip>
                    </div>
                
                </div>
            </div>

        </>
    )
}
export default Card;