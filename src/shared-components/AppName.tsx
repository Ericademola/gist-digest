import { Link } from "react-router-dom";

const AppName = () => {
  return (
    <div className="app_name">
      <Link to='/'>
        <h1>Gist Digest</h1>
      </Link>
    </div>
  )
}
export default AppName;