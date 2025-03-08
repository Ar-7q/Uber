import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CaptainDataContext } from '../context/CaptainContext';

const Captainlogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setCaptain } = useContext(CaptainDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const captain = { email, password };

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/login`, captain);
      if (response.status === 200) {
        const data = response.data;
        setCaptain(data.captain);
        localStorage.setItem('token', data.token);
        navigate('/captain-home');
      }
    } catch (error) {
      console.error('Login error:', error.response?.data || error.message);
    }

    setEmail('');
    setPassword('');
  };

  return (
    <div style={{ padding: '28px', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <img 
          style={{ width: '8rem', marginBottom: '12px' }} 
          src="https://files.oaiusercontent.com/file-GeHzHHWRBVsABPjNfhkgbP?se=2025-03-01T16%3A35%3A06Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Df2f972cc-aaf1-47dc-9d12-19522db41f10.webp&sig=Y8ofJd8yn3BYMlp9TWhBA2V5nAt8%2BqlSt9e7PSLRmgM%3D" 
          alt="" 
        />

        <form onSubmit={submitHandler}>
          <h3 style={{ fontSize: '18px', fontWeight: '500', marginBottom: '8px' }}>What's your email</h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ backgroundColor: '#eeeeee', marginBottom: '28px', borderRadius: '8px', padding: '10px', border: '1px solid #ccc', width: '100%', fontSize: '16px' }}
            type="email"
            placeholder="email@example.com"
          />

          <h3 style={{ fontSize: '18px', fontWeight: '500', marginBottom: '8px' }}>Enter Password</h3>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ backgroundColor: '#eeeeee', marginBottom: '28px', borderRadius: '8px', padding: '10px', border: '1px solid #ccc', width: '100%', fontSize: '16px' }}
            type="password"
            placeholder="password"
          />

          <button
            style={{ backgroundColor: '#111', color: 'white', fontWeight: '600', marginBottom: '12px', borderRadius: '8px', padding: '10px', width: '100%', fontSize: '16px' }}
          >
            Login
          </button>
        </form>

        <p style={{ textAlign: 'center' }}>
          Join the Driver fleet ? <Link to="/captain-signup" style={{ color: '#007bff' }}>Register as a Captain</Link>
        </p>
      </div>

      <div>
        <Link
          to="/login"
          style={{ backgroundColor: '#d5622d', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: '600', marginBottom: '20px', borderRadius: '8px', padding: '10px', width: '100%', fontSize: '16px' }}
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default Captainlogin;
