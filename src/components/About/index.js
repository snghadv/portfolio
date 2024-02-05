import React, { useState } from 'react';
import '../all.css';
import aboutImage from './about.jpg';
import resume from './resume.pdf';

function About() {
    return (
        <div style={{ display: 'flex', backgroundColor: "#f3f3f3" }}>
            <div className='aboutMain'>
                <p className='aboutTitle'>About Me</p>
                <img src={aboutImage} className='aboutImage'></img>
                <p className='aboutTitle' style={{ marginTop: '30px', fontSize: '28px', marginBottom: '0' }}>Saurabh Singh</p>
                <p style={{ marginTop: '5px', fontSize: '17px', fontWeight: '500' }}>Full Stack Developer</p>
                <hr style={{ width: '100%', marginTop: '40px', marginBottom: '40px' }} />
                <p className='aboutMyself'>
                    As a Senior Software Engineer, I championed the development of a versatile crypto onboarding/off-ramping web app, seamlessly integrating with global payment partners and both centralized and decentralized exchanges. My expertise in web3 technology ensured secure crypto transaction delivery and signing, while contributions to Ethereum Smart Contracts showcased a comprehensive skill set.
                </p>
                <p className='aboutMyself'>
                    In my role as a Full Stack Developer, I excelled in creating a targeted web app for sales operations, earning three Performer of the Quarter awards. Beyond coding, I demonstrated a keen understanding of databases and automation tools. As a mentor, I guided interns, and I played a pivotal role in designing a centralized messaging platform, showcasing my knack for tackling complex design challenges.
                </p>
                <hr style={{ width: '100%', marginTop: '40px', marginBottom: '40px' }} />
                <table className="aboutTable">
                    <tbody>
                        <tr>
                            <td className='tdHead'>DOB:</td>
                            <td className='tdCell'>21-December-1998</td>
                            <td className='tdHead'>Nationality:</td>
                            <td className='tdCell'>India</td>
                        </tr>
                        <tr>
                            <td className='tdHead'>Location:</td>
                            <td className='tdCell'>Bengaluru, India</td>
                            <td className='tdHead'>College</td>
                            <td className='tdCell'>GLA University, Mathura</td>
                        </tr>
                        <tr>
                            <td className='tdHead'>Email</td>
                            <td className='tdCell'>saurabh.sngha@gmail.com</td>
                            <td className='tdHead'>Degree</td>
                            <td className='tdCell'>Bachelors</td>
                        </tr>
                        <tr>
                            <td className='tdHead'>Phone</td>
                            <td className='tdCell'>+91 8859131115</td>
                            <td className='tdHead'>Interest</td>
                            <td className='tdCell'>Photohgraphy</td>
                        </tr>
                    </tbody>
                </table>
                <hr style={{ width: '100%', marginTop: '40px', marginBottom: '40px' }} />
                <a class="effect1" href={resume} download={'resume.pdf'}>
                    Download CV
                    <span class="bg"></span>
                </a>
                <div style={{marginTop: "200px"}}></div>
            </div>
        </div>
    );
}

export default About;
