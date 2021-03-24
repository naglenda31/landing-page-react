import React from "react";
import PropTypes from "prop-types";

//create your first component
export function Card(props) {
	const renderCard = props.cardContent.map((card, index) => {
		return (
			<div className="col-lg-3 col-md-6 col-sm-12" key={index}>
				<div className="card mb-xs-3 text-center">
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

Card.propTypes = {
	cardContent: PropTypes.array
};
