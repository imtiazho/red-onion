import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Shipping.css'

const Shipping = () => {
    const navigate = useNavigate()
    const handleForm = (e) => {
        e.preventDefault();
    }
    return (
        <div className='shipping'>
            <div className="form-container">
                <form onSubmit={handleForm}>
                    <div>
                        <div className="input-field">
                            <input type="text" placeholder='Name' />
                        </div>

                    </div>

                    <div>
                        <div className="input-field">
                            <input type="text" placeholder='Email' />
                        </div>
                    </div>

                    <div>
                        <div className="input-field">
                            <input type="text" placeholder='Address' />
                        </div>
                    </div>

                    <div>
                        <div className="input-field">
                            <input type="text" placeholder='Phone' />
                        </div>
                    </div>

                    <div className="input-field">
                        <input onClick={()=>navigate('/confirmOrder')} type="submit" value="Save & Continue" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Shipping;
