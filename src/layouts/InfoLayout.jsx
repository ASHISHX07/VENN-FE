import React from "react";
import { useState } from "react";
import InfoCard from "../components/InfoCards";

function InfoLayout() {
	const [current, currentUpdater] = useState({});

	let price = 3400.54;
	let paperBal = 1000000.0;

	return (
		<div className="@container w-full h-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
			<InfoCard>
				<div className="info-card-inner">Funds</div>
				<div className="w-full h-2"></div>
				<div className="grid grid-cols-2 w-full h-fit gap-2">
					<div className="flex w-full h-fit text-sm text-gray-600 dark:text-gray-300 text-shadow-gray-300/80 dark:text-shadow-gray-900/80 text-shadow-md transition-all duration-300">
						Bal
					</div>
					<div className="flex w-full h-fit text-sm relative justify-end text-gray-600 dark:text-gray-300 text-shadow-gray-300/80 dark:text-shadow-gray-900/80 text-shadow-md transition-all duration-300">
						{price}
					</div>
					<div className="flex w-full h-fit text-sm text-gray-600 dark:text-gray-300 text-shadow-gray-300/80 dark:text-shadow-gray-900/80 text-shadow-md transition-all duration-300">
						Paper Bal.
					</div>
					<div className="flex w-full h-fit text-sm relative justify-end text-gray-600 dark:text-gray-300 text-shadow-gray-300/80 dark:text-shadow-gray-900/80 text-shadow-md transition-all duration-300">
						{paperBal}
					</div>
					<div className="flex w-full h-fit text-sm text-gray-600 dark:text-gray-300 text-shadow-gray-300/80 dark:text-shadow-gray-900/80 text-shadow-md transition-all duration-300">
						Realized P&L(D)
					</div>
					<div className="flex w-full h-fit text-sm relative justify-end text-gray-600 dark:text-gray-300 text-shadow-gray-300/80 dark:text-shadow-gray-900/80 text-shadow-md transition-all duration-300"></div>
					<div className="flex w-full h-fit text-sm text-gray-600 dark:text-gray-300 text-shadow-gray-300/80 dark:text-shadow-gray-900/80 text-shadow-md transition-all duration-300">
						Avl Bal.
					</div>
					<div className="flex w-full h-fit text-sm relative justify-end text-gray-600 dark:text-gray-300 text-shadow-gray-300/80 dark:text-shadow-gray-900/80 text-shadow-md transition-all duration-300"></div>
				</div>
			</InfoCard>
			<div className="flex relative justify-center items-center-safe p-2 max-w-full w-auto h-auto box-border">
				<div className="relative flex-col box-border p-1 px-1.5 w-full h-50 justify-center items-center bg-linear-to-tl from-transparent via-gray-100 to-emerald-100 dark:via-gray-900 dark:to-emerald-900 shadow-emerald-700 dark:shadow-emerald-300 shadow-lg/10 rounded-lg transition-colors duration-300">
					<div className="relative align-top text-gray-600 dark:text-gray-300 text-shadow-gray-300/80 dark:text-shadow-gray-900/80 text-shadow-md max-sm:text-sm md:text-lg lg:text-xl transition-all duration-300 border-b border-gray-500">
						Trades
					</div>
					<div className="w-full h-2"></div>
					<div className="grid grid-cols-2 w-full h-fit gap-2">
						<div className="flex w-full h-fit text-sm text-gray-600 dark:text-gray-300 text-shadow-gray-300/80 dark:text-shadow-gray-900/80 text-shadow-md transition-all duration-300">
							Bal
						</div>
						<div className="flex w-full h-fit text-sm relative justify-end text-gray-600 dark:text-gray-300 text-shadow-gray-300/80 dark:text-shadow-gray-900/80 text-shadow-md transition-all duration-300">
							{price}
						</div>
					</div>
				</div>
			</div>
			<div className="flex relative justify-center items-center-safe p-2 max-w-full w-auto h-auto box-border">
				<div className="relative flex-col box-border p-1 px-1.5 w-full h-50 justify-center items-center bg-linear-to-tl from-transparent via-gray-100 to-emerald-100 dark:via-gray-900 dark:to-emerald-900 shadow-emerald-700 dark:shadow-emerald-300 shadow-lg/10 rounded-lg transition-colors duration-300">
					<div className="relative align-top text-gray-600 dark:text-gray-300 text-shadow-gray-300/80 dark:text-shadow-gray-900/80 text-shadow-md max-sm:text-sm md:text-lg lg:text-xl transition-all duration-300 border-b border-gray-500">
						Status
					</div>
					<div className="w-full h-2"></div>
					<div className="grid grid-cols-2 w-full h-fit gap-2">
						<div className="flex w-full h-fit text-sm text-gray-600 dark:text-gray-300 text-shadow-gray-300/80 dark:text-shadow-gray-900/80 text-shadow-md transition-all duration-300">
							Fyers
						</div>
						<div className="flex w-full h-fit text-sm relative justify-end text-gray-600 dark:text-gray-300 text-shadow-gray-300/80 dark:text-shadow-gray-900/80 text-shadow-md transition-all duration-300"></div>
						<div className="flex w-full h-fit text-sm text-gray-600 dark:text-gray-300 text-shadow-gray-300/80 dark:text-shadow-gray-900/80 text-shadow-md transition-all duration-300">
							Order-APIs
						</div>
						<div className="flex w-full h-fit text-sm relative justify-end text-gray-600 dark:text-gray-300 text-shadow-gray-300/80 dark:text-shadow-gray-900/80 text-shadow-md transition-all duration-300"></div>
						<div className="flex w-full h-fit text-sm text-gray-600 dark:text-gray-300 text-shadow-gray-300/80 dark:text-shadow-gray-900/80 text-shadow-md transition-all duration-300">
							Data-Sockets
						</div>
						<div className="flex w-full h-fit text-sm relative justify-end text-gray-600 dark:text-gray-300 text-shadow-gray-300/80 dark:text-shadow-gray-900/80 text-shadow-md transition-all duration-300"></div>
						<div className="flex w-full h-fit text-sm text-gray-600 dark:text-gray-300 text-shadow-gray-300/80 dark:text-shadow-gray-900/80 text-shadow-md transition-all duration-300">
							Fyers
						</div>
						<div className="flex w-full h-fit text-sm relative justify-end text-gray-600 dark:text-gray-300 text-shadow-gray-300/80 dark:text-shadow-gray-900/80 text-shadow-md transition-all duration-300"></div>
					</div>
				</div>
			</div>
			<div className="flex relative justify-center items-center-safe p-2 max-w-full w-auto h-auto box-border">
				<div className="relative flex-col box-border p-1 px-1.5 w-full h-50 justify-center items-center bg-linear-to-tl from-transparent via-gray-100 to-emerald-100 dark:via-gray-900 dark:to-emerald-900 shadow-emerald-700 dark:shadow-emerald-300 shadow-lg/10 rounded-lg transition-colors duration-300">
					<div className="relative align-top text-gray-600 dark:text-gray-300 text-shadow-gray-300/80 dark:text-shadow-gray-900/80 text-shadow-md max-sm:text-sm md:text-lg lg:text-xl transition-all duration-300 border-b border-gray-500">
						Performance
					</div>
					<div className="w-full h-2"></div>
					<div className="grid grid-cols-2 w-full h-fit"></div>
				</div>
			</div>
		</div>
	);
}

export default InfoLayout;
