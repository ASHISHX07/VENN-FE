import React from "react";

const InfoCard = ( {innerContent} ) => {
	return (
		<div className="info-card-outer">
			<div className="info-card-middle">
				{innerContent}
			</div>
		</div>
	);
};

export default InfoCard;
