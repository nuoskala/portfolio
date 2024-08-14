const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.static('dist'))


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
      id: 'Arffman'
  },
{
    title: 'Full Stack Development ',
    location: 'Helsinki University (remote), Finland',
    description: 'Full Stack open course from Helsinki University (online)',
    content: [
        'Introduction to modern JavaScript-based web development',
        'Focus on building single page applications with ReactJS that use REST APIs built with Node.js',
        'Debugging application, container technology,  configuration, managing runtime environments, databases',
        '(Paused during integration plan - lack of time, resumed in Aug. 2024)'],
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




app.get('/api/resumedata', (request, response) => {
  response.send(resumeData)
})


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})