import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
// import Blogpost from './Blogpost';

const Blogpost = () => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const location = useLocation();
    console.log(location)

    const categoryId = location.state?.categoryId;
    console.log(categoryId)
  
    useEffect(() => {
      
      const fetchData = async () => {
        try {

          const token = localStorage.getItem('user');
  
          if (!token) {
            throw new Error('Token not found in local storage');
          }
  
          const response = await axios.get('https://blogappproject2.pythonanywhere.com/userapi/blog_post/', {
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
    }, [categoryId]);

  return (
    <>
    <p>Category ID: {categoryId}</p>

    {data ? (
          <ul>
            {data.map((item) => {return(
              <li key={item.id}>{item.title}</li>
            )})}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
    
    </>
  )
}

export default Blogpost