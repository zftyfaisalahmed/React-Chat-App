import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom';
import imgSrc from '../../Images/pics';

function Login(props) {
  const femail=useRef();
  const fpass=useRef();

  const submitHandler=async (e)=>{
    e.preventDefault()
    let data={
      email:femail.current.value,
      password:fpass.current.value
    }
    console.log(data)
  }
  return (
    <div>
      <div className="container">
        <div className="wrapper">
          <span className="logo">React-chat-app</span>
        </div>

        <div className="form-wrapper">
          
          <div className="right">
            <div className="title">
              Login Here
            </div>
            <form autoComplete='off' onClick={submitHandler}>

              <div className="form-item">
                <label htmlFor="email">Enter your email</label>
                <input type="email" name='email'id='email' required className='form-input'  placeholder='Enter email' />
              </div>

              <div className="form-item">
                <label htmlFor="name">password</label>
                <input type="password" name='pass'id='pass' required className='form-input'  placeholder='Enter  password' />
              </div>
              <div className="form-item">
                <input type="submit" value='Login' className='btn btn-green' required />
              </div>
            </form>
            <div className="block">
              <NavLink to={'/register'} className='btn-link'>
                New user.. Register Here..
              </NavLink>
            </div>
          </div>
          <div className="left">
            <img src={imgSrc.loginImg} alt="noimage" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
