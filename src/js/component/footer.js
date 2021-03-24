import React from "react";
import PropTypes from "prop-types";

//create your first component
export function Footer(props) {
	return (
		<footer className="page-footer bg-dark text-white d-flex justify-items-center align-items-center">
			<div className="mx-auto">{props.copyright}</div>
		</footer>
	);
}

Footer.propTypes = {
	copyright: PropTypes.string
};
