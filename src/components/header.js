import React from 'react';
import Link from 'gatsby-link';
import '../css/header.css';

export default ({ title }) => (
	<div className="header-wrapper">
		<Link to="/" className="header-home-link">
			{title}
		</Link>
	</div>
);
