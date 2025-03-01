import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CaptainDataContext } from '../context/CaptainContext'
const CaptainSignup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [vehicleColor, setVehicleColor] = useState('');
  const [vehiclePlate, setVehiclePlate] = useState('');
  const [vehicleCapacity, setVehicleCapacity] = useState('');
  const [vehicleType, setVehicleType] = useState('');

  const { setCaptain } = useContext(CaptainDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const captainData = {
      fullname: { firstname: firstName, lastname: lastName },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      },
    };

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/register`, captainData);

      if (response.status === 201) {
        const data = response.data;
        setCaptain(data.captain);
        localStorage.setItem('token', data.token);
        navigate('/captain-home');
      }
    } catch (error) {
      console.error('Signup error:', error.response?.data || error.message);
    }

    setEmail('');
    setFirstName('');
    setLastName('');
    setPassword('');
    setVehicleColor('');
    setVehiclePlate('');
    setVehicleCapacity('');
    setVehicleType('');
  };

  return (
    <div style={{ padding: '20px', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <img
          style={{ width: '80px', marginBottom: '10px' }}
          src="https://files.oaiusercontent.com/file-YCmzXMiLoHsqXk6S2Lag2w?se=2025-03-01T11%3A42%3A52Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D59c4020c-9845-43f0-b665-bc70aeaaffef.webp&sig=cHDkMVUzn1Hy5Hx7OdBMMoBU2x2d46A2iGGLKdN9XtQ%3Dg"
          alt=""
        />

        <form onSubmit={submitHandler}>
          <h3 style={{ fontSize: '18px', fontWeight: '500', marginBottom: '8px' }}>What's our Captain's name</h3>
          <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
            <input
              required
              style={{ backgroundColor: '#eeeeee', width: '50%', borderRadius: '8px', padding: '10px', border: '1px solid #ccc', fontSize: '16px' }}
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              required
              style={{ backgroundColor: '#eeeeee', width: '50%', borderRadius: '8px', padding: '10px', border: '1px solid #ccc', fontSize: '16px' }}
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <h3 style={{ fontSize: '18px', fontWeight: '500', marginBottom: '8px' }}>What's our Captain's email</h3>
          <input
            required
            style={{ backgroundColor: '#eeeeee', marginBottom: '20px', borderRadius: '8px', padding: '10px', border: '1px solid #ccc', width: '100%', fontSize: '16px' }}
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h3 style={{ fontSize: '18px', fontWeight: '500', marginBottom: '8px' }}>Enter Password</h3>
          <input
            required
            style={{ backgroundColor: '#eeeeee', marginBottom: '20px', borderRadius: '8px', padding: '10px', border: '1px solid #ccc', width: '100%', fontSize: '16px' }}
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <h3 style={{ fontSize: '18px', fontWeight: '500', marginBottom: '8px' }}>Vehicle Information</h3>
          <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
            <input
              required
              style={{ backgroundColor: '#eeeeee', width: '50%', borderRadius: '8px', padding: '10px', border: '1px solid #ccc', fontSize: '16px' }}
              type="text"
              placeholder="Vehicle Color"
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
            />
            <input
              required
              style={{ backgroundColor: '#eeeeee', width: '50%', borderRadius: '8px', padding: '10px', border: '1px solid #ccc', fontSize: '16px' }}
              type="text"
              placeholder="Vehicle Plate"
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
            />
          </div>

          <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
            <input
              required
              style={{ backgroundColor: '#eeeeee', width: '50%', borderRadius: '8px', padding: '10px', border: '1px solid #ccc', fontSize: '16px' }}
              type="number"
              placeholder="Vehicle Capacity"
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
            />
            <select
              required
              style={{ backgroundColor: '#eeeeee', width: '50%', borderRadius: '8px', padding: '10px', border: '1px solid #ccc', fontSize: '16px' }}
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
            >
              <option value="" disabled>Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Moto</option>
            </select>
          </div>

          <button
            style={{ backgroundColor: '#111', color: 'white', fontWeight: '600', marginBottom: '15px', borderRadius: '8px', padding: '10px', width: '100%', fontSize: '16px' }}
          >
            Create Captain Account
          </button>
        </form>

        <p style={{ textAlign: 'center' }}>
          Already have an account? <Link to="/captain-login" style={{ color: '#007bff' }}>Login here</Link>
        </p>
      </div>

      <div>
        <p style={{ fontSize: '10px', marginTop: '16px', lineHeight: '1.5' }}>
          This site is protected by reCAPTCHA and the <span style={{ textDecoration: 'underline' }}>Google Privacy Policy</span> and <span style={{ textDecoration: 'underline' }}>Terms of Service</span> apply.
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;


