import React, { useEffect, useState } from 'react'
import './Form.css'
import { Link } from "react-router-dom";
function Form(props) {
        const[data, setData] = useState([]);

        const enterData = (e) => {
        //    alert("hello")
           e.preventDefault();
        //    console.dir(e.target[0].name);
           console.dir(e.target);
            // let abc= e.target.name, value = e.target.value;
            // console.log(key, e.target.value);
            let formData = e.target;
            // let obj = {
            //     formData[0].value : e.target[0].name
            // }
            setData([...data,{
                id : Math.floor(Math.random() * 1000),
                name: e.target[0].value,
                email:  e.target[2].value,
                roleNo: e.target[1].value,
                course: e.target[4].value,
                phoneNo:e.target[3].value,
                status : e.target[5].value

            }]);
            
            e.target[0].value="";
            e.target[2].value="";
            e.target[1].value="";
            e.target[4].value="";
            e.target[3].value="";
            e.target[5].value="";
        };


        const deleteData  = (dataId) => {
            // alert("hello");
            const filteredArray = data.filter(item => item.id !== dataId);
            console.log(filteredArray);
            // filteredArray.map((i,item)=>{
            //     setData([...data,{
            //         name: item.name,
            //         email:  item.email,
            //         roleNo: item.roleNo,
            //         course: item.course,
            //         phoneNo:item.phoneNo,
            //         status : item.status,
    
            //     }]);
            // })
            setData(filteredArray);
        }
      
        console.log(data);

        useEffect(()=> {
            console.log(data.filter(item => item.status === "Unplaced"));
            props.setValue(data.length);
            props.setPcount(data.filter(item => item.status === "placed").length);
            props.setUCount(data.filter(item => item.status === "Unplaced").length);
            console.log(data);
            
        },[data])

    return (
        <>
            <main>
                <header>
                
                        <h2 className="learnhub"><Link to="/">LearnHub</Link></h2>
                    <h4 className="admin">Admin</h4>
                </header>
                <div className='formcontainer'>

                    <h1 className='fill'>Fill This Form</h1>
                    <form className='formdiv' onSubmit={(e)=>enterData(e)}>
                        <div className='namediv'>
                            <label className='name'>Name:</label>
                            <input type="text" name="name" placeholder='Enter your name' className='inpt' id='name' />
                        </div>

                        <div className='namediv'>
                            <label className='name'>Role:</label>
                            <input type="text" placeholder='Enter your name' className='inpt' id='role' />
                        </div>

                        <div className='namediv'>
                            <label className='name'>Email:</label>
                            <input type="text" placeholder='Enter your name' className='inpt' id='email' />
                        </div>

                        <div className='namediv'>
                            <label className='name'>PhoneNumber:</label>
                            <input type="text" placeholder='Enter your name' className='inpt' id='phoneno' />
                        </div>

                        <div className='namediv'>
                            <label className='name'>Course:</label>
                            {/* <input type="text" placeholder='Enter your name' /> */}
                            <select className='inpt' id='course'>
                                <option>Select a course</option>
                                <option>React Basic</option>
                                <option>UI/UX Design</option>
                                <option>JavaScript Fundamentals</option>
                                <option>Advanced CSS</option>
                                <option>Backend Development</option>
                            </select>
                        </div>

                        <div className='namediv'>
                            <label className='name'>Status:</label>
                            {/* <input type="text" placeholder='Enter your name'/> */}
                            <select className='inpt' id='placed'>
                                <option>Unplaced</option>
                                <option>placed</option>
                            </select>
                        </div>
                        <button className='sumbit' onclick="submit=()">Submit</button>
                    </form>
                    
                </div>
            </main>
            <div className='minicontainer'>
            {data&&data.map((item,i)=> (
                <>
                <div className='minibox'>
                    <div className='circle'>{item.name[0]}</div>
                    <span> {item.name} </span><br /><br />

                    <label className='role'>Role: </label>
                    <span> {item.roleNo} </span><br /><br />

                    <label className='role'>Email: </label>
                    <span> {item.email} </span><br /><br />
                    <label className='role'>Phone Number: </label>
                    <span> {item.phoneNo} </span><br /><br />
                    <label className='role'>Course: </label>
                    <span> {item.course} </span><br /><br />
                    <label className='role'>Status: </label>
                    <span> {item.status} </span><br /><br />
                    <button className='del' onClick={()=>deleteData(item.id)}>Delete</button>
                </div>

                </>
            )
            )}
             </div>

           
        </>
    )
}
export default Form;