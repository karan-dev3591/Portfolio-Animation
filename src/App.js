import './App.css';
import { Container } from 'react-bootstrap';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import { Project } from './Pages/Project';
import Contact from './Pages/Contact';
import Header from './Components/Header';
import { AnimatePresence } from 'framer-motion';


function App() {
  const Location = useLocation();
  return (
    <div className="App">
     
      
        <Header/>
        <Container>
          <AnimatePresence mode='wait' >
        <Routes Location = {Location} key={Location.pathname}>
          <Route path='/' element ={<Home/>} ></Route>
          <Route path='/about' element ={<About/>} ></Route>
          <Route path='/project' element ={<Project/>} ></Route>
          <Route path='/contact' element ={<Contact/>} ></Route>
        </Routes>

     </AnimatePresence>

     </Container>
    </div>
  );
}

export default App;
