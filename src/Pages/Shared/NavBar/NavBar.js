import React, { useContext, useState } from 'react';
import './NavBar.css'
import { Link } from 'react-router-dom';
import logo from '../../../images/logo2.png'
import { BsCart3 } from 'react-icons/bs';
import userIcon from '../../../images/icons/user-icon.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/Firebase';
import { signOut } from 'firebase/auth';
import { CartContext } from '../../../App';
import toast from 'react-hot-toast';


const NavBar = () => {
    const [settingOpen, setSettingOpen] = useState(false);
    const [user, loading, error] = useAuthState(auth);
    const [cart, setCart] = useContext(CartContext)
    
    let quantity = 0;
    for(const item of cart){
        quantity = item.quantity + quantity;
    }
    const handleSignOut = () => {
        toast.success('Signout Successfully!')
        signOut(auth)
        setSettingOpen(false)
    }

    return (
        <div className='nav-container'>
            <nav>
                <img src={logo} alt="Logo" />

                <div className='nav-links'>
                    <Link className='cart-icon' to='/cart'><BsCart3 /> <span>{quantity}</span></Link>
                    {user ?
                        <div onClick={() => setSettingOpen(!settingOpen)} className="user-profile">
                            <img src={userIcon} alt="" />
                        </div>
                        :
                        <Link className='login' to='/login'>Login</Link>
                    }


                    {/* <div className="profile-dropdown">
                        <h1>Profile</h1>
                    </div> */}
                </div>

                {settingOpen &&
                    <div className="settings-menu">
                        <p>{user?.email}</p>
                        <button onClick={handleSignOut}>Logout</button>
                    </div>
                }
            </nav>
        </div>
    );
};

export default NavBar;