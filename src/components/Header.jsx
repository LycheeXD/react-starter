import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>react starter with examples</h1>
    <Link to="/test">test</Link>
    &nbsp;
    <Link to="/">home</Link>
  </header>
);

export default Header;