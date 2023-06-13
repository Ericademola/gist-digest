import AppName from "../shared-components/AppName"
import Button from "../shared-components/Button"

const Login = () => {
  return (
    <div className="Login">
        <AppName />
        <form action="">        
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
export default Login