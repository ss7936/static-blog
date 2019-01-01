import React from 'react';
import Link from 'gatsby-link';
import Header from '../components/header';
import Footer from '../components/footer';
import Layout from '../components/layout';
import '../css/home-main.css';

export default () => (
	<div className='wrapper'>
		<Header />
		<Layout>
			<p>welcome my blog</p>
			<img src='https://source.unsplash.com/random/400x200' alt="" />
			<Link to="/about/">About</Link>
		</Layout>
		{/* <Footer /> */}
	</div>
);
