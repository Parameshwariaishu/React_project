import React from 'react'
import './Craft.css'
import pic from './AboutDashboard.png'
import pic2 from './medal.png'
import pic3 from './thought.png'
import pic4 from './training.png'
function Craft() {

    return (
        <>
            <div className='craftcontainer'>
                <h4 className='opensource'>OPEN SOURCE THEME AND UI COMPONENTS</h4>
                <h1 className='craftheading'>Geaux Astro helps you craft beautiful websites efficiently</h1>

                <div className='craftdiv'>
                    <div className='box'>
                        <div className='iconpic'>
                            <img src={pic2} className='pic2' alt='medal' />
                            <img src={pic3} className='pic3' alt='thought' />
                            <img src={pic4} className='pic4' alt='training' />
                        </div>

                        <div className='icondiv'>
                            <div className='box1'>
                                <h3 className='certficate'>
                                    Certificate Distribution
                                </h3>
                                <p className='para'>We offer certificates to validate and recognize your achievement.</p>
                            </div>
                            <div className='box2'>
                                <h3 className='certficate'>
                                    Knowledge
                                </h3>
                                <p className='para'>We deliver transformative knowledge that empowers and inspires.</p></div>
                            <div className='box3'>
                                <h3 className='certficate'>
                                    Hands-on Experience
                                </h3>
                                <p className='para'>We provide hands-on experience for real-world learning. You learn best by doing.</p></div>

                        </div>
                    </div>
                    <div className='chartdiv'>
                        <img src={pic} className='chartpic' alt='chartpic' />
                    </div>
                </div>

            </div>
        </>
    )
}
export default Craft;