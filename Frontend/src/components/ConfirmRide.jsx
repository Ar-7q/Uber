import React from "react";

const ConfirmRide=(props)=>{
    return (
        <div>
            <h5 
                style={{ padding: '4px', textAlign: 'center', width: '93%', position: 'absolute', top: '0' }} 
                onClick={() => props.setConfirmRidePanel(false)}
            >
                <i className="ri-arrow-down-wide-line" style={{ fontSize: '1.875rem', color: '#E5E7EB' }}></i>
            </h5>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '20px' }}>Confirm your Ride</h3>
    
            <div style={{ display: 'flex', gap: '8px', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center' }}>
                <img 
                    style={{ height: '80px' }} 
                    src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" 
                    alt="" 
                />
                <div style={{ width: '100%', marginTop: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '12px', borderBottom: '2px solid' }}>
                        <i className="ri-map-pin-user-fill"></i>
                        <div>
                            <h3 style={{ fontSize: '1.125rem', fontWeight: '500' }}>562/11-A</h3>
                            <p style={{ fontSize: '0.875rem', marginTop: '-4px', color: '#4B5563' }}>{props.pickup}</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '12px', borderBottom: '2px solid' }}>
                        <i className="ri-map-pin-2-fill" style={{ fontSize: '1.125rem' }}></i>
                        <div>
                            <h3 style={{ fontSize: '1.125rem', fontWeight: '500' }}>562/11-A</h3>
                            <p style={{ fontSize: '0.875rem', marginTop: '-4px', color: '#4B5563' }}>{props.destination}</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '12px' }}>
                        <i className="ri-currency-line"></i>
                        <div>
                            <h3 style={{ fontSize: '1.125rem', fontWeight: '500' }}>₹{props.fare[props.vehicleType]}</h3>
                            <p style={{ fontSize: '0.875rem', marginTop: '-4px', color: '#4B5563' }}>Cash Cash</p>
                        </div>
                    </div>
                </div>
                <button 
                    onClick={() => {
                        props.setVehicleFound(true);
                        props.setConfirmRidePanel(false);
                        props.createRide();
                    }} 
                    style={{ width: '100%', marginTop: '20px', backgroundColor: '#059669', color: 'white', fontWeight: '600', padding: '8px', borderRadius: '8px' }}
                >
                    Confirm
                </button>
            </div>
        </div>
    );
    
}

export  default ConfirmRide;