import React, { useState, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import Popupbox from './Popupbox';
// import Blogpost from './Blogpost';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import Commentpopupbox from './Commentpopupbox';

const Blogpost = (a) => {

  const navigate = useNavigate();

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams()
  const location = useLocation();
  console.log(location)

  // const categoryId = location.state?.categoryId;
  console.log(id)

  useEffect(() => {

    const fetchData = async () => {
      try {

        const token = localStorage.getItem('user');

        if (!token) {
          throw new Error('Token not found in local storage');
        }

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
  }, [id]);

  const handleItemClick = (itemId) => {
    navigate(`/CommentPage/${itemId}`);
  };


  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  // Comment Popup

  const [isPopupOpenComment, setPopupOpenComment] = useState(false);

  return (
    <>
      <br /><br /><br /><br /><br /><br />
      <div className='container'>
        <button className='btn btn-primary' onClick={openPopup}>Add BlogPost</button>

        <Popupbox isOpen={isPopupOpen} onClose={closePopup} id={id} />
      </div>

      {data ? (
        <ul>
          {data.map((item) => {

            return (
              <div className="card m-3" style={{ maxWidth: "44rem" }}>
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <span className="card-title" style={{ fontSize: '20px' }}>Post By: {item.full_name}</span>
                      <span className="card-title ms-3 px-sm-5" style={{ fontSize: '20px' }}>Date: {item.created_at}</span>
                    </div>
                    <FontAwesomeIcon icon={faComment} size="2x" onClick={() => handleItemClick(item.id)} />

                  </div>
                  <p className="card-title pt-4" style={{ fontSize: '19px' }}>Title: {item.title}</p>
                  <p className="card-text" style={{ fontSize: '17px' }}>Content: {item.content}</p>
                </div>
              </div>

            )
          })}
        </ul>
      ) : (
        <p>Loading...</p>
      )}

    </>
  )
}

export default Blogpost