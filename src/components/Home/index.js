import React, { useEffect, useState } from 'react';
import '../all.css';
import ProfileImage from './ProfileImage';
import Title from './Title';

function Home() {
    return (
        <div style={{ display: 'flex' }}>
            <div className='homeLeftNav'>
                <ProfileImage />
                <Title />
            </div>
        </div>
    );
}

export default Home;
