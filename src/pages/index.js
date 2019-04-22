import React from 'react';
import { Link } from 'gatsby';
import Header from '../components/header';
import Layout from '../components/layout';
import Contents from '../components/article';
import '../css/index.css';

export default () => (
	<div className="root">
		<Layout>
			<Header />
			{/* TODO : Load article by .md and it as a parameter */}
			<Contents title="This is Title area" contents="This is Contents area" />

			{/* TODO : Need to add Footer later */}
		</Layout>
	</div>
);