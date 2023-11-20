import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Blogpost from './Blogpost';

const Commentpopupbox = ({ isOpen, onClose}) => {

     return (
         <>
             {isOpen && (
                 <div className={`popup-overlay d-flex justify-content-center ${isOpen ? 'visible' : 'hidden'}`}>
                     <div className="popup">
                         <div className="card" style={{ width: '34rem', marginRight: '5px' }}>
                             <div className="card-body">
                                 <label for="exampleFormControlTextarea1">Blog Title : &nbsp;</label>
                                 <input type="text" name="title" placeholder='Enter Title' style={{ width: '100%' }} />
                                 <br></br> <br></br>
                                 <label for="exampleFormControlTextarea1">Blog Content</label>
                                 <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name='content' ></textarea>
                                 <div className='row'>
                                     <div className='col-6'>
                                         <button className='btn btn-danger m-4' >Close</button>
                                     </div>
                                     <div className='col-6'><br></br>
                                         <button className='btn btn-primary' >Post Blog</button>
                                     </div>
                                 </div>
                             </div>
                         </div>
 
                     </div>
                 </div>
             )}
         </>
     )
}

export default Commentpopupbox