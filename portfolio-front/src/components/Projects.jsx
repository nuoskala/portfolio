import { FaGithub } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";
import parse from "html-react-parser";

import previewPortfolio from '../../img/preview_portfolio.png'
import previewResponsiveMock from '../../img/preview_responsive_mock.png'


const projectsData = [
  {
      title: 'Portfolio',
      description: 'This website. It includes a presentation of myself, and of the projects I made. <br> I am still working on it to include more features and improve the look and responsiveness.',
      tools: [
          'ReactJS',
          'HTML/CSS'
      ],
      githubLink: 'https://github.com/nuoskala/portfolio',
      pageLink: '',
      ongoing: true,
      preview: previewPortfolio,
      id: 'portfolio'
  },
  {
    title: 'Responsive webpage',
    description: 'A mock webpage on which I trained responsiveness. I mainly used media queries and grids. The goal was to be able to display pictures in a suitable layout and size for all types of media (smartphones, tablets and desktop computers).',
    tools: [
        'ReactJS',
        'HTML/CSS'
    ],
    githubLink: 'https://github.com/nuoskala/responsive_mock_app/',
    pageLink: 'https://nuoskala.github.io/responsive_mock_app/',
    ongoing: false,
    preview: previewResponsiveMock,
    id: 'responsive-mock-webpage'
},
]

const openInNewTab = (url) => {
  window.open(url, '_blank', 'noopener, noreferrer');
}

const ButtonGithub = ({githubLink}) => {
  if (githubLink != '') {
    return (       
      <button className='project-link-button' 
      onClick={() => openInNewTab(githubLink)}> <FaGithub className='project-link-icon'/>
      </button>
   )
  }
}

const ButtonPagelink = ({pageLink}) => {
  if (pageLink != '') {
    return (       
      <button className='project-link-button' 
      onClick={() => openInNewTab(pageLink)}> <RxOpenInNewWindow className='project-link-icon'/>
      </button>
   )
  }
}

const Ongoing = ({ongoing}) => {
  if (ongoing) {
    return (       
      <div className="project-status-current">Ongoing</div>
   )
  }
}

const ProjectItem = ({title, description, tools, githubLink, pageLink, preview, ongoing}) => (
  <div className="project">
    <div className="project-preview"><img src={preview}></img></div>
    <Ongoing ongoing={ongoing}/>
    <div className="project-info">
      <div className="project-title">{title}</div>
      <div className="project-description">{parse(description)}</div>
      <div className="project-tool-container">{tools.map((p, index) => <div className="project-tool" key={index}>{p}</div>)}</div>
      <div className="project-links">
        <ButtonGithub githubLink={githubLink}/>
        <ButtonPagelink pageLink={pageLink}/>
      </div>
    </div>
  </div>
)


const Projects = () => {
  return (
  <div>
  <h1>Projects</h1>

  <div className="project-container">
    {projectsData.map(p =>
      <ProjectItem
          key={p.id}
          title={p.title}
          description={p.description}
          tools={p.tools}
          githubLink={p.githubLink}
          pageLink={p.pageLink}
          preview={p.preview}
          ongoing={p.ongoing}
      />)}
  </div>
  </div>
)
}

export default Projects