import { Home } from './components/Home';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Profile } from './components/Profile';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
            <Route path='prrofile' element={<Profile />}></Route>
            <Route path='about' element={<About />}></Route>
            <Route path='projects' element={<Projects />}></Route>
            <Route path='contact' element={<Contact />}></Route>
            {/* <Route path="*" element={<Home />} /> */}  
        </Routes>
      </BrowserRouter>
      <Home />
    </div>
  );
}

export default App;
