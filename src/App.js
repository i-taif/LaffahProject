import React from 'react';
import './App.css';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Header from './component/Header';
import Rigester from './component/Register';
import Home from './component/Home';
import Login from './component/Login';
import Footer from './component/Footer';
import About from './component/AboutUs';
import Cities from './component/Cities'
import TourGuide from './component/TourGuide'
import Posts from './component/Posts'
import PostDetails from './component/PostDetails'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link as RouteLink,
} from 'react-router-dom';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Rigester" element={<Rigester />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Cities" element={<Cities />}></Route>
          <Route path="/TourGuide" element={<TourGuide />}></Route>
          <Route path="/Posts" element={<Posts />}></Route> 
          <Route path="/PostDetails" element={<PostDetails />}></Route>                               
        </Routes>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
