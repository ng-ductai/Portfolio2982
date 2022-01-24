import React from 'react';
import './index.scss'

const Skillcard = ({ skill: { icon, title, about } }) =>
    <div className="col-lg-6">
        <div className="skillCard">
            <img src={icon} alt="icon" className="skillCard__icon" />
            <div className="skillCard__body">
                <h4 className="skillCard__body-title">{title}</h4>
                <p className="skillCard__body-content">{about}</p>
            </div>
        </div>
    </div>

export default Skillcard;