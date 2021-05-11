
import {useRef} from 'react'


const Login = () => {

 const email = useRef()
 const password = useRef()

    return (
        <div>
             <form>
  

  
  <div className="form-outline mb-4">
    <input type="email" id="form3Example3" className="form-control" ref={email} />
    <label className="form-label" for="form3Example3">Email address</label>
  </div>

  
  <div className="form-outline mb-4">
    <input type="password" id="form3Example4" className="form-control" ref={password}/>
    <label className="form-label" for="form3Example4">Password</label>
  </div>
 
    
  <button type="submit" className="btn btn-primary btn-block mb-4">Login</button>

  
  
</form>
        </div>
    )
}

export default Login
