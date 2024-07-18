// src/components/MainContent.js
import React from 'react';
import './MainContent.css';
import picture from '../components/picture1.jpg';

function MainContent() {
    return (
        <div className="main-content">
            <div className="image-section">
                {/* Add a random image */}
                <img src={picture} alt="Random" />
            </div>
            <div className="tab-section">
                <button>Overview</button>
                <button>QnA</button>
                <button>Notebook</button>
                <button>Transcript</button>
            </div>
            <div className="instructor-section">
                <div className="instructor">
                    <h3>Instructor</h3>
                    <img src="https://via.placeholder.com/100" alt="Instructor" />
                    <p>
                        <strong>Rodrigo Diaz</strong><br />
                        Solution Architect, Lorem, Ipsum, engineer<br />
                        Analyst, Programmer, worker
                    </p>
                </div>
                <div className="related-course">
                    <h3>Related to Course</h3>
                    <ul>
                        <li><span className="icon">👥</span> Classroom <a href="#classroom">show all</a></li>
                        <li><span className="icon">📄</span> Class Files <a href="#classfiles">show all</a></li>
                        <li><span className="icon">📜</span> Certificates <a href="#certificates">show all</a></li>
                    </ul>
                </div>
            </div>
        </div >
    );
}

export default MainContent;
