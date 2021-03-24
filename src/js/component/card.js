import React from "react";
import PropTypes from "prop-types";

//create your first component
export function Card(props) {
	// const renderCard = props.cardRow.map((item, index) => {
	// 	return <div className="row"></div>;
	// });
	return (
		// <div className="row mx-3 mb-4">
		<div className="col-3">
			<div className="card">
				<img src={props.imageUrl} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">{props.cardText}</p>
				</div>
				<div className="card-footer bg-transparent text-center mt-3">
					<a href={props.cardButtonUrl} className="btn btn-primary">
						{props.cardButtonLabel}
					</a>
				</div>
			</div>
		</div>
		// </div>
	);
}

Card.propTypes = {
	imageUrl: PropTypes.string,
	title: PropTypes.string,
	cardText: PropTypes.string,
	cardButtonUrl: PropTypes.string,
	cardButtonLabel: PropTypes.string
};
