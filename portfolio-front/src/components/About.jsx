const resumeData = [
    {
        title: 'Finnish courses + YKI test',
        location: 'Tampere (Finland)',
        description: 'Intensive course, Arffman Finland Oy',
        content: [
            '7 hours every week day',
            'Target level: B1',
            'Part of the integration plan (kotoutumiskoulutus)',
            'YKI test results: B1 (3) speaking and listening, B2 (4) writing and reading'
        ],
        date: 'Nov. 2023 - May 2024',
        tags: ['Suomi'],
        id: 'Fullstack Open'
    },
  {
      title: 'Full Stack Development ',
      location: 'Helsinki University (remote), Finland',
      description: 'Full Stack open course from Helsinki University (online)',
      content: [
          'Introduction to modern JavaScript-based web development',
          'Focus on building single page applications with ReactJS that use REST APIs built with Node.js',
          'Debugging application, container technology,  configuration, managing runtime environments, databases',
          '(I had not enough time to continue during my integration plan, but resumed in Aug. 2024)'],
      date: 'June - Nov 2023',
      tags: ['Training'],
      link: {
          url:
              'https://fullstackopen.com/',
          text: 'See the course'
      },
      id: 'Fullstack Open'
  },
  {
      title: 'Finnish courses',
      location: 'Tampere (Finland)',
      description: 'At Onnenkieli Oy',
      content: [
        '2.5 hours twice a week',
        'Target level: A2'
      ],
      date: 'Jan. - May 2023',
      tags: ['Suomi'],
      id: 'Onnenkieli'
  },
  {
      title: 'PhD in Bioinformatics',
      location: 'Rennes (France)',
      description: 'University of Rennes 1, Irisa',
      content: [
          'Developing algorithms applied on genetic datasets',
          'Data analysis, programming, teaching (python programming, algorithmic, statistics, introduction to programming for secondary school girls)',
          'Popularization of science: participation (2020) and organization (2021) of a festival of popularization of science, short movies made by PhD students'
      ],
      date: 'Oct. 2019 - Dec. 2022',
      tags: ['Education', 'Work'],

      link: {
          url:
              ' https://doi.org/10.1371/journal.pone.0257521',
          text: 'Publication about errors in DNA sequencing'
      },
      id: 'PhD'
  },
  {
      title: 'Internship - Bioinformatics',
      location: 'Rennes (France)',
      description: 'Master\'s internship in Inria research lab',
      content: ['Analysis of genomic sequences to infer errors during data generation'],
      date: '2019 (6 mo.)',
      tags: ['Work'],
      id: 'Stage M2'
  },
  {
      title: 'Internship - Bioinformatics',
      location: 'Rennes (France)',
      description: 'Master\'s internship in INRA research lab',
      content: [
          'Integrate and request datasets obtained from different technologies and fields',
      ],
      date: '2018 (4 mo.)',
      tags: ['Work'],
      link: {
          url:
              'https://doi.org/10.1371/journal.pgen.1007593',
          text: 'Contributed to a publication'
      },
      id: 'Stage M1'
  },
  {
      title: 'Bioinformatics',
      location: 'Rennes (France)',
      description: 'Master\'s degree, University of Rennes 1',
      content: [
          'Programming (Python, Java), Git',
          'Linux environment, bash commands',
          'Biological systems modeling, statistics, genomic data analysis'
      ],
      date: '2017 - 2019',
      tags: ['Education'],
      id: 'Master bioinfo'
  },
  {
    title: 'Biology of organisms',
    location: 'Rennes (France)',
    description: 'Bachelor\'s degree, University of Rennes 1',
    content: [
    'Stastistics, introduction to programming (R)',
    'Physiology, animal behavior, population genetics'
    ],
    date: '2014 - 2017',
    tags: ['Education'],
    id: 'L3 bio'
  },
  /*
  {
      title: '"Classe préparatoire aux grandes écoles" (Biology)',
      location: 'Rennes, France',
      content: [
          'Two-year intensive preparation courses for the entrance exam to French (veterinarian or agri-food processing) schools.',
          'Biology, mathematics, physics and chemistry, introduction to programming'
      ],
      date: '2014 - 2016',
      tags: ['Education'],
      id: 'prepa'
  },
  */

];



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

const Skills = () => (
  <div className="skills-container">
    <div className="skills-item">
      <p>front end</p>
    </div>
    <div className="skills-item">
      <p>back end</p>
    </div>
    <div className="skills-item">
      <p>others</p>
    </div>

  </div>
)



const Resume = () => {
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

  return (
    <div>
      <h1>The about page</h1>

      <h2>Skills</h2>
      <Skills />

      <h2>Resume</h2>
      <Resume />
    </div>
  )
}

export default About