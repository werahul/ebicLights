import React from 'react'
import '../CSS/other.css'
import SendIcon from '@material-ui/icons/Send';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import CloudDoneSharpIcon from '@material-ui/icons/CloudDoneSharp';
import AssistantIcon from '@material-ui/icons/Assistant';

const Contact = () => {
    const imgSrc = "https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?size=626&ext=jpg&uid=R107817799&semt=ais";
    return (
        <>
            <div className='main_cont'>

                <div className='img_div animated'>
                    <img src={imgSrc} alt="contact" />
                </div>
                <div className='cont-div'>
                    <h1>Get in Touch</h1>
                    <form>
                        <input type='text' placeholder='Full Name' />
                        <input type='email' placeholder='email@gmail.com' />
                        <input type='number' placeholder='Phone Number' />
                        <button><SendIcon /></button>
                    </form>
                </div>
            </div>
            <div className='sec-cont'>
                <div className='blue-cont'>
                    <div className='item-div'>
                        <LocalPhoneIcon id="phone" />
                        <h6>Talk to Sales</h6>

                    </div>
                    <div className='text-div'>
                        <p>Experience exceptional service and personalized guidance by connecting with our dedicated sales team. Call us today!</p>
                        <p>+123-456-0000</p>

                        <button>Make a Call <LocalPhoneIcon /></button>

                    </div>
                </div>
                <div className='blue-cont'>
                    <CloudDoneSharpIcon id="phone" />
                    <h6>Contact Customer Support</h6>

                    <div className='text-div'>
                        <p>Reach out to our customer service team for prompt assistance and exceptional support. Connect with us now!</p>
                        <br />
                        <button>Chat <AssistantIcon /></button>
                        <br />
                        <button>Customer Support <CloudDoneSharpIcon /></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;