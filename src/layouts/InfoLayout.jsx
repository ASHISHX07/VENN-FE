import React from "react";
import { useState } from "react";
import InfoCard from "../components/InfoCard";

function InfoLayout() {
	const [current, currentUpdater] = useState({});

	let price = 3400.54;
	let paperBal = 1000000.0;

	return (
		<div className="@container w-full h-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
			<InfoCard>
				<div className="info-card-inner">Funds</div>
				<div className="w-full h-2"></div>
				<div className="grid grid-cols-2 w-full h-fit gap-2.5">
					<div className="info-card-key">
						Avl Bal
					</div>
					<div className="info-card-value">
						{price}
					</div>
					<div className="info-card-key">
					Realized P&L
					</div>
					<div className="info-card-value">
						{paperBal}
					</div>
					<div className="info-card-key">
						Paper Bal
					</div>
					<div className="info-card-value"></div>
					<div className="info-card-key">
						Paper P&L
					</div>
					<div className="info-card-value"></div>
				</div>
			</InfoCard>
			<InfoCard>
				<div className="info-card-inner">Trades</div>
					<div className="w-full h-2"></div>
					<div className="grid grid-cols-2 w-full h-fit gap-2.5">
						<div className="info-card-key">
							Day
						</div>
						<div className="info-card-value">
							{price}
						</div>
						<div className="info-card-key">
							Week
						</div>
						<div className="info-card-value">
							{price}
						</div>
						<div className="info-card-key">
							Month
						</div>
						<div className="info-card-value">
							{price}
						</div>
						<div className="info-card-key">
							Total
						</div>
						<div className="info-card-value">
							{price}
						</div>
					</div>
			</InfoCard>
			<InfoCard>
				<div className="info-card-inner">Status</div>
				<div className="w-full h-2"></div>
				<div className="grid grid-cols-2 w-full h-fit gap-2.5">
					<div className="info-card-key">
						Fyers
					</div>
					<div className="info-card-value"></div>
					<div className="info-card-key">
						Order APIs
					</div>
					<div className="info-card-value"></div>
					<div className="info-card-key">
						Data Sockets
					</div>
					<div className="info-card-value"></div>
					<div className="info-card-key">
						TBT Sockets
					</div>
					<div className="info-card-value"></div>
				</div>
			</InfoCard>
			<InfoCard>
				<div className="info-card-inner">Performance</div>
				<div className="w-full h-2"></div>
				<div className="grid grid-cols-2 w-full h-fit gap-2.5">
					<div className="info-card-key">
						API Response
					</div>
					<div className="info-card-value"></div>
					<div className="info-card-key">
						Socket Response
					</div>
					<div className="info-card-value"></div>
					<div className="info-card-key">
						Round Trip
					</div>
					<div className="info-card-value"></div>
					<div className="info-card-key">
						Last Order Exec.
					</div>
					<div className="info-card-value"></div>
				</div>
			</InfoCard>
		</div>
	);
}

export default InfoLayout;
