
import React from 'react';
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Routes,
  // Link
} from "react-router-dom";

import About from './about';
import Blogs from './blogs';
import SignUp from './signup';

import Layout from '../components/layout/Layout';

const Webpages = () => {
    return(
      <Router>
			  <Layout>
          <Routes>
        	  <Route exact path="/" element= {<About/>} />
        	  <Route path = "/blogs" element = {<Blogs/>} />
        	  <Route path = "/favorites" element = {<SignUp/>} />
          </Routes>
			  </Layout>
		</Router>
    );
};
export default Webpages;