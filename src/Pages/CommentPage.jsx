import React, { useState, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

const CommentPage = () => {
    const navigate = useNavigate();

    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');
    const [text3, setText3] = useState('');

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
  
          const response = await axios.get(`https://blogappproject2.pythonanywhere.com/userapi/comments/?blog_post_id=${id}`, {
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



    const handleAddBlogApp = async () => {
        try {
        
          const token = localStorage.getItem('user');
    
          const apiUrl = `https://blogappproject2.pythonanywhere.com/userapi/comments/`; 
    
          const postData = {
            blog_post_id: id,
            content: text3,
          };
    
          const response = await axios.post(apiUrl, postData, {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          });
          console.log(response.data)
          
          //Reload the Page

         window.location.reload();

        } catch (error) {
          console.error('Error adding BlogApp:', error);
         
        }
      };

  return (
    <>

    {data ? (
        <ul>
          {data.post.map((item) => {
            return (
              <div className="card m-3" style={{ maxWidth: "74rem" }}>
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <span className="card-title" style={{ fontSize: '18px' }}>{item.title}</span>
                      <span className="card-title ms-3 px-sm-5" style={{ fontSize: '14px', marginLeft:'400px'}}>Date: {item.created_at}</span>
                    </div>
                    
                  </div><br/><br/>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <span className="card-title" style={{ fontSize: '16px' }}>Author: <b>{item.full_name}</b></span>
                      <span className="card-title ms-3 px-sm-5" style={{ fontSize: '20px', marginLeft:'505px'}}>Blog Category: {item.category_name}</span>
                    </div>

                  </div><br/><br/>
                  <h4 style={{textAlign:'center'}}>Title : {item.title}</h4><br/>
                  <p>{item.content}</p>
                </div>
              </div>

            )
          })}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
      <br />
      <h3 style={{marginLeft:'65px'}}>Comments Sections</h3><br />

    {data ? (
        <ul>
          {data.comment.map((item) => {
            return (
              <div className="card m-5" style={{ maxWidth: "44rem",marginLeft:'50px' }}>
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <span className="card-title" style={{ fontSize: '14px' }}>By: <b>{item.comment_name}</b></span>
                      <span className="card-title ms-3 px-sm-5" style={{ fontSize: '12px',marginLeft:'205px'}}>Date: {item.created_at}</span>
                    </div>


                  </div>
                  <br />
                  <p className="card-text" style={{ fontSize: '17px' }}> {item.comment}</p>
                </div>
              </div>
            )
          })}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
      <div className='container m-5'>
      <input type='text' placeholder='Enter Comment' value={text3} onChange={(e) => setText3(e.target.value)} style={{width:'50%',height:'40px'}}/>
      <span>
        <button className='btn btn-primary ml-5' onClick={handleAddBlogApp}>Comment</button>
      </span>
      </div>
     
      
    </>
  )
}

export default CommentPage