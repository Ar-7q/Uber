import React from 'react';

const RidePopUp = (props) => {
    return (
        <div style={{ padding: '20px', textAlign: 'center', position: 'relative' }}>
            <h5
                style={{ padding: '5px', width: '93%', position: 'absolute', top: 0, cursor: 'pointer' }}
                onClick={() => props.setRidePopupPanel(false)}
            >
                <i style={{ fontSize: '24px', color: '#ccc' }} className="ri-arrow-down-wide-line"></i>
            </h5>
            <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '20px' }}>New Ride Available!</h3>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px', backgroundColor: '#FFD700', borderRadius: '10px', marginTop: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <img
                        style={{ height: '48px', width: '48px', borderRadius: '50%', objectFit: 'cover' }}
                        src="https://i.pinimg.com/236x/af/26/28/af26280b0ca305be47df0b799ed1b12b.jpg"
                        alt=""
                    />
                    <h2 style={{ fontSize: '18px', fontWeight: '500' }}>
                        {props.ride?.user.fullname.firstname + ' ' + props.ride?.user.fullname.lastname}
                    </h2>
                </div>
                <h5 style={{ fontSize: '18px', fontWeight: '600' }}>2.2 KM</h5>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', marginTop: '15px' }}>
                <div style={{ width: '100%' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '10px', borderBottom: '2px solid #ccc' }}>
                        <i className="ri-map-pin-user-fill"></i>
                        <div>
                            <h3 style={{ fontSize: '16px', fontWeight: '500' }}>562/11-A</h3>
                            <p style={{ fontSize: '14px', color: '#777', marginTop: '-5px' }}>{props.ride?.pickup}</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '10px', borderBottom: '2px solid #ccc' }}>
                        <i className="ri-map-pin-2-fill" style={{ fontSize: '16px' }}></i>
                        <div>
                            <h3 style={{ fontSize: '16px', fontWeight: '500' }}>562/11-A</h3>
                            <p style={{ fontSize: '14px', color: '#777', marginTop: '-5px' }}>{props.ride?.destination}</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '10px' }}>
                        <i className="ri-currency-line"></i>
                        <div>
                            <h3 style={{ fontSize: '16px', fontWeight: '500' }}>₹{props.ride?.fare}</h3>
                            <p style={{ fontSize: '14px', color: '#777', marginTop: '-5px' }}>Cash Cash</p>
                        </div>
                    </div>
                </div>
                <div style={{ marginTop: '10px', width: '100%' }}>
                    <button
                        onClick={() => {
                            props.setConfirmRidePopupPanel(true);
                            props.confirmRide();
                        }}
                        style={{
                            backgroundColor: '#008000',
                            color: 'white',
                            fontWeight: '600',
                            padding: '10px',
                            width: '100%',
                            borderRadius: '10px',
                            fontSize: '16px',
                            cursor: 'pointer',
                            border: 'none',
                        }}
                    >
                        Accept
                    </button>

                    <button
                        onClick={() => props.setRidePopupPanel(false)}
                        style={{
                            marginTop: '10px',
                            backgroundColor: '#D3D3D3',
                            color: '#444',
                            fontWeight: '600',
                            padding: '10px',
                            width: '100%',
                            borderRadius: '10px',
                            fontSize: '16px',
                            cursor: 'pointer',
                            border: 'none',
                        }}
                    >
                        Ignore
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RidePopUp;
