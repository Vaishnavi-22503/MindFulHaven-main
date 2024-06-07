import React from "react";
import './Login.css'
import '../../App.css'
import {Link, NavLink} from 'react-router-dom'
//import assets
import video from '../../LoginAssets/video.mp4'
import logo from '../../LoginAssets/logo.png'
import {FaUserShield} from 'react-icons/fa6'
import { AiOutlineSwapRight } from "react-icons/ai";
import { BsFillShieldLockFill } from "react-icons/bs";
const Login = () => {
     return (
     <div className="loginPage flex">  
     <div className="container flex">
          <div className="videoDiv">
               <video src={video} autoPlay muted loop></video>
               <div className="textDiv">
               <h2 className="title">MindFulHaven</h2>
               <p>We helps you to feel better</p>
               </div>
          </div>
          <div className="footerDiv flex">
               <span className="text">Don't have an account?</span>
               <Link to={'/register'}>
               <button className="'btn">Sign Up</button>
               </Link>
               </div>
               <div className="fromDiv flex">
                    <div className="headerDiv">
                         <img src={logo} alt="Logo Image"/> 
                         <h3>Welcome Back!</h3> 
                    </div>
                    <form action="" className='from grid'>
                         <span>Login Status will go here</span>
                         <div className="inputDiv">
                              <label htmlFor="username">Username</label>
                              <div className="input flex">
                                   <FaUserShield className='icon'/>
                                   <input type="text" id='username' placeholder="Enter Username"/>
                              </div>
                         </div>

                         <div className="inputDiv">
                              <label htmlFor="password">Password</label>
                              <div className="input flex">
                                   <BsFillShieldLockFill className='icon'/>
                                   <input type="password" id='Password' placeholder="Enter Password"/>
                              </div>
                         </div>
                         <button type='submit' className="btn flex">
                              <span>Login</span>
                              <AiOutlineSwapRight className="icon" />
                         </button>
                         <span className="forgetPassword">
                              Forget Your password? <a href="">Click Here</a>

                         </span>
                    </form>
               </div>
          </div>
     </div>
     );
}
export default Login;