import React from 'react';
import {Link} from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg'
import './header.styles.scss';

import {auth} from '../../firebase/firebase.utils';

const Header = ({currentUser}) => (
    <div className="header">
        <Link to="/" className="logo-container">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link to="/shop" className="option">
                SHOP
            </Link>
            <Link className="option" to="/contact">
                CONTACT
            </Link>
            {currentUser 
            ? (<div className="option" onClick={() => {auth.signOut()}}> SIGN IN </div>) 
            : (<Link className="option" to="/signin"> SIGN OUT </Link>)}
        </div>
    </div>
)

export default Header;