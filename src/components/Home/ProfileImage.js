import React, { useEffect, useState } from 'react';
import { isEmpty } from "lodash";
import '../all.css';

function ProfileImage() {
    useEffect(() => {
        const intervalId = setInterval(() => {
            const randomA = Math.floor(Math.random() * (80 - 20 + 1)) + 20;
            const randomB = Math.floor(Math.random() * (80 - 20 + 1)) + 20;
            const randomC = Math.floor(Math.random() * (80 - 20 + 1)) + 20;
            const randomD = Math.floor(Math.random() * (80 - 20 + 1)) + 20;

            const border = `${randomA}% ${100 - randomA}% ${randomB}% ${100 - randomB}% / ${randomC}% ${randomD}% ${100 - randomD}% ${100 - randomC}%`;
            let element = document.getElementsByClassName("imageBox")[0];
            if (element !== undefined) {
                console.log(element);
                element.style.borderRadius = border;
            }
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <div className='imageBox'></div>
        </div>
    );
}

export default ProfileImage;
