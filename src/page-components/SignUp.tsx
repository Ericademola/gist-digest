import AppName from '../shared-components/AppName';
import Button from '../shared-components/Button';
import './SignUp.css';


const SignUp = () => {
  return (
    <div className="SignUp">
        <AppName />
        <form action="">
            <label htmlFor="">Name of Organization</label>
            <br />
            <input type="text" /> 
            <br />
            <label htmlFor="">Email Address</label>
            <br />
            <input type="text" />
            <br />
            <label htmlFor="">Password</label>
            <br />
            <input type="text" />
            <br />
            <Button />
        </form>
    </div>
  )
}
export default SignUp