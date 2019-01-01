import React from 'react';
import Link from 'gatsby-link';
import '../css/header.css';

export default () => (
	<div className="header-wrapper">
		<Link to="/" className="header-home-link">
			SSD's Tech Blog
		</Link>
	</div>
);
