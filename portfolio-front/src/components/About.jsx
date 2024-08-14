import parse from "html-react-parser";

import { useState, useEffect } from 'react'
import resumedataService from '../services/resumedata'
  

const skillDevData = ['React', 'JavaScript', 'HTML', 'CSS', 'Node.js', 'Express'];
const skillProgData = ['Python', 'bash', 'Git', 'ESLint', 'Linux environment'];
const skillLanguageData = [
    'French (native)', 'English (fluent)', 'Finnish (intermediate - B1)',
];


const skillData = {skillDevData, skillProgData, skillLanguageData}


const Tag = (prop) => {

  const trainingColor =  'hsl(120, 40%, 75%)'  // green
  const suomiColor = 'hsl(210, 40%, 75%)'  // blue
  const educationColor = 'hsl(265, 40%, 75%)' // lilas
  const workColor = 'hsl(30, 40%, 75%)' // yellow

  let color = 'black'
  if (prop.name === 'Work'){
      color = workColor
  } else if (prop.name === 'Training'){
      color = trainingColor
  } else if (prop.name === 'Suomi'){
      color = suomiColor
  } else if (prop.name === 'Education'){
      color = educationColor
  }
  return (
      <div className='tag'
          key={prop.name}
          style={{backgroundColor:color}}>
          {prop.name}
      </div>
  )
}

const Content = (prop) => {
    return (
        <div className='content'
            key={prop.content}
            >
            {prop.content}
    </div>
    )
}

const ResumeItem = (prop) => {
  const tags = prop.tag.map(t =>
      <Tag key={t} name={t}> {t} </Tag>
  )
  const title = <div className='title'> {prop.title} </div>
  const dateLocation = <div className='dateLocation'> {prop.date}. {prop.location} </div>
  const description = <div className='description'> {prop.description}</div>
  const contents = prop.content.map(t =>
      <Content key={t} content={t}>  {t} </Content>
  )
  const circle = <div className="circle"></div>

  let link = ''
  if (prop.link) {
      link = <a
          href={prop.link.url}
          target="_blank"
          rel="noopener noreferrer"
      > {prop.link.text}</a>
  }

  return (
      <div className='resume-item'>
        {tags}
        {dateLocation}
        {title}
        {description}
        {contents}
        {link}
        {circle}
      </div>
  )
}

const Skills = ({data}) => 
    {
    const skillsDev = data.skillDevData.map((s, index )=>
        <div key={index} className="skills-item">{s}</div>
    )
    const skillsProg = data.skillProgData.map((s, index )=>
        <div key={index} className="skills-item">{s}</div>
    )
    const skillsLanguageSoftskill = data.skillLanguageData.map((s, index )=>
        <div key={index} className="skills-item">{s}</div>
    )
        
    return (
    <div className="skills-container">  
    <div className="skills-subcontainer">
    <p className="skills-title">Programming</p>
        {skillsProg}
    </div>

    <div className="skills-subcontainer">
        <p className="skills-title">Full Stack</p>
        {skillsDev}
    </div>


    <div className="skills-subcontainer">
    <p className="skills-title">Language</p>

        {skillsLanguageSoftskill}
    </div>
    </div>
    )
    }



const Resume = ({resumeData}) => {

  return (
      <div className='resume-container'>
          {resumeData.map(item =>
              <ResumeItem
                  key={item.id}
                  title={item.title}
                  tag={item.tags}
                  date={item.date}
                  location={item.location}
                  description={item.description}
                  content={item.content}
                  link={item.link}
              />)}
      </div>
  )
}





const About = () => {

    const [resumeData, setResumeData] = useState([]) 
    useEffect(() => {
        resumedataService      
        .getAll()      
        .then(initialResumeData => {        
          setResumeData(initialResumeData)      
        })  }, [])
    

        

    const aboutTextList = [
        "Starting with an idea, breaking it into steps. Going mad when something does not work as expected. Racking your brain to find out the source of the problem. Seeing the project evolve. Finally, seeing the initial idea made into reality and be proud of the <em className='about-text-em'>challenges overcome.</em>",

        "I discovered programming during my last year of bachelor's studies (only to do statistics on datasets). But this introduction encouraged me to integrate computer science into my studies. So I headed for a master's degree in bioinformatics. I got a taste for programming. I mainly learned to code in Python, but I also discovered Git, linux environment and command lines, as well as other tools for processing biological data. After a PhD, where I was able to put into practice what I'd learned, I'm now interested in web development.",

        "I would describe myself as a <em className='about-text-em'>fast learner</em> and <em className='about-text-em'>highly motivated</em>. I moved to Finland in the begining of 2023, I started to take Finnish lessons on the very next day. One year and a half later, I passed the YKI test (B1 level). Of course, I won't stop there :) <br> I value teamwork, because exchanging ideas and helping each other are great for mutual improvement. I'm also convinced that the most effective way to <em className='about-text-em'>learn</em> is <em className='about-text-em'>through practice</em>.",

        "On a personal level, I'm interested in photography<sup>*</sup>, sewing/knitting<sup>*</sup>,  hiking, and I'm also enjoying (total beginner) skiing<sup>*</sup> and ice skating<sup>*</sup>. <br> (* Thank you Finland for being so cold, snowy and full of northern lights, which is what introduced me to these activities!)",
    ]

    const aboutText = aboutTextList.map((t, index )=>
        <p key={index}>{parse(t)}</p>
    )

    const aboutTextFirstline = <em style={{fontStyle:"italic"}} className='about-text-em'>I love building things.</em>


    return (
    <div>
      <h1>About me</h1>
      <div className="about-text">
        {aboutTextFirstline}
        {aboutText}
      </div>

      <h2>Skills</h2>
      <Skills data={skillData} />

      <h2>Resume</h2>
      <Resume resumeData={resumeData}/>
    </div>
    )
}

export default About