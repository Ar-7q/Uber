import React from 'react';

const Home = () => {
    return (
        <div style={styles.container}>
            
            <img 
                alt='kuber_taxi_logo' 
                style={styles.logo} 
                src='https://i.ibb.co/rfqLqQSJ/DALL-E-2025-03-08-21-46-36-A-professional-and-modern-logo-for-Kuber-Taxi-Service-The-logo-should-fea.webp' 
            />
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',  // ✅ Corrected from 'top' to 'flex-start'
        justifyContent: 'flex-start',  // ✅ Corrected from 'top' to 'flex-start'
        height: '100vh',
        padding: '1rem',  // Added padding to prevent content from sticking to the edge
        backgroundColor: '#f4f4f4',
    },
    title: {
        fontSize: '2rem',
        fontWeight: 'bold',
        color: '#333',
        marginBottom: '1rem',
    },
    logo: {
        width: '8rem',
        borderRadius: '8px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
    }
};

export default Home;

