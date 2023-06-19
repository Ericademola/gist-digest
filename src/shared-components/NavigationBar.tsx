import { Link } from "react-router-dom"
import AppName from "./AppName"


const NavigationBar = () => {
  return (
    <div className="navigation-bar">
      <AppName />
      <nav className='buttons'>
        <Link to="/SignUp">
          <button className='subcribe'>Subcribe now</button>
        </Link>
        <Link to="/Login">
          <button className='login'>Login</button>
        </Link>
      </nav>
    </div>
  )
}
export default NavigationBar