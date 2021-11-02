import React, { useState } from 'react'
import Card from '../Card/Card';
import Tag from '../Tag/Tag';
import weatherImg from '../../assets/images/weather-app.png';
import cryptoImg from '../../assets/images/crypto-app.png';
import amazonImg from '../../assets/images/amazon-clone.png';
const projects = [
    {
        title: 'React Weather Application',
        thumbnail:weatherImg,
        github:"https://github.com/niteshrana99/whether-app",
        demo:"https://nitesh-weather-app.netlify.app/",
        technologies:['React', 'Styled Components', 'SCSS'],
        description:"A weather application built with React that shows the weather forecast for any city or place around the world."
    },
    {
        title: 'Crypto Application',
        thumbnail:cryptoImg,
        github:"https://github.com/niteshrana99/cryptoapp",
        demo:"https://crytoverse.netlify.app/",
        technologies:['React', 'Ant Design', 'Redux', 'Redux Toolkit', 'React Charts'],
        description:"A crypto application built with React that shows Latest news and Values of various tokens around the world."
    },
    {
        title: 'Full Stack Amazon Clone',
        thumbnail:amazonImg,
        github:"https://github.com/niteshrana99/amazon-clone",
        demo:"https://amazon-clone-two-roan.vercel.app/",
        technologies:['React', 'Redux', 'Tailwind', 'Nodejs', 'Firebase', 'Nextjs', 'Stripe'],
        description:"An Amazon clone built on Reactjs and using Nextjs Authentication and stripe payments."
    }
]
const Projects = () => {
    const [ projectState, ] = useState(projects);
    
    return (
        <div className="projects">
            {projectState.length && projectState.map(item => (
                 <Card data={item} key={item.title}>
                     <p className="heading_tertiary">
                     {item.description}
                     </p>
                     <div className="projects_links">
                     <a href={item.demo} target="_blank" className="btn-text">Demo</a>
                     <a href={item.github} target="_blank" className="btn-text">Source</a>
                     </div>
                     <div className="projects_tags">
                        {
                            item.technologies.map(item => <Tag label={item} />)
                        }
                     </div>
                     
                 </Card>
            ))};
            
        </div>
    )
}

export default Projects;
