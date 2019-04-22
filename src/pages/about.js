import React from 'react';
import { Link } from 'gatsby';
import Header from '../components/header';
import Contents from '../components/contents';
import Layout from '../components/index-layout';

export default () => (
	<Layout>
		<Header />
		<Contents>
			<p>about my blog</p>
			<Link to="/">Home</Link>
		</Contents>
	</Layout>
);
