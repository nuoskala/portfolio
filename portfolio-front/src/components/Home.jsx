import myPicture from '../../img/clara_nuoskala.png'

const Intro = () => {

  return (
    <div className='col-d-6 col-t-8 col-m-6 intro'>

    <div className='intro-pic'> <img src={myPicture} alt="a picture of me"></img> </div>

    <div className='intro-text'>
      <p className='intro-text-welcome'>Welcome</p>
      <p>I am currently learning full stack web development.</p>
      <p>This is where I display the <a className='intro-link' href="#projects"> projects</a> I have done and those I am currently working on.</p>
      <p>You can also learn a bit <a className='intro-link' href="#about"> about me</a> or have a look at my <a className='intro-link' href="#about"> resume</a>.</p>
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


    </div>
  )
}

export default Home