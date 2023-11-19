import React from 'react'
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Logout = async () => {
    try {
        // Make an API request to logout
        const response = await axios.get('https://blogappproject2.pythonanywhere.com/userapi/logout/'); // Replace with your actual logout endpoint
        
        // Assuming the API returns success
        if (response.status === 200) {
          // Clear the token from local storage
          localStorage.removeItem('token');
        }
      } catch (error) {
        console.error('Logout failed', error);
      }
    

  return (
    <>
       <button className='btn btn-primary'>Logout</button>
       <h1>hkfjfb</h1>
    </>
    
  )
};

export default Logout