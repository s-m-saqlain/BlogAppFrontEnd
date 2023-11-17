import React, { useState } from 'react'


const Popupbox = ({ isOpen, onClose }) => {
    


    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');
    const [text3, setText3] = useState('');

    const handleButtonClick = () => {
        onClose();
    };
    return (
        <>
        
            {isOpen && (
                <div className="popup-overlay d-flex justify-content-center">
                    <div className="popup">
                        <div className="card" style={{ width: '34rem', marginRight: '5px' }}>
                            {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
                            <div className="card-body">
                                <label for="exampleFormControlTextarea1">Blog Title : &nbsp;</label>
                                <input type="text" placeholder='Enter Title' value={text1} onChange={(e) => setText1(e.target.value)} style={{ width: '100%' }} />
                                <br></br> <br></br>
                                <label for="exampleFormControlTextarea1">Blog Content</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={text3} onChange={(e) => setText3(e.target.value)}></textarea>
                                <div className='row'>
                                    <div className='col-6'>
                                        <button className='btn btn-danger m-4' onClick={handleButtonClick}>Close</button>
                                    </div>
                                    <div className='col-6'><br></br>
                                        <button className='btn btn-primary'>Add BlogApp</button>
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

export default Popupbox