import React from "react";
import PropTypes from "prop-types";

//create your first component
export function Jumbotron(props) {
	return (
		<div className="container-fluid my-4">
			<div className="jumbotron mx-3 mb-0">
				<h1 className="display-1">{props.title}</h1>
				<p className="lead">{props.description}</p>
				<a
					className="btn btn-primary btn-lg"
					href={props.buttonUrl}
					role="button">
					{props.buttonLabel}
				</a>
			</div>
		</div>
	);
}

Jumbotron.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	buttonUrl: PropTypes.string,
	buttonLabel: PropTypes.string
};
