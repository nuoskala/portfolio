import About from './About'
import Projects from './Projects'

import pic from '../../img/portrait.png'

const Intro = () => {

  return (
    <div className='intro'>

    <div className='intro-pic'> <img src={pic} alt="a picture of me"></img> </div>

    <div className='intro-text'>
      <p className='intro-text-welcome'>Welcome!</p>
      <p>I am currently learning full stack web development.</p>
      <p>This is where I display the <a className='intro-link' href="#projects"> projects</a> I have done and those I am currently working on.</p>
      <p>You can also learn a bit <a className='intro-link' href="#projects"> about me</a> or have a look at my <a className='intro-link' href="#projects"> resume</a>.</p>
    </div>

    </div>

  )
}

const Home = () => {

  
  return (
    <div>

    <div id="home">
    <Intro />
    </div>

    <div id="about" >
    <About/>
    </div>

    <div id="projects" >
    <Projects/>
    </div>


    </div>
  )
}

export default Home