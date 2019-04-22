import React from 'react';
import { Link } from 'gatsby';
import '../css/header.css';

export default () => (
	<div className="wrapper-header">
		<div className="root-header">
			<Link to="/" className="link-home"> SSD's Tech Blog </Link>
		</div>
	</div>
);
