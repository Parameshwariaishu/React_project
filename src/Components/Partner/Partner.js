import React from 'react'
import './Partner.css'
import picture1 from './airbnb.png'
import picture2 from './client-8.png'
import picture3 from './Lifegroups.png'
import picture4 from './myob.png'
import picture5 from './tailus.png'
import picture6 from './microsoft.png'
import picture7 from './coty.png'
import picture8 from './lilly.png'


function Partner() {


    return (
        <div>
            <div className='placementcontainer'>
                <div className='placementdiv'>
                    <h1 className='placementheading'>Our Placement Partners</h1>
                    <div className='imgdiv'>
                        <img src={picture1} alt="airbnb img" className='pic'/>
                        <img src={picture2} alt="airbnb img" className='pic'/>
                        <img src={picture3} alt="airbnb img" className='pic'/>
                        <img src={picture4} alt="airbnb img" className='pic'/>
                        <img src={picture5} alt="airbnb img" className='pic'/>
                        <img src={picture6} alt="airbnb img" className='pic'/>
                        <img src={picture7} alt="airbnb img" className='pic'/>
                        <img src={picture8} alt="airbnb img" className='pic'/>
                    </div>
                    <button className='btn'>and more companies</button>
                </div>
            </div>
        </div>
    )
}
export default Partner;