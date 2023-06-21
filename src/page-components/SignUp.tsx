import { useState } from 'react';
import AppName from '../shared-components/AppName';
import Button from '../shared-components/Button';
import './SignUp.css';
import { SigningUp } from '../interfaces/signUp';
import { useNavigate } from 'react-router-dom';



const SignUp = () => {

  const navigate = useNavigate();

  const [organizationName, setOrganizationName] = useState<string>('');
  const [signUpEmail, getSignUpEmail] = useState<string>('');
  const [signUpPassword, getSignUpPassword] = useState<string>('');

  const members: SigningUp[] = new Array();

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const signUp = {organizationName, signUpEmail, signUpPassword};
    members.push(signUp);
    let json = JSON.stringify(members);
    localStorage.setItem('members', json);
    navigate("/SubmitStory")
  }

  return (
    <div className="SignUp">

      <AppName />
      <form className='SignUp_form' onSubmit={handleSubmit}>
        <label htmlFor="">Name of Organization</label>
        <br />
        <input 
          type="text" 
          value={organizationName}
          onChange={(e) => setOrganizationName(e.target.value)}
        /> 
        <br />
        <label htmlFor="">Email Address</label>
        <br />
        <input 
          type="email" 
          value={signUpEmail}
          onChange={(e) => getSignUpEmail(e.target.value)}
        />         
        <br />
        <label htmlFor="">Password</label>
        <br />
        <input 
          type="password" 
          value={signUpPassword}
          onChange={(e) => getSignUpPassword(e.target.value)}
        />         
        <br />
        <Button signUpName="SignUp"/>
      </form>

    </div>
  )
}
export default SignUp