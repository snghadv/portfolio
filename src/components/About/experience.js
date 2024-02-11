import React, { useEffect, useState } from 'react';
import { Stepper } from './Stepper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faLocationDot } from '@fortawesome/free-solid-svg-icons';

function Experience() {
    const experienceBox = ({ title, company, start, end, location }) => {
        return (
            <div className='mb-12 mt-12'>
                <div className='flex flex-row mt-3'>
                    <div className='text-3xl font-light w-[90%]'>{title}</div>
                    <div class="w-[10%] bg-green-200 text-[#006666] text-l font-medium text-center flex justify-center items-center rounded-full ml-auto">Full Time</div>
                </div>
                <div className='flex flex-row mt-3'>
                    <div className='flex flex-row gap-2 w-[23%] text-gray-500'>
                        <FontAwesomeIcon icon={faBuilding} size="x" style={{ color: "#006666" }} />
                        <div>{company}</div>
                    </div>
                    <div className='flex flex-row gap-2 w-[20%] text-gray-500'>
                        <FontAwesomeIcon icon={faLocationDot} size="x" style={{ color: "#006666" }} />
                        <div>{location}</div>
                    </div>
                    <div className='text-end w-[57%] text-gray-500'>{start} - {end}</div>
                </div>
            </div>
        )
    }

    return (
        <div className='aboutExp'>
            <p className='aboutTitle' style={{ fontSize: '28px', marginBottom: '20px' }}>Work Experience</p>
            {experienceBox({
                company: "TransFi Pvt. Ltd.",
                title: "Sr. Software Engineer",
                start: "Nov, 2022",
                end: "Present",
                location: "Bengaluru, India"
            })}
            <hr />
            {experienceBox({
                company: "Byju's (Think & Learn)",
                title: "Full Stack Developer",
                start: "April, 2021",
                end: "Nov, 2022",
                location: "Bengaluru, India"
            })}
            <hr />
            {experienceBox({
                company: "QED Kares Pvt. Ltd.",
                title: "Full Stack Developer",
                start: "July, 2020",
                end: "April, 2021",
                location: "Ghaziabad, India"
            })}
            <hr />
            {experienceBox({
                company: "Amazon",
                title: "SDE Intern",
                start: "Jan, 2020",
                end: "July, 2020",
                location: "Bengaluru, India"
            })}
            <hr />
            {experienceBox({
                company: "Amazon",
                title: "SDE Intern",
                start: "August, 2019",
                end: "Jan, 2020",
                location: "Bengaluru, India"
            })}
        </div>
    );
}

export default Experience;
