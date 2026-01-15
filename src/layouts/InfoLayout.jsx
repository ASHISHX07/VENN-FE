import { useState } from "react";
import InfoCard from "../components/InfoCard";
import { fyersModel } from "fyers-web-sdk-v3";
import useToggle from "../hooks/useToggle";

function InfoLayout() {
	const [fyersSt, fyersStUpdater] = useState();
	let status;
	let statusCode;
	const fyers = new fyersModel();
	
	const appId = "QSXMT8C3KC-100";
	const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiZDoxIiwiZDoyIiwieDowIiwieDoxIiwieDoyIl0sImF0X2hhc2giOiJnQUFBQUFCcGFKY0hYbnhqaGFfTllkdHJ3QVZ0blN2U1dUdkp6c2EyNjd6Q3g3TGxoc3hsNmwzNUVTS0QwYkdUcEluY1JPRGJjODU2emJ6ZEthZ0lORGxNSWItQmZycjNILXdxSzZuazJPbzhOUU9lRDcwUHRiZz0iLCJkaXNwbGF5X25hbWUiOiIiLCJvbXMiOiJLMSIsImhzbV9rZXkiOiJlZDU3YjBhYTYzZmI4MDkyNzZlMzgyMjJhNmI4M2ViOGMzZWZjOWVhY2FkZmVlNDc4OWJiYzI4ZCIsImlzRGRwaUVuYWJsZWQiOiJZIiwiaXNNdGZFbmFibGVkIjoiWSIsImZ5X2lkIjoiWVMzNzcyMiIsImFwcFR5cGUiOjEwMCwiZXhwIjoxNzY4NTIzNDAwLCJpYXQiOjE3Njg0NjIwODcsImlzcyI6ImFwaS5meWVycy5pbiIsIm5iZiI6MTc2ODQ2MjA4Nywic3ViIjoiYWNjZXNzX3Rva2VuIn0.e77WRHbJqfAr0AjSBCpVwMQ36REA0_qYX-MTJDVXDX";
	fyers.setAppId(appId);
	fyers.setAccessToken(accessToken);

	async function getProfile() {
		let response = await fyers.get_profile();
		status = response.s;
		statusCode = response.code;
	}

	setInterval(() => {
		getProfile();
		if (status === 'ok' || statusCode === 200) {
			useToggle('.fst', 'red', 'yellow', 'green');
		}		
		else if (statusCode == 400 || statusCode == 401 || statusCode == -8 || statusCode == -15 || statusCode == -16 || statusCode == -17 || statusCode == -50) {
			useToggle('.fst', 'red', 'green', 'yellow');
		}		
		else if (statusCode === 500) {
			useToggle('.fst', 'green', 'yellow', 'red');
		}
	}, 10000);

	// getProfile();

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
					<div className="info-card-value">
						<div className="glow-dot fst">

						</div>
					</div>
					<div className="info-card-key">
						Order APIs
					</div>
					<div className="info-card-value">
						<div className="glow-dot">

						</div>
					</div>
					<div className="info-card-key">
						Data Sockets
					</div>
					<div className="info-card-value">
						<div className="glow-dot">

						</div>
					</div>
					<div className="info-card-key">
						TBT Sockets
					</div>
					<div className="info-card-value">
						<div className="glow-dot">

						</div>
					</div>
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
