import { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import './Regist.css'
export const RegistrationForm=()=>{
    const[user,setuser]=useState({
        UserName:"",
       
        email:"",
        password:"",
       
    });
    const handleInputChange=(e)=>{
        const{name,value}=e.target;
        setuser((prev)=> ({...prev,[name]:value}))
    };

    const handleFormSubmit=(event)=>{
        event.preventDefault();
       
    };
    return(
        <>
        <form onSubmit={handleFormSubmit}>
            <div className="container" style={{width:"72vh"}}>
                <h1 style={{color:"#005a8e"}}>Sign Up</h1>
                <p style={{borderBottom:"0.1rem solid"}}>Please fill your information to create an account</p>
               
                <label htmlFor="UserName">
                <b>UserName</b>
                </label>
                <input type="text" onChange={handleInputChange} name="UserName" placeholder="Enter UserName" id=""required value={user.firstName}/>

                {/* <label htmlFor="lastName">
                <b>Last Name</b>
                </label>
                <input type="text" onChange={handleInputChange} name="lastName" placeholder="Enter LastName" id=""required value={user.lastName}/> */}

                <label htmlFor="email">
                    <b>Email</b>
                </label>
                <input type="text" onChange={handleInputChange} name="email" placeholder="Enter Email" id="" required value={user.email}/>

                <label htmlFor="Password">
                <b>Password</b>
                </label>
                <input type="password" onChange={handleInputChange} name="password" placeholder="Enter password" id=""required value={user.password}/>
                
                <label htmlFor="confirm password">
                <b>Confirm Password</b>
                </label>

                <input type="password" onChange={handleInputChange} name="phone"  placeholder="Confirm Password" id=""required value={user.phone}/>

                
                <p>Are you agree to NexusDrop 
                  <a href="#" style={{color:"dodgerblue"}}> Terms of Condition & Privacy Policy</a>
                    </p>

                    <div className="clearfix">
                        <button type="submit" className="btn" style={{margin:"0.1rem" ,color: "white"}}>
                            Sign Up
                        </button>
                    </div>
                <p style={{textAlign:"center", borderBottom:"0.1rem solid"}}>OR</p>
                <div className='other'>
                <div className='google'><FcGoogle />Sign Up with Google</div>
                <div className='apple'><FaApple />Sign Up with Apple</div>
                </div>
            </div>
        </form>
        </>
    )
}