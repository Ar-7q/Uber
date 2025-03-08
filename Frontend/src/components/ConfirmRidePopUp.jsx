import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ConfirmRidePopUp = (props) => {
    const [otp, setOtp] = useState('');
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();

        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/start-ride`, {
            params: {
                rideId: props.ride._id,
                otp: otp
            },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });

        if (response.status === 200) {
            props.setConfirmRidePopupPanel(false);
            props.setRidePopupPanel(false);
            navigate('/captain-riding', { state: { ride: props.ride } });
        }
    };

    return (
        <div>
            <h5
                style={{
                    padding: '4px',
                    textAlign: 'center',
                    width: '93%',
                    position: 'absolute',
                    top: '0'
                }}
                onClick={() => props.setRidePopupPanel(false)}
            >
                <i className="ri-arrow-down-wide-line" style={{ fontSize: '1.875rem', color: '#E5E7EB' }}></i>
            </h5>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '20px' }}>
                Confirm this ride to Start
            </h3>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px',
                    border: '2px solid #FACC15',
                    borderRadius: '8px',
                    marginTop: '16px'
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <img
                        style={{ height: '48px', width: '48px', borderRadius: '50%', objectFit: 'cover' }}
                        src="https://i.pinimg.com/236x/af/26/28/af26280b0ca305be47df0b799ed1b12b.jpg"
                        alt=""
                    />
                    <h2 style={{ fontSize: '1.125rem', fontWeight: '500', textTransform: 'capitalize' }}>
                        {props.ride?.user.fullname.firstname}
                    </h2>
                </div>
                <h5 style={{ fontSize: '1.125rem', fontWeight: '600' }}>2.2 KM</h5>
            </div>
            <div style={{ display: 'flex', gap: '8px', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: '100%', marginTop: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '12px', borderBottom: '2px solid' }}>
                        <i className="ri-map-pin-user-fill"></i>
                        <div>
                            <h3 style={{ fontSize: '1.125rem', fontWeight: '500' }}>562/11-A</h3>
                            <p style={{ fontSize: '0.875rem', marginTop: '-4px', color: '#4B5563' }}>{props.ride?.pickup}</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '12px', borderBottom: '2px solid' }}>
                        <i className="ri-map-pin-2-fill" style={{ fontSize: '1.125rem' }}></i>
                        <div>
                            <h3 style={{ fontSize: '1.125rem', fontWeight: '500' }}>562/11-A</h3>
                            <p style={{ fontSize: '0.875rem', marginTop: '-4px', color: '#4B5563' }}>{props.ride?.destination}</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '12px' }}>
                        <i className="ri-currency-line"></i>
                        <div>
                            <h3 style={{ fontSize: '1.125rem', fontWeight: '500' }}>₹{props.ride?.fare} </h3>
                            <p style={{ fontSize: '0.875rem', marginTop: '-4px', color: '#4B5563' }}>Cash Cash</p>
                        </div>
                    </div>
                </div>

                <div style={{ marginTop: '24px', width: '100%' }}>
                    <form onSubmit={submitHandler}>
                        <input
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            type="text"
                            style={{
                                backgroundColor: '#EEE',
                                padding: '16px 24px',
                                fontFamily: 'monospace',
                                fontSize: '1.125rem',
                                borderRadius: '8px',
                                width: '100%',
                                marginTop: '12px'
                            }}
                            placeholder="Enter OTP"
                        />

                        <button
                            style={{
                                width: '100%',
                                marginTop: '20px',
                                fontSize: '1.125rem',
                                display: 'flex',
                                justifyContent: 'center',
                                backgroundColor: '#059669',
                                color: 'white',
                                fontWeight: '600',
                                padding: '12px',
                                borderRadius: '8px'
                            }}
                        >
                            Confirm
                        </button>
                        <button
                            onClick={() => {
                                props.setConfirmRidePopupPanel(false);
                                props.setRidePopupPanel(false);
                            }}
                            style={{
                                width: '100%',
                                marginTop: '8px',
                                backgroundColor: '#DC2626',
                                fontSize: '1.125rem',
                                color: 'white',
                                fontWeight: '600',
                                padding: '12px',
                                borderRadius: '8px'
                            }}
                        >
                            Cancel
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ConfirmRidePopUp;
