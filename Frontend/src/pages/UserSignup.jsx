import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserSignup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userData, setUserData] = useState({});

    const submitHandler = async (e) => {
        e.preventDefault();
        setUserData({
            fullname: {
                firstname: firstName,
                lastname: lastName
            },
            email: email,
            password: password
        });
        console.log(userData)

        // Reset input fields after submission
        setEmail('');
        setFirstName('');
        setLastName('');
        setPassword('');
    };

    return (
        <div>
            <div style={{ padding: '1.75rem', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                    
                    <img
                        style={{ width: '8rem',height:'', marginBottom: '2rem' }}
                        src="https://files.oaiusercontent.com/file-2AeDKH2vbDNe1h6345w61C?se=2025-02-28T17%3A48%3A30Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dab70f194-d702-4e8f-9164-7e2c7d782d7a.webp&sig=r6PirQDwPVCVF%2B44UT7QtMTVPNyr8zf557GaH4L5LYo%3D"
                        alt=""
                    />

                   
                    

                    <form onSubmit={submitHandler}>
                        <h3 style={{ fontSize: '1.125rem', width: '50%', fontWeight: '500', marginBottom: '0.5rem' }}>What's your name</h3>
                        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.75rem' }}>
                            <input
                                required
                                style={{ background: '#eeeeee', width: '50%', borderRadius: '0.5rem', padding: '0.5rem 1rem', border: '1px solid', fontSize: '1.125rem' }}
                                type="text"
                                placeholder="First name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            <input
                                required
                                style={{ background: '#eeeeee', width: '50%', borderRadius: '0.5rem', padding: '0.5rem 1rem', border: '1px solid', fontSize: '1.125rem' }}
                                type="text"
                                placeholder="Last name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>

                        <h3 style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '0.5rem' }}>What's your email</h3>
                        <input
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{ background: '#eeeeee', marginBottom: '1.75rem', borderRadius: '0.5rem', padding: '0.5rem 1rem', border: '1px solid', width: '100%', fontSize: '1.125rem' }}
                            type="email"
                            placeholder="email@example.com"
                        />

                        <h3 style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '0.5rem' }}>Enter Password</h3>
                        <input
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{ background: '#eeeeee', marginBottom: '1.75rem', borderRadius: '0.5rem', padding: '0.5rem 1rem', border: '1px solid', width: '100%', fontSize: '1.125rem' }}
                            type="password"
                            placeholder="password"
                        />

                        <button
                            style={{ background: '#111', color: 'white', fontWeight: '600', marginBottom: '0.75rem', borderRadius: '0.5rem', padding: '0.5rem 1rem', width: '100%', fontSize: '1.125rem' }}
                        >
                            Create account
                        </button>
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
        </div>
    );
};

export default UserSignup;
