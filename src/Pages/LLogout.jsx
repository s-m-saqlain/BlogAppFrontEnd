import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LLogout = () => {

    const navigate = useNavigate()

    const [token, setToken] = useState('your-initial-token');

    const handleButtonClick = async () => {
        try {
            
            const token = localStorage.getItem("user");
            const headers = {
                Authorization: `Bearer ${token}`,
              };

            const response = await axios.get('https://blogappproject2.pythonanywhere.com/userapi/logout/', { headers });

            setToken('');
            console.log('API response:', response.data);
            navigate('/')
        } catch (error) {
            console.error('Error making API call:', error);
        }
    };

    return (
        <>
            <button className='btn btn-danger' onClick={handleButtonClick}>Logout</button>
        </>
    )
}

export default LLogout