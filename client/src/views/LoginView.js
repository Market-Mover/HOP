import './View.css'
import {useState} from 'react'
import Login from '../components/user/Login'
import Register from '../components/user/Register'


const LoginView = () => {

    const [toggle, setToggle] = useState(true)

    return (
        <div>
            <div className="Loggin">
            <button className="btn btn-info p-3 mb-5" onClick={() => setToggle(!toggle)}>Go to {toggle ? 'Register' : 'Login'}</button>
            
            {toggle ? <Login /> : <Register />}
            
            </div>
  
        </div>
    )
}

export default LoginView
