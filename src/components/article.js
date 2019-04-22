import React from 'react';
import '../css/article.css';

export default ({ title, contents }) => (
	<div className="root-article">

		{/*
		TODO : Title Elements
				- title of article
				- tags
				- date
				- writer
				- like count, etc.
		*/}
		<div className="wrapper-title">
			<div className="title">
				{title}
			</div>
		</div>

		<div className="wrapper-contents">
			<div className="contents">
				{contents}
			</div>
		</div>
	</div>
);
