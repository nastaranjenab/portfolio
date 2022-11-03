import React from 'react';
import Nasi from '../img/Nasi.jpg';

export const Profile = () => {
    return (
        <div className='profile'>
            <div className='profile-content'>
                <h1 class="profile-header">Nastaran Jenabali</h1>
                <h6>A full stack Web developer who is passionate about creating interactive applications and experiences on the web.</h6>
                <div className='fill'><a target="_blank"  rel="noopener noreferrer" href="https://drive.google.com/file/d/1NjkdBhKJTbdSFioTwlsyt7skrhmBPVQT/view?usp=sharing">Checkout My Resume</a> </div>
            </div>
            <img src={Nasi} alt='Profile'></img>
        </div>
    )
}