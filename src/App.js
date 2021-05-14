import React, { useState } from 'react';
import './App.css';

const App=()=>
{
  let hours=new Date().getHours();
  
  let current= new Date().toLocaleTimeString();
  let meridiem="";
  const[time,setTime]=useState(current);
  const updateTime=()=>
  {
    current= new Date().toLocaleTimeString();
    
    setTime(current);
    
  }
  if(hours<12)
  {
    meridiem="AM"
  }
  else{
    meridiem="PM"
  }
  setInterval(updateTime,1000);
  return(
    <>
    
    <div className="main">
     
    <div className="clock">
    <h1> Digital Clock</h1>
      {time} {meridiem}</div>
    </div>
    </>
  )
}

export default App;
