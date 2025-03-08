import React from 'react';

const Home = () => {
    const submitHandler = (e) => {
        e.preventDefault(); // ✅ Fixed missing parentheses
    };

    return (
        <div >
            <div>
                <img
                    style={styles.logo}
                    src="https://i.ibb.co/7c050CK/DALL-E-2025-03-08-22-13-23-A-simple-and-professional-logo-for-Kuber-Taxi-Service-featuring-the-text.webp"
                    alt="kuber_logo"
                />
            </div>


            <div>
                <img
                    style={styles.image2}
                    alt="gif_animation"
                    src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
                />
            </div>

            <div style={styles.formContainer}>
                <h4 style={styles.heading}>Find A Trip...</h4>
                <form onSubmit={submitHandler} style={styles.form}>
                    <input type="text" placeholder="Add a Pick-Up Location" style={styles.input} />
                    <input type="text" placeholder="Enter Your Destination" style={styles.input} />
                    <button type="submit" style={styles.button}>Search</button>
                </form>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
        padding: '0.5rem',
        backgroundColor: '#f4f4f4',
    },
    image2: {
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        zIndex: '-1',
        objectFit: 'cover',
    },
    logo: {
        width: '8rem',
        borderRadius: '8px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
        position: 'absolute',
        top: '1rem',
        left: '1rem',
        backgroundColor: 'white',
        padding: '0.5rem',
    },
    formContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        padding: '0.5rem',
        borderRadius: '8px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
        textAlign: 'center',
        width: '300px',
        // marginBottom: 'rem',
        bottom:'10rem'
    },
    heading: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#333',
        marginBottom: '1rem',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.8rem',
    },
    input: {
        width: '100%',
        padding: '0.6rem',
        borderRadius: '4px',
        border: '1px solid #ccc',
        fontSize: '1rem',
    },
    button: {
        padding: '0.6rem',
        backgroundColor: '#ffcc00',
        border: 'none',
        borderRadius: '4px',
        fontSize: '1rem',
        fontWeight: 'bold',
        cursor: 'pointer',
    },
};

export default Home;
