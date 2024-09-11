import './App.css'

import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'


import {
  BrowserRouter as Router,
  Routes, Route
} from 'react-router-dom'


const App = () => {

  return (
    <Router>
      <NavBar />

    <Routes>
        <Route path="/home" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App