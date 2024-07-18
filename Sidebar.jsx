// src/components/Sidebar.js
import React from 'react';
import './Sidebar.css';

function Sidebar() {
    return (
        <div className="left-sidebar">
            <h2>Contents</h2>
            <ul>
                <li>Introduction</li>
                <li>1. Introduction to Microservices</li>
                <li>2. Hands on: Creating Microservices with ASP.net Core</li>
                <li>3. Hands on: Synchronous Communication between Microservices</li>
                <li>4. Microservices and DevOps</li>
                <li>5. Microservices Containerisation with Docker</li>
                <li>6. Microservices Deployment</li>
                <li>Conclusion</li>
            </ul>
        </div>
    );
}

export default Sidebar;
