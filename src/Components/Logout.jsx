import React from 'react';
import { useNavigate } from 'react-router-dom';

function Logout({ setLoggedIn }) {
  const navigate = useNavigate();

  // Handle logout
  const handleLogout = () => {
    setLoggedIn(false); // Clear the login status
    navigate('/login'); // Redirect to the login page
  };

  return (
    <div>
      <h1>Logout</h1>
      <p>Click the button below to logout.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;
