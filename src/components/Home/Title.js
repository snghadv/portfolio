import React, { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';

import '../all.css';

function Title() {

    return (
        <div style={{ textAlign: 'start', width: "45%" }}>
            <p className='titleName'>Saurabh Singh</p>
            <span><Typewriter
                options={{
                    strings: ['Full Stack Developer', 'Photographer'],
                    autoStart: true,
                    loop: true,
                    wrapperClassName: 'titleProffesion'
                }}
            /></span>
            <p className='titleDetails'>Versatile Full Stack Developer based in Bengaluru India, ready to code and create across the vast realm of technology.</p>
            <div class="wrapper">
                <ul>
                    <li class="github"><a href="https://github.com/snghadv" target="_blank"><i class="fa fa-github fa-x" aria-hidden="true"></i></a></li>
                    <li class="linkedin"><a href="https://www.linkedin.com/in/snghadv" target="_blank"><i class="fa fa-linkedin fa-x" aria-hidden="true"></i></a></li>
                    <li class="instagram"><a href="https://www.instagram.com/snghadv" target="_blank"><i class="fa fa-instagram fa-x" aria-hidden="true"></i></a></li>
                </ul>
            </div>
        </div>
    );
}

export default Title;
