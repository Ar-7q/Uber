import React from 'react';

const LookingForDriver = (props) => {
    return (
        <div style={{ position: 'relative', padding: '20px' }}>
            <h5
                style={{
                    padding: '4px',
                    textAlign: 'center',
                    width: '93%',
                    position: 'absolute',
                    top: '0',
                    cursor: 'pointer'
                }}
                onClick={() => {
                    props.setVehicleFound(false);
                }}
            >
                <i style={{ fontSize: '24px', color: '#e5e7eb' }} className="ri-arrow-down-wide-line"></i>
            </h5>
            <h3 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '20px' }}>Looking for a Driver</h3>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <img style={{ height: '80px' }} src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="" />
                <div style={{ width: '100%', marginTop: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '12px', borderBottom: '2px solid #e5e7eb' }}>
                        <i className="ri-map-pin-user-fill"></i>
                        <div>
                            <h3 style={{ fontSize: '18px', fontWeight: '500' }}>562/11-A</h3>
                            <p style={{ fontSize: '14px', marginTop: '-4px', color: '#6b7280' }}>{props.pickup}</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '12px', borderBottom: '2px solid #e5e7eb' }}>
                        <i style={{ fontSize: '18px' }} className="ri-map-pin-2-fill"></i>
                        <div>
                            <h3 style={{ fontSize: '18px', fontWeight: '500' }}>562/11-A</h3>
                            <p style={{ fontSize: '14px', marginTop: '-4px', color: '#6b7280' }}>{props.destination}</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '12px' }}>
                        <i className="ri-currency-line"></i>
                        <div>
                            <h3 style={{ fontSize: '18px', fontWeight: '500' }}>₹{props.fare[props.vehicleType]} </h3>
                            <p style={{ fontSize: '14px', marginTop: '-4px', color: '#6b7280' }}>Cash Cash</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LookingForDriver;
