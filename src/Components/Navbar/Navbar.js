import React from 'react'
import './Navbar.css'
import Partner from '../Partner/Partner.js';
import Craft from '../Craft/Craft.js';
import Count from '../Counts/Count.js';
import Footer from '../Footer/Footer.js';
import { Link } from 'react-router-dom';

function Navbar(props) {
    console.log(props)
    return (
        <div>
            <div className='container'>
                <header>
                

                    {/* <a href="https://weboin-task.vercel.app/form"> */}
                    <h2 className="learnhub"><Link to="/">LearnHub</Link></h2> 
                    <h4 className="admin">Admin</h4>
                </header>
                <div className='navcontent'>
                    <h1 className='topic'>Learn from the best, be your best..</h1>
                    <h3 className='content'>Give yourself an upgrade with our inspiring online courses and join a global community of learners</h3>

                    <button className='getstart'>Get started</button>

                </div>
            </div>
            <Partner />
            <Craft />
            <Count CNum = {props} />
            <Footer />
        </div>
    )
}
export default Navbar;