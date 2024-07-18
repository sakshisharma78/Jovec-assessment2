// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header__content">
                <div className="header__titles">
                    <h1>ASP Microservices with .NET Core for Developers</h1>
                    <p>Communication between microservices</p>
                </div>
                <div className="header__actions">
                    <a href="#leave-review" className="header__link">Leave a review</a>
                    <button className="header__icon">👍</button>
                    <button className="header__icon">🔖</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
