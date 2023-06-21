import { useNavigate } from 'react-router-dom';
import './NotFound.css';
import { useEffect } from 'react';


const NotFound = () => {

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/")
    }, 1500)
  }, []);
  
  return (
    <div className="notfound">
        <h1>404</h1>
        <p>Page Not Found</p>
    </div>
  )
}
export default NotFound