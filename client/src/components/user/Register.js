import {useRef} from 'react'

const Register = () => {

 const firstName = useRef()
 const lastName = useRef()
 const email = useRef()
 const password = useRef()

    return (
        <div>
             <form>
  
  <div className="row mb-4">
    <div className="col">
      <div className="form-outline">
        <input type="text" id="form3Example1" className="form-control" ref={firstName} />
        <label className="form-label" for="form3Example1">First name</label>
      </div>
    </div>
    <div className="col">
      <div className="form-outline">
        <input type="text" id="form3Example2" className="form-control" ref={lastName}/>
        <label className="form-label" for="form3Example2">Last name</label>
      </div>
    </div>
  </div>

  
  <div className="form-outline mb-4">
    <input type="email" id="form3Example3" className="form-control" ref={email}/>
    <label className="form-label" for="form3Example3">Email address</label>
  </div>

  
  <div className="form-outline mb-4">
    <input type="password" id="form3Example4" className="form-control" ref={password}/>
    <label className="form-label" for="form3Example4">Password</label>
  </div>
 
    
  <button type="submit" className="btn btn-primary btn-block mb-4">Register</button>

  
  
</form>
        </div>
    )
}

export default Register
