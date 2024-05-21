import React from 'react';
import Header from './components/Header';
import ContactInfo from './components/ContactInfo';
import EducationSection from './components/EducationSection';
import WorkExperience from './components/WorkExperience';
import SkillsSection from './components/SkillsSection';
import ProjectsComponent from './components/ProjectsComponent';
import Footer from './components/Footer';
import 'normalize.css';

const App = () => {
    // Sample data for props, based on the provided resume
    const resumeData = {
        name: "Shrey Talreja",
        subtitle: "Software Developer || DTU'21 || DPSRKP'17",
        contact: {
            phone: "+91 7011219479",
            email: "shreytalreja25@gmail.com",
            linkedIn: "https://www.linkedin.com/in/shreytalreja25"
        },
        education: [
            { degree: "Masters of Information Technology, Artificial Intelligence", university: "UNSW", duration: "February 2024 - March 2026" },
            { degree: "Bachelor of Technology - BTech, Electrical Engineering", university: "Delhi Technological University (Formerly DCE)", duration: "August 2017 - July 2021" },
            { degree: "High School Diploma, Computer Science", university: "Delhi Public School - R. K. Puram", duration: "April 2011 - March 2017" }
        ],
        experience: [
            { position: "Software Developer", company: "BSES Delhi", duration: "October 2022 - February 2024", description: "ASP.NET MVC with C#, HTML, CSS & JavaScript, Oracle SQL DB, React.js, Node.js, Express.js, MongoDB, Python" },
            { position: "Technical Associate", company: "Kryptronix Gaming", duration: "April 2022 - September 2022", description: "Technical consultant and Sales Associate of Custom build professional workstations" },
            { position: "Business Intelligence Analyst", company: "Polestar Solutions & Services", duration: "June 2021 - December 2021", description: "Data Filtering and Warehousing using MS SQL Server, Data processing and analysis using MS Analysis services" }
        ],
        skills: ["ChatGPT", "OpenAI API", "MERN Stack"],
        projects: [
            { title: "Weather Prediction/Home Automation", description: "NLP-backed Flask creation and a Weather Prediction/Home Automation symphony with NodeMCU, Arduino, and machine learning magic.", link: "http://example.com" }
        ]
    };

    return (
        <div className="container">
            <Header name={resumeData.name} subtitle={resumeData.subtitle} />
            <ContactInfo {...resumeData.contact} />
            <EducationSection education={resumeData.education} />
            <WorkExperience experience={resumeData.experience} />
            <SkillsSection skills={resumeData.skills} />
            <ProjectsComponent projects={resumeData.projects} />
            <Footer />
        </div>
    );
}

export default App;
