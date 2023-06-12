import AppName from '../AppName';
import Button from '../Button';
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