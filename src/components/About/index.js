import React, { useState } from 'react';
import '../all.css';
import aboutImage from './about.jpg';
import resume from './resume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3Alt, faHtml5, faJs, faJsSquare, faJsfiddle, faNodeJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { SiNextdotjs, SiExpress, SiTailwindcss, SiChakraui, SiAzuredevops, SiMicrosoftazure, SiAmazonaws, SiMongodb, SiEthereum, SiGit, SiSolidity, SiCplusplus, SiTypescript } from "react-icons/si";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { TbSql } from "react-icons/tb";
import { VscDebugAll } from "react-icons/vsc";
import Experience from './experience';

function About() {
    return (
        <div style={{ display: 'flex', backgroundColor: "#f3f3f3", flexDirection: 'column' }}>
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
                <a className="effect1" href={resume} download={'resume.pdf'}>
                    Download CV
                    <span class="bg"></span>
                </a>
            </div>
            <div className="skillsBox">
                <p className='aboutTitle' style={{ fontSize: '28px', marginBottom: '0' }}>Skills</p>
                <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "55px", marginTop: '50px', justifyContent: 'center' }}>
                    <div style={{ textAlign: "center", width: "6.4em" }}>
                        <article className="badge" style={{ background: "darkorange" }}>
                            <div className="rounded">
                                <FontAwesomeIcon icon={faHtml5} size="3x" style={{ color: "darkorange" }} />
                            </div>
                        </article>
                        <p className="skillTitle" style={{ color: "darkorange" }}>HTML5</p>
                    </div>
                    <div style={{ textAlign: "center", width: "6.4em" }}>
                        <article className="badge" style={{ background: "dodgerblue" }}>
                            <div className="rounded">
                                <FontAwesomeIcon icon={faCss3Alt} size="3x" style={{ color: "dodgerblue" }} />
                            </div>
                        </article>
                        <p className="skillTitle" style={{ color: "dodgerblue" }}>CSS 3</p>
                    </div>
                    <div style={{ textAlign: "center", width: "6.4em" }}>
                        <article className="badge" style={{ background: "#F0DB4F" }}>
                            <div className="rounded">
                                <FontAwesomeIcon icon={faJsSquare} size="3x" style={{ color: "#F0DB4F" }} />
                            </div>
                        </article>
                        <p className="skillTitle" style={{ color: "#F0DB4F" }}>Javascript</p>
                    </div>
                    <div style={{ textAlign: "center", width: "6.4em" }}>
                        <article className="badge" style={{ background: "#2F73BF" }}>
                            <div className="rounded">
                                <BiLogoTypescript style={{ fontSize: "3em", color: "#2F73BF" }} />
                            </div>
                        </article>
                        <p className="skillTitle" style={{ color: "#2F73BF" }}>Typescript</p>
                    </div>
                    <div style={{ textAlign: "center", width: "6.4em" }}>
                        <article className="badge" style={{ background: "#68a063" }}>
                            <div className="rounded">
                                <FontAwesomeIcon icon={faNodeJs} size="3x" style={{ color: "#68a063" }} />
                            </div>
                        </article>
                        <p className="skillTitle" style={{ color: "#68a063" }}>NodeJs</p>
                    </div>
                    <div style={{ textAlign: "center", width: "6.4em" }}>
                        <article className="badge" style={{ background: "#61DBFB" }}>
                            <div className="rounded">
                                <FontAwesomeIcon icon={faReact} size="3x" style={{ color: "#61DBFB" }} />
                            </div>
                        </article>
                        <p className="skillTitle" style={{ color: "#61DBFB" }}>ReactJs</p>
                    </div>
                    <div style={{ textAlign: "center", width: "6.4em" }}>
                        <article className="badge" style={{ background: "#000" }}>
                            <div className="rounded">
                                <SiNextdotjs style={{ fontSize: "3em" }} />
                            </div>
                        </article>
                        <p className="skillTitle" style={{ color: "#000" }}>NextJS</p>
                    </div>
                    <div style={{ textAlign: "center", width: "6.4em" }}>
                        <article className="badge" style={{ background: "#686869" }}>
                            <div className="rounded">
                                <SiExpress style={{ fontSize: "3em", color: "#686869" }} />
                            </div>
                        </article>
                        <p className="skillTitle" style={{ color: "#686869" }}>ExpressJS</p>
                    </div>
                    <div style={{ textAlign: "center", width: "6.4em" }}>
                        <article className="badge" style={{ background: "#38bdf8" }}>
                            <div className="rounded">
                                <SiTailwindcss style={{ fontSize: "3em", color: "#38bdf8" }} />
                            </div>
                        </article>
                        <p className="skillTitle" style={{ color: "#38bdf8" }}>Tailwind CSS</p>
                    </div>
                    <div style={{ textAlign: "center", width: "6.4em" }}>
                        <article className="badge" style={{ background: "#65C9CA" }}>
                            <div className="rounded">
                                <SiChakraui style={{ fontSize: "3em", color: "#65C9CA" }} />
                            </div>
                        </article>
                        <p className="skillTitle" style={{ color: "#65C9CA" }}>Chakra UI</p>
                    </div>
                    <div style={{ textAlign: "center", width: "6.4em" }}>
                        <article className="badge" style={{ background: "#507BE7" }}>
                            <div className="rounded">
                                <SiEthereum style={{ fontSize: "3em", color: "#507BE7" }} />
                            </div>
                        </article>
                        <p className="skillTitle" style={{ color: "#507BE7" }}>Ethers.Js</p>
                    </div>
                    <div style={{ textAlign: "center", width: "6.4em" }}>
                        <article className="badge" style={{ background: "#A12312" }}>
                            <div className="rounded">
                                <p style={{ fontSize: "0.95em", color: "#A12312", fontWeight: "900" }} >Web3</p>
                            </div>
                        </article>
                        <p className="skillTitle" style={{ color: "#A12312" }}>Web3.Js</p>
                    </div>
                    <div style={{ textAlign: "center", width: "6.4em" }}>
                        <article className="badge" style={{ background: "#636363" }}>
                            <div className="rounded">
                                <SiSolidity style={{ fontSize: "3em", color: "#636363" }} />
                            </div>
                        </article>
                        <p className="skillTitle" style={{ color: "#636363" }}>Solidity</p>
                    </div>
                    <div style={{ textAlign: "center", width: "6.4em" }}>
                        <article className="badge" style={{ background: "#FFE66C" }}>
                            <div className="rounded">
                                <FontAwesomeIcon icon={faPython} size="3x" style={{ color: "#4382B4" }} />
                            </div>
                        </article>
                        <p className="skillTitle" style={{ color: "#4382B4" }}>Python</p>
                    </div>
                    <div style={{ textAlign: "center", width: "6.4em" }}>
                        <article className="badge" style={{ background: "#007CC7" }}>
                            <div className="rounded">
                                <SiCplusplus style={{ fontSize: "3em", color: "#007CC7" }} />
                            </div>
                        </article>
                        <p className="skillTitle" style={{ color: "#007CC7" }}>C++</p>
                    </div>
                    <div style={{ textAlign: "center", width: "6.4em" }}>
                        <article className="badge" style={{ background: "#31648C" }}>
                            <div className="rounded">
                                <BiLogoPostgresql style={{ fontSize: "3em", color: "#31648C" }} />
                            </div>
                        </article>
                        <p className="skillTitle" style={{ color: "#31648C" }}>Postgres</p>
                    </div>
                    <div style={{ textAlign: "center", width: "6.4em" }}>
                        <article className="badge" style={{ background: "#00674A" }}>
                            <div className="rounded">
                                <SiMongodb style={{ fontSize: "3em", color: "#00674A" }} />
                            </div>
                        </article>
                        <p className="skillTitle" style={{ color: "#00674A" }}>MongoDB</p>
                    </div>
                    <div style={{ textAlign: "center", width: "6.4em" }}>
                        <article className="badge" style={{ background: "#0285CF" }}>
                            <div className="rounded">
                                <SiMicrosoftazure style={{ fontSize: "3em", color: "#0285CF" }} />
                            </div>
                        </article>
                        <p className="skillTitle" style={{ color: "#0285CF" }}>Azure</p>
                    </div>
                    <div style={{ textAlign: "center", width: "6.4em" }}>
                        <article className="badge" style={{ background: "#F69400" }}>
                            <div className="rounded">
                                <SiAmazonaws style={{ fontSize: "3em", color: "#F69400" }} />
                            </div>
                        </article>
                        <p className="skillTitle" style={{ color: "#F69400" }}>AWS</p>
                    </div>
                    <div style={{ textAlign: "center", width: "6.4em" }}>
                        <article className="badge" style={{ background: "#E84D32" }}>
                            <div className="rounded">
                                <SiGit style={{ fontSize: "3em", color: "#E84D32" }} />
                            </div>
                        </article>
                        <p className="skillTitle" style={{ color: "#E84D32" }}>Git</p>
                    </div>
                    <div style={{ textAlign: "center", width: "6.4em" }}>
                        <article className="badge" style={{ background: "#025168" }}>
                            <div className="rounded">
                                <TbSql style={{ fontSize: "3em", color: "#025168" }} />
                            </div>
                        </article>
                        <p className="skillTitle" style={{ color: "#025168" }}>SQL</p>
                    </div>
                    {/* <div style={{ textAlign: "center", width: "6.4em" }}>
                        <article className="badge" style={{ background: "#6979F7" }}>
                            <div className="rounded">
                                <VscDebugAll style={{ fontSize: "3em", color: "#6979F7" }} />
                            </div>
                        </article>
                        <p className="skillTitle" style={{ color: "#6979F7" }}>Debugging</p>
                    </div> */}
                </div>
            </div>
            <Experience />
        </div>
    );
}

export default About;
