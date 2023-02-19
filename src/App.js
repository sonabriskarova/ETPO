import { BrowserRouter as Router} from 'react-router-dom';
import { Route, Routes } from "react-router-dom";

//import styles
import '/Users/sonabriskarova/Desktop/my-app/src/App.css';

// import components
import Navbar from './components/Navbar';
import Footer from './components/Footer/';

// import pages
import Home from './pages/Home';
import React from 'react';


function App() {
  return (
    <React.StrictMode>
       <Router>
        <div className='main'>
        <Navbar />
        <Routes>
          <Route path='/' exact element = {<Home />} />
        </Routes>
        </div>
      </Router>
    </React.StrictMode>
  );
}

export default App;
