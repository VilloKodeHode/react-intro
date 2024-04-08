import { useEffect, useState } from "react";
import { NavBar } from "./Navbar";
import "./header.css"

export const Header = ({count}) => {
  const [hours, setHours] = useState(null)  
  const [minutes, setMinutes] = useState(null)
  const [seconds, setSeconds] = useState(null)

useEffect(() => {
  function updateEverySecond() {
    const now = new Date()
    const hour = now.getHours() 
    setHours(hour)
    const minute = now.getMinutes()
    setMinutes(minute)
    const second = now.getSeconds()
    setSeconds(second)



  }

updateEverySecond()

const intervalId = setInterval(updateEverySecond, 1000)

return () => clearInterval(intervalId)

},[])

    return (
      <header>
        <div className="clock">
      <p>{`${hours}:${minutes}:${seconds < 10 ? seconds : seconds}`}</p>
      {/* <p>{"the hour is: " + hours}</p> */}
        </div>
        <figure>
          <img src="/vite.svg" alt="vite logo" />
          {count}
        </figure>
        
   <NavBar/>
   
      </header>
    );
  };