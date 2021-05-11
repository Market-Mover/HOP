import {useState} from 'react'
import Login from '../components/user/Login'
import Register from '../components/user/Register'


const LoginView = () => {

    const [toggle, setToggle] = useState(true)

    return (
        <div>
            <button onClick={() => setToggle(!toggle)}>Go to {toggle ? 'Register' : 'Login'}</button>
            
            {toggle ? <Login /> : <Register />}
            
            
  
        </div>
    )
}

export default LoginView
