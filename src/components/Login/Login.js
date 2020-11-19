import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
      <div className='col-lg-8 offset-lg-2'>
        <h2>Login</h2>
        <form name='form'>
          <div className='form-group'>
            <label>Username</label>
            <input type='text' name='username' className={"form-control"} />
          </div>
          <div className='form-group'>
            <label>Password</label>
            <input type='password' name='password' className={"form-control"} />
          </div>
          <div className='form-group'>
            <button className='btn btn-primary'>Login</button>
            <Link to='/register' className='btn btn-link'>
              Register
            </Link>
          </div>
        </form>
      </div>
    );
}

export default Login
