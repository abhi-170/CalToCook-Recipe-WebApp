import React from 'react';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';
function Navbar() {
    const options = [
        { id: 1, label: "Your Profile" },
        { id: 2, label: "Settings" },
        { id: 3, label: "Sign out" },
    ];
    const [isOpen, setIsOpen] = React.useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="navbar-wrapper">
            <div className="navbar-inner">
                <div className="navbar-logo">
                    <img src="/logo.png" className="logo-img" alt="Logo" />
                </div>

                <div className="navbar-links">
                    <ul className="navbar-list">
                        <li ><NavLink className="navbar-link" to={'/'}>Home</NavLink></li>
                        <li ><NavLink className="navbar-link" to={'/about'}>About</NavLink></li>
                        <li ><NavLink className="navbar-link" to={'/contact'}>Contact</NavLink></li>
                        </ul>
                        </div>

                        <div className="navbar-actions">
                            <div className="notification-btn">
                                Notification
                            </div>

                            <div className="profile-btn" onClick={handleClick}>
                                Profile
                                {isOpen && (
                                    <ul className="dropdown-menu">
                                        {options.map((option) => (
                                            <li className='dropdown-item' key={option.id}>{option.label}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                </div>
            </div>
            )
}

            export default Navbar;
