import Button from "../Button"

const Login = () => {
  return (
    <div className="Login">
        <label htmlFor="">Email Address</label>
        <br />
        <input type="text" />
        <br />
        <label htmlFor="">Password</label>
        <br />
        <input type="text" />
        <br />
        <Button />
    </div>
  )
}
export default Login