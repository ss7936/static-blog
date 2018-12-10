import React from 'react';
import Link from 'gatsby-link';
import Header from '../components/header';
import Footer from '../components/footer';
import "../css/home-main.css"

export default () => (
	<div id="wrapper">
		<Header />
		<main>
			<p>welcome my blog</p>
			<img src="https://source.unsplash.com/random/400x200" alt="" />
			<Link to="/about/">About</Link>
		</main>
		<Footer />
	</div>
);
