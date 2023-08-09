import React from 'react'
import '../CSS/other.css'

const About = () =>{
    const abImg = "https://img.freepik.com/free-vector/business-team-brainstorm-idea-lightbulb-from-jigsaw-working-team-collaboration-enterprise-cooperation-colleagues-mutual-assistance-concept-pinkish-coral-bluevector-isolated-illustration_335657-1651.jpg?size=626&ext=jpg&uid=R107817799&semt=ais";
    return(
        <>
            <div className='ab-div'>
                <div className='ab-first'>
                    {/* <h5>ABOUT US</h5> */}
                    <h2>Light the Path to Brilliance: Discover Exceptional LED Lighting Solutions for Every Space and Style</h2>
                    <h6>At Ebic Electric, we take pride in providing a diverse selection of superior LED lighting products, including a variety of bulbs and tube lights. Our offerings are crafted with the latest technology, ensuring energy efficiency and exceptional performance. Based in the heart of Haridwar, our dedicated team is committed to delivering seamless service, from order placement to prompt delivery. Experience the perfect blend of style and functionality as you illuminate your surroundings with our cutting-edge LED solutions. Discover a brighter future with us! <strong>Learn more</strong></h6>
                    <button className='btn btn-get-started '>Contact Us</button>
                </div>
                <div className='ab-sec animated'>
                    <img src={abImg} alt='About'/>
                </div>
            </div>
        </>
    )

}
export default About;