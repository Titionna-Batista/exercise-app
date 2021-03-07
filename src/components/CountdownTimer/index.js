import React, { useState, useRef, useEffect } from "react";

export default function CountdownTimer() {
  const [timer, setTime] = useState(15 * 60);
  const [running, setRunning] = useState(false);
  const countRef = useRef(null);


  const beginTime = () => {
    if (running === true) {
      clearInterval(countRef.current);
      setRunning(false);
    }
   
    else if (timer > 1) {
      setRunning(true);
      countRef.current = setInterval(() => {
        setTime((timer) => timer - 1);
      }, 1000);
    }
  };

  useEffect(() => {
    if (timer < 1) {
      clearInterval(countRef.current);
      setRunning(false);
    }
  }, [timer]);

  const resetTime = () => {
    clearInterval(countRef.current);
    setRunning(false);
    setTime(0 * 60);
  };

  const minusTime = () => {
    setTime(timer - 60);
  };

  const setting = () => {
    setTime(timer + 60);
  };

  const mathStuff = () => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);

    return `${getMinutes} : ${getSeconds}`;
  };

  return (
    <>
    <div style={{ textAlign: "center", fontSize: "40px", 
           backgroundColor: "gray", borderRadius: "10px", color: "white", border: "3px solid #ffffff", maxWidth: "200px", margin: "auto"}}>
          <button style={{fontSize: "30px", width: "100px", marginTop: "10px"}} onClick={minusTime}>-</button>
          <p>{mathStuff()}</p>
          <button style={{fontSize: "25px", width: "100px", marginBottom:"10px"}} onClick={setting}>+</button>
        </div>

          <div>
            <button style={{ marginLeft: "220px", fontSize: "20px", color: "black", border:"2px solid gray", borderRadius: "5px", backgroundColor: "#EFEEEE", width: "310px"}} onClick={beginTime}>{running ? "Pause" : "Start"}</button> 
            <br></br>
            <br></br>
            <button style={{ marginLeft: "220px", fontSize: "20px", color: "black", border:"2px solid gray", borderRadius: "5px", backgroundColor: "#EFEEEE", width: "310px"}} onClick={resetTime}>Reset</button>
          </div>
      </>
  );
}