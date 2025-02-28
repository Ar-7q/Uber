import React from 'react';
import { Link } from 'react-router-dom';

const Start = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: "url('https://files.oaiusercontent.com/file-DBwPRa5PXaf6PZgh57t8gq?se=2025-02-27T21%3A21%3A29Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D3e77afff-20e7-429d-b73f-70a6f52e348a.webp&sig=Q9vi7/pmg808FSw8tXdJnaVqQVnv7VYCErag98spBUk%3D')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          paddingTop: '2rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <img
          style={{
            width: '8rem',
            height:'8rem',
            marginLeft: '2rem',
          }}
          src="https://files.oaiusercontent.com/file-UiLCNQBqT9QaQeuar3imz3?se=2025-02-27T21%3A25%3A02Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D46397869-5c08-48bc-b3d2-a0164e4fe85d.webp&sig=7chRFN4HjKoxpzWzbHH%2Briln3olCA23aytIQo1K8kUk%3D"
          alt=""
        />
        <div
          style={{
            backgroundColor: 'white',
            padding: '1rem',
            paddingBottom: '2rem',
          }}
        >
          <h2
            style={{
              fontSize: '30px',
              fontWeight: '600',
            }}
          >
            Move With Kuber....
          </h2>
          <Link
            to="/login"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              backgroundColor: 'grey',
              color: 'wheat',
              fontStyle:'italic',
              fontSize:'1.3rem',
              padding: '0.75rem',
              borderRadius: '0.5rem',
              marginTop: '1.25rem',
              textDecoration: 'none',
            }}
          >
            Continue 
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
