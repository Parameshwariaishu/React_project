import React from "react";
import './Count.css'
function Count(props) {
    return (
        <>
            <div className="countcontainer">
                <div className="countdiv">
                    <div className="empowerdiv">
                        <h1 className="empowerpara">Empower your future with cutting-edge skills
                            New, Embrace innovation, master technology, & shape the digital world
                            Your journey to success starts here.</h1>
                    </div>



                    <div className="coursediv">
                        <div className="course">
                            <h3 className="coursepara">Join our course with a proven track record of success, where learning isn't just about gaining skills; it's about growing them. Join us, learn with confidence, and watch your skills soar.</h3>

                        </div>
                        <div className="totaldiv">
                            <div className="Totalstudent">
                                <button className="totlabtn">Total Student</button>
                                <h1 className="num">{props.CNum.value}</h1>
                            </div>

                            <div className="Totalstudent">
                                <button className="totlabtn">Place Student</button>
                                <h1 className="num">{props.CNum.pCount}</h1>
                            </div>

                            <div className="Totalstudent">
                                <button className="totlabtn">Unplaced Student</button>
                                <h1 className="num">{props.CNum.uCount}</h1>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Count;