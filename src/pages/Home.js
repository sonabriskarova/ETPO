import React from 'react';
import {ReactComponent as Logo} from '/Users/sonabriskarova/Desktop/my-app/src/images/event.svg';
import AboutUs from '../components/AboutUs';


const Home = () => {
  return (
    <>
    <div className = "image">
      <Logo width={'100%'} height={'60%'} />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <AboutUs />
      </div>
      </>
);
};

export default Home;