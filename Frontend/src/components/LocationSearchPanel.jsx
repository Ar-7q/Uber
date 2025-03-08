import React from 'react';

const LocationSearchPanel = ({ suggestions, setVehiclePanel, setPanelOpen, setPickup, setDestination, activeField }) => {
    const handleSuggestionClick = (suggestion) => {
        if (activeField === 'pickup') {
            setPickup(suggestion);
        } else if (activeField === 'destination') {
            setDestination(suggestion);
        }
        setVehiclePanel(true);
        setPanelOpen(false);
    };

    return (
        <div>
            {suggestions.map((elem, idx) => (
                <div
                    key={idx}
                    onClick={() => handleSuggestionClick(elem)}
                    style={{
                        display: 'flex',
                        gap: '1rem',
                        border: '2px solid #f5f5f5',
                        padding: '0.75rem',
                        borderRadius: '10px',
                        alignItems: 'center',
                        margin: '0.5rem 0',
                        justifyContent: 'start',
                        cursor: 'pointer'
                    }}
                >
                    <h2
                        style={{
                            backgroundColor: '#eee',
                            height: '2rem',
                            width: '3rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '50%'
                        }}
                    >
                        <i className="ri-map-pin-fill"></i>
                    </h2>
                    <h4 style={{ fontWeight: '500' }}>{elem}</h4>
                </div>
            ))}
        </div>
    );
};

export default LocationSearchPanel;
