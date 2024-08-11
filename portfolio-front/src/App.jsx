import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'


const Home = () => (
  <h1>The home page</h1>
)

const About = () => (
  <h1>The about page</h1>
)

const Projects = () => (
  <h1>The projects page</h1>
)

const Contact = () => (
  <h1>The contact page</h1>
)


const App = () => {

  const padding = {
    padding: 5
  }

  return (
    <Router>
      <div>
        <Link style={padding} to="/">home</Link>
        <Link style={padding} to="/about">about</Link>
        <Link style={padding} to="/projects">projects</Link>
        <Link style={padding} to="/contact">contact</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </Router>
  )
}

export default App