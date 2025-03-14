import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const CaptainLogout = () => {
    const token = localStorage.getItem('captain-token');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/captain/logout`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            if (response.status === 200) {
                localStorage.removeItem('captain-token');
                navigate('/captain-login');
            }
        }).catch((error) => {
            console.error('Logout failed:', error);
        });
    }, [navigate, token]); // Dependency array ensures it runs only on mount

    return <div>Logging out...</div>;
};

export default CaptainLogout;
