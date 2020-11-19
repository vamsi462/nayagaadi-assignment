import React from 'react'
import { Link } from 'react-router-dom';

const Register = () => {
    return (
      <div className='col-lg-8 offset-lg-2'>
        <h2>Register</h2>
        <form name='form'>
          <div className='form-group'>
            <label>First Name</label>
            <input
              type='text'
              name='firstName'
              className={
                "form-control" 
              }
            />
          </div>
          <div className='form-group'>
            <label>Last Name</label>
            <input
              type='text'
              name='lastName'
              className={
                "form-control"
                
              }
            />
          </div>
          <div className='form-group'>
            <label>Email</label>
            <input
              type='text'
              name='email'
              
              className={
                "form-control"
              }
            />
          </div>
          <div className='form-group'>
            <label>Password</label>
            <input
              type='password'
              name='password'
              className={
                "form-control" 
                
              }
            />
          </div>
          <div className='form-group'>
            <button className='btn btn-primary'>
              Register
            </button>
            <Link to='/login' className='btn btn-link'>
              Cancel
            </Link>
          </div>
        </form>
      </div>
    );
}

export default Register
