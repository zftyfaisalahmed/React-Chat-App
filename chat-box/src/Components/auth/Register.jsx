import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import imgSrc from '../../Images/pics';
import { toast } from 'react-toastify'

import { auth, db } from '../../firebase'
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore';

function Register(props) {
  const [user, setUser] = useState({
    name : "",
    email : "",
    pass: ""
  })

  const navigate = useNavigate()

  const readDate = async (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value })
  }

  const submitHanldler = async(e) => {
    e.preventDefault()
    try {
       console.log("user = ", user)
       let email = user.email
       let password = user.pass

       const res = await createUserWithEmailAndPassword(auth, email, password)

       await sendEmailVerification(email)
       .then(res => {
        toast.success("Verification is successfully")
       })
       .catch(err => toast.error(err.message,"something went wrong"))

       await setDoc(doc(db, "user", res.user.uid), {
        uid : res.user.uid,
        displaName : user.name,
        email,
        photoUrl : "https://a.storyblok.com/f/191576/1200x800/215e59568f/round_profil_picture_after_.webp"
       })

       await setDoc(doc(db, "userChats", res.user.uid), {})


       toast.success(`User Successfully rehistered`)

       navigate('/login')
    } catch (err) {
      toast.error(err.message)   
    }
  }
  return (
    <div>
      <div className="container">
        <div className="wrapper">
          <span className="logo">React-chat-app</span>
        </div>

        <div className="form-wrapper">
          <div className="left">
            <img src={imgSrc.loginImg} alt="noimage" />
          </div>
          <div className="right">
            <div className="title">
              Register Here
            </div>
            <form autoComplete='off' onClick={submitHanldler}>
              <div className="form-item">
                <label htmlFor="name">Enter your name</label>
                <input type="text" name='name'id='name' placeholder='Enter name' required className='form-input' value={user.name} onChange={readDate}/>
              </div>

              <div className="form-item">
                <label htmlFor="email">Enter your email</label>
                <input type="email" name='email'id='email' required className='form-input'  placeholder='Enter email' value={user.email} onChange={readDate}/>
              </div>

              <div className="form-item">
                <label htmlFor="name">password</label>
                <input type="password" name='pass'id='pass' required className='form-input'  placeholder='Enter  password' value={user.pass} onChange={readDate}/>
              </div>
              <div className="form-item">
                <input type="submit" value='Register' className='btn btn-green' required />
              </div>
            </form>
            <div className="block">
              <NavLink to={'/login'} className='btn-link'>Already registered login here</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
