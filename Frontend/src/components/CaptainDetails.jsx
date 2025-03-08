import React, { useContext } from 'react';
import { CaptainDataContext } from '../context/CapatainContext';

const CaptainDetails = () => {
    const { captain } = useContext(CaptainDataContext);

    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'start', gap: '12px' }}>
                    <img 
                        style={{ height: '40px', width: '40px', borderRadius: '50%', objectFit: 'cover' }} 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdlMd7stpWUCmjpfRjUsQ72xSWikidbgaI1w&s" 
                        alt="" 
                    />
                    <h4 style={{ fontSize: '1.125rem', fontWeight: '500', textTransform: 'capitalize' }}>
                        {captain.fullname.firstname + " " + captain.fullname.lastname}
                    </h4>
                </div>
                <div>
                    <h4 style={{ fontSize: '1.25rem', fontWeight: '600' }}>₹295.20</h4>
                    <p style={{ fontSize: '0.875rem', color: '#4B5563' }}>Earned</p>
                </div>
            </div>
            <div style={{ display: 'flex', padding: '12px', marginTop: '32px', backgroundColor: '#F3F4F6', borderRadius: '12px', justifyContent: 'center', gap: '20px', alignItems: 'flex-start' }}>
                {['ri-timer-2-line', 'ri-speed-up-line', 'ri-booklet-line'].map((icon, index) => (
                    <div key={index} style={{ textAlign: 'center' }}>
                        <i className={icon} style={{ fontSize: '1.875rem', marginBottom: '8px', fontWeight: '300' }}></i>
                        <h5 style={{ fontSize: '1.125rem', fontWeight: '500' }}>10.2</h5>
                        <p style={{ fontSize: '0.875rem', color: '#4B5563' }}>Hours Online</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CaptainDetails;
