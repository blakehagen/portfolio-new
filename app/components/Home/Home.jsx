import React from 'react';
import { Link } from 'react-router';

const Home = () => (
  <div>
    Hello I am the HOME view!
    <br /><br />
    <Link to="about" >
      About
    </Link>
  </div>
);

export default Home;
