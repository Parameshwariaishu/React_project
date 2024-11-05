import React from 'react'
import './Footer.css';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <div className='footercontainer'>
                <h2 className="learn">LearnHub</h2>
                <p className='footerpara'>@2022 Tailwind Labs Inc. All right reserved</p>
                <div className='formdivv'>
                    <p className='formm'><Link to="/form" id='formm'>  Form  </Link>&nbsp;&nbsp;|</p>
                    <p className='formm'>&nbsp;&nbsp;Notes</p>
                </div>
            </div>
        </>
    )
}
export default Footer;