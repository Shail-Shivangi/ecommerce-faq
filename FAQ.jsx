import React, { useState } from 'react'
import { GoPlus } from "react-icons/go";
import './FAQ.css'

export default function FAQ() {
  const[isBoxVisible,setIsBoxVisible]=useState(false);
  const [user,setuser]=useState("");
  const[email,setemail]=useState("");
  const[text,settext]=useState("");
  const [ans,setAns]=useState("");
 
let q1,q2,q3,q4,q5;
  const sol={
    q1:"To create an account, click on the Sign Up button at the top of the homepage. Fill in your details and submit the form. Once registered, you can easily track orders and manage your personal information.",
    q2:"Once your order is shipped, you’ll receive an email with a tracking number and a link to track the shipment. You can also track your order from your account under Order History.",
    q3:"Yes, we offer digital gift cards in various denominations. Gift cards can be redeemed online at checkout.",
    q4:"Yes, we use industry-standard security protocols (SSL encryption) to ensure your personal and payment information is safe.",
    q5:"We offer a 30-day return policy for most items. Products must be returned in their original condition, with all packaging and accessories. Visit our Returns & Exchanges page for more information."
  };
  let fil="";
   const toggleBox=()=>{
    setIsBoxVisible(!isBoxVisible);
  
  };
  const handleSubmit=(event)=>{
    event.preventDefault();
    setuser("");
    setemail("");
    settext("");
  };
  return (
    <div className='faq'>
    <div className='contain'>
      
        <div>
            <h2 style={{paddingLeft:"3.8rem",paddingTop:"0.rem"}}>Frequently Asked Question</h2>
        </div>
        <div className='q1'>
           <div style={{paddingLeft:"2rem" }}>How do I create an account?</div>
           <GoPlus style={{marginLeft:"5.7rem",marginTop:"0.4rem"}} onClick={()=>toggleBox(setAns(sol.q1))}/>
        </div>

        <div className='q2'>
           <div style={{paddingLeft:"2rem" }}>How can I track my order?</div>
           <GoPlus style={{marginLeft:"7rem",marginTop:"0.4rem"}} onClick={()=>toggleBox(setAns(sol.q2))}/>
        </div>

        <div className='q3'>
           <div style={{paddingLeft:"2rem" }}>Do you offer gift cards?</div>
           <GoPlus style={{marginLeft:"9rem",marginTop:"0.4rem"}} onClick={()=>toggleBox(setAns(sol.q3))}/>
        </div>
        
        <div className='q4'>
           <div style={{paddingLeft:"2rem" }}>Is my personal data secure?</div>
           <GoPlus style={{marginLeft:"6.8rem",marginTop:"0.4rem"}} onClick={()=>toggleBox(setAns(sol.q4))}/>
        </div>

        <div className='q5'>
           <div style={{paddingLeft:"2rem" }}>What is your return policy?</div>
           <GoPlus style={{marginLeft:"7.2rem",marginTop:"0.4rem"}} onClick={()=>toggleBox(setAns(sol.q5))}/>
        </div>

        {isBoxVisible &&(
          <div style={{
            position: "absolute",
              top: "50px",
              right: "20px",
             width: "30rem",
             height: "12rem",
             backgroundColor: "white",
             border: '1px solid black',           
             padding: '20px',
              zIndex: '1000'
          }}>
            <div className='follow'>
            <h5>Follow The Process</h5>
            </div>
            <div>{ans}</div>
            <button style={{width:"5rem", marginTop:"0.5rem",backgroundColor:"rgb(255, 165, 0)"}} onClick={()=>toggleBox(q1)}>Close</button>
          </div>
        )}

{isBoxVisible && (
        <div
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: '999' 
          }}
          onClick={()=>toggleBox(q1)} 
        />
      )}

    </div>

    <aside style={{alignItems:"right",marginTop:"2.8rem",marginRight:"11rem"} }>
      <div className='other'>

        <h6 style={{paddingLeft:"0.5rem",paddingTop:"0.8rem"}}>Don't find your answer, Ask for Support</h6>
        <p style={{fontSize:"10px" }}>If you want to ask any other query regarding website. Send me an email and Find your answer of your doubt.</p>
        <div className='box2' style={{marginTop:"-1.6rem"}}>
          <form onSubmit={handleSubmit}>
        <label htmlFor="UserName">
        
          </label>
        <input type="text" style={{height:"1.9rem",width:"15rem",marginLeft:"2rem"}} onChange={(e)=> setuser(e.target.value)} name="UserName" placeholder="Enter UserName" id=""required value={user}/>

        <label htmlFor="email">
       
        </label>
       <input type="text" style={{height:"1.9rem",width:"15rem",marginLeft:"2rem"}} onChange={(e)=> setemail(e.target.value)} name="email" placeholder="Enter Email" id="" required value={email}/>

       <label htmlFor="text">
         
          </label>
        <textarea style={{height:"5rem",width:"15rem",marginLeft:"2rem" ,border:"0.1rem solid",padding:"0.3rem"}} onChange={(e)=> settext(e.target.value)} name="text" placeholder="Ask Any Question" id=""required value={text}/>
          <button style={{height:"2.1rem",width:"7.5rem",marginLeft:"2rem", marginTop:"1.1rem" , backgroundColor:"rgb(255, 165, 0)"}}>Send Message</button>
          </form>
        </div>
      </div>
    </aside>
    </div>
  )
}



