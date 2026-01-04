import React from "react";

const InfoCard = ( {children} ) => {
	return (
		<div className="info-card-outer">
			<div className="info-card-middle">
				{children}
			</div>
		</div>
	);
};

export default InfoCard;
