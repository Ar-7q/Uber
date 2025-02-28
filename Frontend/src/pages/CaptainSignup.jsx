import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const inputStyle = {
  background: '#eeeeee',
  width: '50%',
  borderRadius: '0.5rem',
  padding: '0.5rem 1rem',
//   border: '1px solid',
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

const CaptainSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [vehicleColor, setVehicleColor] = useState('');
  const [vehiclePlate, setVehiclePlate] = useState('');
  const [vehicleCapacity, setVehicleCapacity] = useState('');
  const [vehicleType, setVehicleType] = useState('');
   const [ userData, setUserData ] = useState({})

  const submitHandler = async (e) => {
    e.preventDefault();
    setUserData({
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    })
    console.log(userData)

    // Reset input fields after submission
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
    <div style={{ padding: '1.25rem', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background:'lightblue'}}>
      <div>
        <img
          style={{ width: '7rem', marginBottom: '0.75rem' }}
          src="https://files.oaiusercontent.com/file-Fprk9BUqQjFpYqGXeCGkTH?se=2025-02-28T17%3A22%3A41Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Ddf74c1e8-43d6-413c-abde-b7038826fb02.webp&sig=c/UmiTdWKIAALrXqKgLT8SUnUFa8MRy7OUKmq4kPsdM%3D"
          alt="Uber driver icon"
        />

        <form onSubmit={submitHandler}>
          <h3 style={labelStyle}>What's our Captain's name</h3>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.75rem' }}>
            <input required style={inputStyle} type="text" placeholder="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <input required style={inputStyle} type="text" placeholder="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>

          <h3 style={labelStyle}>What's our Captain's email</h3>
          <input required style={inputStyle} type="email" placeholder="email@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />

          <h3 style={labelStyle}>Enter Password</h3>
          <input required style={inputStyle} type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />

          <h3 style={labelStyle}>Vehicle Information</h3>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.75rem' }}>
            <input required style={inputStyle} type="text" placeholder="Vehicle Color" value={vehicleColor} onChange={(e) => setVehicleColor(e.target.value)} />
            <input required style={inputStyle} type="text" placeholder="Vehicle Plate" value={vehiclePlate} onChange={(e) => setVehiclePlate(e.target.value)} />
          </div>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.75rem' }}>
            <input required style={inputStyle} type="number" placeholder="Vehicle Capacity" value={vehicleCapacity} onChange={(e) => setVehicleCapacity(e.target.value)} />
            <select required style={inputStyle} value={vehicleType} onChange={(e) => setVehicleType(e.target.value)}>
              <option value="" disabled>Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Moto</option>
            </select>
          </div>

          <button style={buttonStyle}>Create Captain Account</button>
        </form>

        <p style={{ textAlign: 'center' }}>Already have an account? <Link to='/captain-login' style={{ color: 'blue' }}>Login here</Link></p>
      </div>

      <div>
        <p style={{ fontSize: '10px', marginTop: '1.5rem', lineHeight: '1.4'}}>
          This site is protected by reCAPTCHA and the <span style={{ textDecoration: 'underline' }}>Google Privacy Policy</span> and <span style={{ textDecoration: 'underline' }}>Terms of Service apply</span>.
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;

