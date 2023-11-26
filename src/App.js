// import logo from './logo.svg';
import './App.css';
import Context from './Context';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Project from './Project';
import NewState from './context api/NewState';
import HiddenSidebar from './HiddenSidebar';
function App() {


  return (
    
      <>
      <NewState>
      <BrowserRouter>
      <Context >
      <Routes>
      
        <Route path='/' element={<Navbar />} >
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Project />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="*" element={"this is page not exist"}/>
        </Route>
        <Route path='/hiddensidebar' element={<HiddenSidebar />} />
      </Routes>
      </Context>
      </BrowserRouter>
      </NewState>
      

      {/* <Context>
      <About/>
       <Contact/>
       </Context> */}
      </>
   
  );
}

export default App;
