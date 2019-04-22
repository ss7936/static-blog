import React from 'react';
import Link from 'gatsby-link';
import '../css/header.css';

export default ({ title }) => (
	<div className="root-header">
		<Link to="/" className="link-home">
			{title}
		</Link>
	</div>
);
