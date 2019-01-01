import React from 'react';
import Link from 'gatsby-link';
import { graphql } from 'gatsby';
import Header from '../components/header';
import Footer from '../components/footer';
import Layout from '../components/layout';
import Contents from '../components/contents';
import '../css/home-main.css';

export default () => (
	<div className="wrapper">
		<Layout>
			<Header title="SSD's Tech Blog" />
			<Contents>
				<p>welcome to my blog</p>
				<div>
					<img src="https://source.unsplash.com/random/400x200" alt="" />
				</div>
				<Link to="/about/">About</Link>
			</Contents>
			{/* <Footer /> */}
		</Layout>
	</div>
);

// export const query = graphql`
// 	query {
// 		site {
// 			siteMetadata {
// 				title
// 			}
// 		}
// 	}
// `;
