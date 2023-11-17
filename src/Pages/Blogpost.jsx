import React, { useState, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import Popupbox from './Popupbox';
// import Blogpost from './Blogpost';

const Blogpost = () => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const {id} = useParams()
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
          //  const formdata = new FormData()
          //  formdata.append('category_id',id)
          const response = await axios.get(`https://blogappproject2.pythonanywhere.com/userapi/blog_post/?category_id=${id}`, {
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



    const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };


  return (
    <>
    <p>Category ID: {id}  </p>
    <br /><br /><br /><br /><br /><br />
    <div className='container'>
      <button className='btn btn-primary' onClick={openPopup}>Add BlogPost</button>

      <Popupbox isOpen={isPopupOpen} onClose={closePopup} />
    </div>
    
    {data ? (
          <ul>
            {data.map((item) => {return(
              <div className="card m-5" style={{ width: "48rem" }}>
              <div className="card-body">
                <span className="card-title" style={{fontSize:'20px'}}>Post By : {item.full_name}</span>
                <span className="card-title px-5"  style={{fontSize:'20px'}}>Date : {item.created_at}</span>
                <p className="card-title pt-4" style={{fontSize:'19px'}}>Title : {item.title}</p>
                <p className="card-text" style={{fontSize:'17px'}}>Content : {item.content}</p>
              </div>
              {/* <ul className="list-group list-group-flush">
                <li className="list-group-item">Cras justo odio</li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item">Vestibulum at eros</li>
              </ul> */}
              {/* <div className="card-body">
                <Link to="#" className="card-link">
                  Card link
                </Link>
                <Link to="#" className="card-link">
                  Another link
                </Link>
              </div> */}
            </div>
            
              // <li key={item.id}>{item.title}</li>
            )})}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
    
    </>
  )
}

export default Blogpost