import { Routes, Route} from 'react-router'

import Home from './components/routes/Home'
import FourOFour from './components/routes/404'
import Projects from './components/routes/Projects'
import Certifications from './components/routes/Certifications'
import Contact from "./components/routes/Contact"

import Footer from './components/Footer'
import NavBar from './components/NavBar'
import { useEffect } from "react";
import { themeChange } from "theme-change";

const App = () => {
  useEffect(() => {
    themeChange(false)
  },[])
  return (
    <>
    <NavBar />
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/projects' Component={Projects} />
        <Route path='/certifications' Component={Certifications} />
        <Route path='/contact' Component={Contact} />
        <Route path='*' Component={FourOFour}/>
      </Routes>
    <Footer />
    </>

  )
}

export default App;
