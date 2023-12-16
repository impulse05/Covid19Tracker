import React from 'react';
import './CustomCard.css';
const CustomCard = ({ title, value, color }) => {
    return (
        <div className="custom-card" style={{ backgroundColor: color }}>
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-value">{value}</p>
            </div>
        </div>
    );
};

export default CustomCard;
