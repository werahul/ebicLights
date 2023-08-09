import React from 'react'
import Card from '../Component/Card';
import CardData from '../ApiData/CardData';
import '../CSS/Card.css'

const Product = () => {
    return (
        <>
            <h2 className='text-center fw-semibold text-primary text-uppercase'>Our Listed Products</h2>
            <div className='prod-div'>
                {
                    CardData.map((val, ind) => {
                        return <Card key={ind}
                            imgsrc={val.imgsrc}
                            title={val.name}
                            disc={val.disc}
                            price={val.price}
                        />
                    })
                }
            </div>
        </>
    )
}
export default Product;