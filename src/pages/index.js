import React from 'react';
import Link from 'gatsby-link';
import Header from '../components/header';

export default () => (
	<div style={{}}>
        <Header />
        <p>welcom my blog</p>
        <img src="https://source.unsplash.com/random/400x200" alt=""></img>
        <Link to="/about/">About</Link>
    </div>
)