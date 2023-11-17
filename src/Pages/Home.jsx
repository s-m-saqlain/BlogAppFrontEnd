import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import Blogpost from './Blogpost';

const Home = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      
      const fetchData = async () => {
        try {

          const token = localStorage.getItem('user');
  
          if (!token) {
            throw new Error('Token not found in local storage');
          }
  
          const response = await axios.get('https://blogappproject2.pythonanywhere.com/userapi/category/', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
  
          setData(response.data.data);
        } catch (error) {
          setError(error);
        }
      };
  
      fetchData();
    }, []);
  return (
    <>
    <div className='container pt-5'>
        <h1>Best types of blogs to create:</h1>
      <br></br><br></br><br></br>
      {/* {data ? (
          <ul>
            {data.map((item) => {return(
              <li key={item.id}><Link to={{
                pathname: '/Blogpost',
                state: { categoryId: item.id }
              }}>{item.name}</Link></li>
            )})}
          </ul>
        ) : (
          <p>Loading...</p>
        )} */}

        {data ? (
          <ul>
            {data.map((item) => {return(
              <li key={item.id}><Link to={{
                pathname: '/Blogpost',
                state: { categoryId: item.id }
              }}>{item.name}</Link></li>
            )})}
          </ul>
        ) : (
          <p>Loading...</p>
        )}

    </div>
    </>
  )
}

export default Home