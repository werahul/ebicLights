import React from 'react'
import cra1 from '../images/cra1.jpg'
import cra2 from '../images/cra2.jpg'
import cra3 from '../images/cra3.jpg'

const Carousel = () => {
    return (
        <>
            <div
                id="carouselExampleAutoplaying"
                className="carousel slide"
                data-bs-ride="carousel"
            >
                <div className="carousel-inner cra-div">
                    <div className="carousel-item active cra">
                        <img src={cra1} className="d-block" alt="..." />
                    </div>
                    <div className="carousel-item cra">
                        <img src={cra2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item cra">
                        <img src={cra3} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </>
    )
}

export default Carousel;
