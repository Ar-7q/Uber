import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserDataContext } from '../context/UserContext';

const UserSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  
  const navigate = useNavigate();
  const { setUser } = useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      fullname: { firstname: firstName, lastname: lastName },
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/register`, newUser);
      if (response.status === 201) {
        const data = response.data;
        setUser(data.user);
        localStorage.setItem('token', data.token);
        navigate('/home');
      }
    } catch (error) {
      console.error('Signup error:', error);
    }

    setEmail('');
    setFirstName('');
    setLastName('');
    setPassword('');
  };

  return (
    <div style={{ padding: '1.75rem', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <img
          style={{ width: '7rem', marginBottom: '2.5rem' }}
          src="https://files.oaiusercontent.com/file-YCmzXMiLoHsqXk6S2Lag2w?se=2025-03-01T11%3A42%3A52Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D59c4020c-9845-43f0-b665-bc70aeaaffef.webp&sig=cHDkMVUzn1Hy5Hx7OdBMMoBU2x2d46A2iGGLKdN9XtQ%3D"
          alt="logo"
        />

        <form onSubmit={submitHandler}>
          <h3 style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '0.5rem' }}>What's your name</h3>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.75rem' }}>
            <input
              required
              style={inputStyle}
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              required
              style={inputStyle}
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <h3 style={labelStyle}>What's your email</h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyleFull}
            type="email"
            placeholder="email@example.com"
          />

          <h3 style={labelStyle}>Enter Password</h3>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyleFull}
            type="password"
            placeholder="password"
          />

          <button style={buttonStyle}>Create account</button>
        </form>

        <p style={{ textAlign: 'center' }}>
          Already have an account? <Link to="/login" style={{ color: '#2563eb' }}>Login here</Link>
        </p>
      </div>

      <div>
        <p style={{ fontSize: '10px', lineHeight: '1.2' }}>
          This site is protected by reCAPTCHA and the <span style={{ textDecoration: 'underline' }}>Google Privacy Policy</span> and <span style={{ textDecoration: 'underline' }}>Terms of Service apply</span>.
        </p>
      </div>
    </div>
  );
};

const inputStyle = {
  background: '#eeeeee',
  width: '50%',
  borderRadius: '0.5rem',
  padding: '0.5rem 1rem',
  border: '1px solid',
  fontSize: '1.125rem'
};

const inputStyleFull = {
  background: '#eeeeee',
  marginBottom: '1.75rem',
  borderRadius: '0.5rem',
  padding: '0.5rem 1rem',
  border: '1px solid',
  width: '100%',
  fontSize: '1.125rem'
};

const labelStyle = {
  fontSize: '1.125rem',
  fontWeight: '500',
  marginBottom: '0.5rem'
};

const buttonStyle = {
  background: '#111',
  color: 'white',
  fontWeight: '600',
  marginBottom: '0.75rem',
  borderRadius: '0.5rem',
  padding: '0.5rem 1rem',
  width: '100%',
  fontSize: '1.125rem'
};

export default UserSignup;

