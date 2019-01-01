import React from 'react';
import Link from 'gatsby-link';
import Header from '../components/header';
import Footer from '../components/footer';
import Contents from '../components/contents';
import Layout from '../components/layout';

export default () => (
	<Layout>
		<Header />
		<Contents>
			<p>about my blog</p>
			<Link to="/">Home</Link>
		</Contents>
		{/* <Footer /> */}
	</Layout>
);
