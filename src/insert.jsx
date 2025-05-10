import React from "react";
import { useState ,useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const Insert = () => {
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!username || ! password){
            alert('plz fill these field')
            return;
        }
        axios.post('http://localhost:5000/insert',{
            username,password
        })
        .then((res)=>{
           navigate('/select');
        })
        .catch((error)=>{
            console.log(failed)
        })
    }
  return (
    <div>
      <form onClick={handleSubmit}>
        <h2>Login Form</h2>
    <input type="text"   value={username} onChange={(e)=>setUsername(e.target.value)}/>
    <input type="text"   value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button name="submit">insert</button>
      </form>
    </div>
  )
}

export default Insert
