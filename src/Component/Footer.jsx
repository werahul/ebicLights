import React from 'react'
import '../CSS/other.css'
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TelegramIcon from '@material-ui/icons/Telegram';

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <>
            <div className='foot_div'>
                <div className='left_foot'>
                    <h2>EBIC ELECTRIC <WbIncandescentIcon id="light-logo" /></h2>
                    <hr />
                    <h3>Contact Infomation</h3>
                    <div className='footIcons'>
                        <InstagramIcon className='foot-i' />
                        <TwitterIcon className='foot-i' />
                        <FacebookIcon className='foot-i' />
                        <YouTubeIcon className='foot-i' />

                    </div>
                </div>
                <div className='center-foot'>
                    <h5>Site Map</h5>
                    <ul>
                        <li>Best Product</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Services</li>
                        <li>Support</li>

                    </ul>
                </div>
                <div className='right-foot'>
                    <h2>Our Newsletter</h2>
                    <input type='email' placeholder='Email' />
                    <button>Subscribe Me <TelegramIcon /></button>

                </div>
            </div>
            <div className='footNote'>
                <h6> © copyright reserved {year}</h6>
            </div>
        </>
    )
}
export default Footer;