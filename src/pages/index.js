import React from 'react';
import { Link } from 'gatsby';
import Header from '../components/header';
import Layout from '../components/layout';
import Contents from '../components/contents';
import '../css/home-main.css';

export default () => (
	<div className="root">
		<Layout>
			<Header title="SSD Tech Blog" />
			<Contents>
				<p>Welcome</p>
				<div>
					<img src="https://source.unsplash.com/random/400x200" alt="" />
				</div>
				<Link to="/about/">About</Link>
			</Contents>
		</Layout>
	</div>
);