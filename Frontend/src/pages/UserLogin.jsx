import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
// import { UserDataContext } from '../context/UserContext'
// import { useNavigate } from 'react-router-dom'
// import axios from 'axios'


const UserLogin = () => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ userData, setUserData ] = useState({})

  // const { user, setUser } = useContext(UserDataContext)
  // const navigate = useNavigate()



  const submitHandler = async (e) => {
    e.preventDefault();

    setUserData({
      email: email,
      password: password
    })
    console.log(userData);
    setEmail('')
    setPassword('')
  }

  //   const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)

  //   if (response.status === 200) {
  //     const data = response.data
  //     setUser(data.user)
  //     localStorage.setItem('token', data.token)
  //     navigate('/home')
  //   }


  //   
  // }

  return (
    <div style={{ padding: '1.5rem', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <img style={{ width: '5rem', marginBottom: '1rem' }} src="https://files.oaiusercontent.com/file-UiLCNQBqT9QaQeuar3imz3?se=2025-02-27T21%3A25%3A02Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D46397869-5c08-48bc-b3d2-a0164e4fe85d.webp&sig=7chRFN4HjKoxpzWzbHH%2Briln3olCA23aytIQo1K8kUk%3D" alt="" />

        <form onSubmit={(e)=>{
          submitHandler(e)
        }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: '500', marginBottom: '0.5rem', fontFamily:'monospace', color:'Highlight'}}>Email</h3>
          <input
            required
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
            style={{ backgroundColor: '#eeeeee', marginBottom: '1.75rem', borderRadius: '0.5rem', padding: '0.5rem 1rem', width: '100%', fontSize: '1.125rem', placeholder: { fontSize: '1rem' } }}
            type="email"
            placeholder='abc@gmail.com'
          />

          <h3 style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '0.5rem',fontFamily:'monospace', color:'Highlight' }}>Enter Password</h3>

          <input
            style={{ backgroundColor: '#eeeeee', marginBottom: '1.75rem', borderRadius: '0.5rem', padding: '0.5rem 1rem', width: '100%', fontSize: '1.2rem', placeholder: { fontSize: '1rem' } }}
            required 
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
            type="password"
            placeholder='*********'
          />

          <button
            style={{ backgroundColor: 'darkcyan', color: 'white', fontWeight: '600', marginBottom: '0.75rem', borderRadius: '0.5rem', padding: '0.5rem 1rem', width: '100%', fontSize: '1.125rem', placeholder: { fontSize: '1rem' } }}
          >Login</button>

        </form>
        <p style={{ textAlign: 'center' ,fontFamily:'cursive'}}>New User? <br/>
          <Link to='/signup' style={{ color: '#1e90ff' }}>Create new Account</Link></p>
      </div>
      <div>
        <Link
          to='/captain-login'
          style={{ backgroundColor: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: '600', marginBottom: '1.25rem', borderRadius: '0.5rem', padding: '0.5rem 1rem', width: '100%', fontSize: '1.125rem', placeholder: { fontSize: '1rem' } }}
        >Sign In Captain</Link>
      </div>
    </div>
  )
}

export default UserLogin
