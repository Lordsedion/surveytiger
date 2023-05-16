import React, {useState } from "react";
import {AiFillEye} from 'react-icons/ai'
import {AiFillEyeInvisible} from 'react-icons/ai'

const Login = () => {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
        
  return (
    <div className="register">
      {/* <h2>Create your account</h2> */}
      <div className="flx-clock-t">
        <div className="form-reg-ctn">
          <form>
            <h2>Login</h2>
            <div className="g-g-11">
              <input
                type="email"
                name="email"
                id="userId"
                value={email}
                onChange={(e) => {setEmail(e.target.value)}}
                placeholder="Email"
                className="my-2"
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
                className="my-3"
              />
              <p className="none aba-1" id='shp-1' onClick={()=> {
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
            <button className="sub-reg-butn">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
