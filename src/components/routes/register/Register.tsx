import React, { useEffect, useState } from "react";
import {AiFillEye} from 'react-icons/ai'
import {AiFillEyeInvisible} from 'react-icons/ai'
import "./register.css";

const Register = () => {
    const [state, setState] = useState(new Date())
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [pass1, setPass1] = useState("")

    const secondHand = document.querySelector('.second-hand') as HTMLElement;
    const minsHand = document.querySelector('.min-hand') as HTMLElement;
    const hourHand = document.querySelector('.hour-hand') as HTMLElement;
    function setDate() {
        const now = new Date();
        const seconds = now.getSeconds();
        const secondsDegrees = ((seconds / 60) * 360) + 90;

        if (secondHand != null) {
           secondHand.style.transform = `rotate(${secondsDegrees}deg)`; 
        }
        
        const mins = now.getMinutes();
        const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
        if (minsHand != null) {
            minsHand.style.transform = `rotate(${minsDegrees}deg)`;
        }
        
        const hour = now.getHours();
        const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
        if (hourHand != null) {
            hourHand.style.transform = `rotate(${hourDegrees}deg)`;
        }
        
        setState(now)
      }
      
      useEffect(()=> {
        const timeout = setTimeout(setDate, 1000)
        return ()=> {
            clearTimeout(timeout);
        }
      }, [setDate])
        
  return (
    <div className="register">
      {/* <h2>Create an account instantly</h2> */}
      <div className="flx-clock-t">
        <div className="form-reg-ctn">
          <form>
            <h2>Register</h2>
            <div className="g-g-11">
              <input
                type="email"
                name="email"
                id="userId"
                value={email}
                onChange={(e) => {setEmail(e.target.value)}}
                placeholder="Email"
              />
            </div>
            <div className="g-g-11">
              <input
                type="password"
                name="passwordO"
                id="passwordId"
                value={pass}
                onChange={(e) => {setPass(e.target.value)}}
                placeholder="Pasword"
              />
              <p className="none aba-1" id="shp-1" onClick={()=> {
                  document.querySelector("#passwordId")?.setAttribute("type", "password")
                  document.querySelector("#shp-1")?.classList.add("none")
                  document.querySelector("#shp-2")?.classList.remove("none")
              }}><AiFillEye/></p>
              <p className="aba-1" id="shp-2" onClick={()=> {
                document.querySelector("#passwordId")?.setAttribute("type", "text")
                document.querySelector("#shp-1")?.classList.remove("none")
                document.querySelector("#shp-2")?.classList.add("none")
              }}><AiFillEyeInvisible/></p>
            </div>
            <div className="g-g-11">
              <input
                type="password"
                name="password-2"
                id="passwordId2"
                value={pass1}
                onChange={(e) => {setPass1(e.target.value)}}
                placeholder="Confirm password"
              />
              <p className="none aba-1" id="shp-3"  onClick={()=> {
                  document.querySelector("#passwordId2")?.setAttribute("type", "password")
                  document.querySelector("#shp-3")?.classList.add("none")
                  document.querySelector("#shp-4")?.classList.remove("none")
              }}><AiFillEye/></p>
              <p className="aba-1" id='shp-4' onClick={()=> {
                  document.querySelector("#passwordId2")?.setAttribute("type", "text")
                  document.querySelector("#shp-3")?.classList.remove("none")
                  document.querySelector("#shp-4")?.classList.add("none")
              }}><AiFillEyeInvisible/></p>
            </div>
            <button className="sub-reg-butn">Register</button>
          </form>
        </div>
        <div className="clock">
          <div className="outer-clock-face">
            <div className="marking marking-one"></div>
            <div className="marking marking-two"></div>
            <div className="marking marking-three"></div>
            <div className="marking marking-four"></div>
          </div>
          <div className="inner-clock-face">
            <div className="hand hour-hand"></div>
            <div className="hand min-hand"></div>
            <div className="hand second-hand"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
