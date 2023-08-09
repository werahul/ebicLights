import React from 'react'
import "../CSS/Best.css"

const BestProduct = () => {
    return (
        <>
        <div>
            <h1>Bestseller</h1>
        </div>
            <div className='main-div'>
                <div className='product-div'>
                    <div className='img-div'>
                        <img alt="" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZJoSN78loRsApy2Mli22uxUQh2bJbAfG6iw&usqp=CAU' />
                    </div>
                    <div className='title-div'>
                        EBIC Smart Wi-Fi Enabled Bulb<br />
                        (with Alexa and Google Assitant)
                    </div>
                    <div className='price-div'>
                        <h6 className='strik'>1999.00</h6>
                        <h6>599.00</h6>
                        <h6 className='green-txt'>71% OFF</h6>

                    </div>
                </div>
                <div className='product-div'>
                    <div className='img-div'>
                        <img  alt= "" src='https://cdn.shopify.com/s/files/1/0589/5657/8969/products/wooden-table-lamp-square-base-by-kp-lamps-store-ikiru-in-1_700x700.jpg?v=1676444069' />
                    </div>
                    <div className='title-div'>
                        Decorative Wooden Table Lamp<br />
                        (with Off White Lampshade)
                    </div>
                    <div className='price-div'>
                        <h6 className='strik'>2799.00</h6>
                        <h6>1599.00</h6>
                        <h6 className='green-txt'>46% OFF</h6>

                    </div>
                </div>

                <div className='product-div'>
                    <div className='img-div'>
                        <img alt="" src='https://5.imimg.com/data5/CR/KL/FJ/SELLER-3904031/havells-led-strip-light.jpg' />
                    </div>
                    <div className='title-div'>
                        Ceramic 5M EBIC LED Strip Light<br />
                        (for Home and Work Plae Decoration)
                    </div>
                    <div className='price-div'>
                        <h6 className='strik'>1999.00</h6>
                        <h6>999.00</h6>
                        <h6 className='green-txt'>50% OFF</h6>

                    </div>
                </div>
            </div>
        </>
    )
}

export default BestProduct;
