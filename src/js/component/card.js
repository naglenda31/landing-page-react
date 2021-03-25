import React from "react";
import PropTypes from "prop-types";

//create your first component
export function Card(props) {
	const renderCard = props.cardContent.map((card, index) => {
		return (
			<div className="col-lg-3 col-md-6 col-12 mb-3" key={index}>
				<div className="card text-center">
					<img
						src={card.imageUrl}
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">{card.title}</h5>
						<p className="card-text">{card.text}</p>
					</div>
					<div className="card-footer bg-transparent">
						<a href={card.buttonUrl} className="btn btn-primary">
							{card.buttonLabel}
						</a>
					</div>
				</div>
			</div>
		);
	});
	return renderCard;
}

Card.defaultProps = {
	cardContent: []
};

Card.propTypes = {
	cardContent: PropTypes.array
};
