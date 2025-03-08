import React from 'react';

const WaitingForDriver = (props) => {
  return (
    <div style={{ padding: '20px', position: 'relative' }}>
      <h5
        style={{ padding: '5px', width: '93%', position: 'absolute', top: 0, textAlign: 'center', cursor: 'pointer' }}
        onClick={() => props.waitingForDriver(false)}
      >
        <i style={{ fontSize: '24px', color: '#ccc' }} className="ri-arrow-down-wide-line"></i>
      </h5>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <img style={{ height: '50px' }} src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="" />
        <div style={{ textAlign: 'right' }}>
          <h2 style={{ fontSize: '18px', fontWeight: '500', textTransform: 'capitalize' }}>
            {props.ride?.captain.fullname.firstname}
          </h2>
          <h4 style={{ fontSize: '20px', fontWeight: '600', marginTop: '-5px', marginBottom: '-5px' }}>
            {props.ride?.captain.vehicle.plate}
          </h4>
          <p style={{ fontSize: '14px', color: '#777' }}>Maruti Suzuki Alto</p>
          <h1 style={{ fontSize: '18px', fontWeight: '600' }}>{props.ride?.otp}</h1>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', marginTop: '20px' }}>
        <div style={{ width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px', borderBottom: '2px solid #ccc' }}>
            <i className="ri-map-pin-user-fill"></i>
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: '500' }}>562/11-A</h3>
              <p style={{ fontSize: '14px', marginTop: '-5px', color: '#777' }}>{props.ride?.pickup}</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px', borderBottom: '2px solid #ccc' }}>
            <i className="ri-map-pin-2-fill" style={{ fontSize: '18px' }}></i>
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: '500' }}>562/11-A</h3>
              <p style={{ fontSize: '14px', marginTop: '-5px', color: '#777' }}>{props.ride?.destination}</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px' }}>
            <i className="ri-currency-line"></i>
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: '500' }}>₹{props.ride?.fare}</h3>
              <p style={{ fontSize: '14px', marginTop: '-5px', color: '#777' }}>Cash Cash</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitingForDriver;
