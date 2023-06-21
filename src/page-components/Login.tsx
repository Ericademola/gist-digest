import { useEffect, useState } from "react";
import AppName from "../shared-components/AppName"
import Button from "../shared-components/Button"
import './Login.css';
import { useNavigate } from "react-router-dom";



const Login = () => {

  const [loginEmail, setLoginEmail] = useState<string>('');
  const [loginPassword, setLoginPassword] = useState<string>('');
  const [loginStatus, setLoginStatus] = useState<boolean>(false);

  
  const navigate = useNavigate();


  const handleLogin = (e: { preventDefault: () => void; }) => {

    e.preventDefault();

    const json:any = localStorage.getItem('members');
    const members = JSON.parse(json);
    const currentMember = members.find((member: { signUpEmail: string; }) => member.signUpEmail === loginEmail);
    if ( currentMember === undefined ) {
      setLoginStatus(true);
      return;
    }

    if ( (currentMember.signUpEmail === loginEmail) && (currentMember.signUpPassword === loginPassword) ) {
      navigate("/SubmitStory")
    }
    
  }


  return (
    <div className="Login">
      <AppName />
      <form action="" className="Login_form" onSubmit={handleLogin}>        
        <label htmlFor="">Email Address</label>
        <br />
        <input
          name="email" 
          type="email" 
          value={loginEmail}
          onChange={(e) => setLoginEmail(e.target.value)}
        />  
              
        <br />
        <label htmlFor="">Password</label>
        <br />
        <input 
          type="password" 
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
        />   
        {loginStatus ? (<p>Please input the right credentials</p>) : (<p></p>)}      
        <br />
        <Button signUpName="SignUp"/>
      </form>
    </div>
  )
} 
export default Login