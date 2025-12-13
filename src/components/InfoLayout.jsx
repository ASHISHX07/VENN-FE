import React from "react";

function InfoLayout() {
	return (
		<div className="w-full h-auto flex">
			<div className="w-full h-auto p-2 md:p-2 box-border grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
				<div className="relative flex items-center justify-center p-3 w-full h-80">
					<div className="flex absolute left-0 w-px h-full bg-linear-to-b from-emerald-200/16 via-emerald-400 to-emerald-200/16 top"></div>
                    <div className="w-full h-full flex flex-col relative justify-between items-center overflow-x-hidden">
                        <div className="w-full h-6 sm:h-7 flex z-1"></div>
                        <div className="absolute top-0 left-0 w-full h-fit rounded-2xl bg-linear-to-r from-emerald-500/50 via-emerald-300/20 to-emerald-200/1 transition-colors duration-300">
                            <h2 className="text-2x sm:text-lg lg:text-xl ml-3 my items-center text-[#252c36] dark:text-[#c9ced7] transition-colors duration-300">Funds</h2>
                        </div>
                        <div className="w-full h-6 sm:h-7 flex bg-gray-200/20"></div>
                        <div className="w-full h-6 sm:h-7 flex bg-gray-200/20"></div>
                        <div className="w-full h-6 sm:h-7 flex bg-gray-200/20"></div>
                        <div className="w-full h-6 sm:h-7 flex bg-gray-200/20"></div>
                        <div className="w-full h-6 sm:h-7 flex bg-gray-200/20"></div>
                    </div>
					<div className="flex absolute right-0 w-px h-full bg-linear-to-b from-emerald-200/16 via-emerald-400 to-emerald-200/16 sm:hidden md:hidden"></div>
				</div>
				<div className="relative flex items-center justify-center p-3 w-full h-80">
					<div className="flex absolute left-0 w-px h-full bg-linear-to-b from-emerald-200/16 via-emerald-400 to-emerald-200/16 top"></div>
                    <div className="w-full h-full flex flex-col relative justify-between items-center overflow-x-hidden">
                        <div className="w-full h-6 sm:h-7 flex z-1"></div>
                        <div className="absolute top-0 left-0 w-full h-fit rounded-2xl bg-linear-to-r from-emerald-500/50 via-emerald-300/20 to-emerald-200/1 transition-colors duration-300">
                            <h2 className="text-2x sm:text-lg lg:text-xl ml-3 my items-center text-[#252c36] dark:text-[#c9ced7] transition-colors duration-300">Streams</h2>
                        </div>
                        <div className="w-full h-6 sm:h-7 flex bg-gray-200/20"></div>
                        <div className="w-full h-6 sm:h-7 flex bg-gray-200/20"></div>
                        <div className="w-full h-6 sm:h-7 flex bg-gray-200/20"></div>
                        <div className="w-full h-6 sm:h-7 flex bg-gray-200/20"></div>
                        <div className="w-full h-6 sm:h-7 flex bg-gray-200/20"></div>
                    </div>
					<div className="flex absolute right-0 w-px h-full bg-linear-to-b from-emerald-200/16 via-emerald-400 to-emerald-200/16 md:hidden"></div>
				</div>
				<div className="relative flex items-center justify-center p-3 w-full h-80">
					<div className="flex absolute left-0 w-px h-full bg-linear-to-b from-emerald-200/16 via-emerald-400 to-emerald-200/16 top"></div>
                    <div className="w-full h-full flex flex-col relative justify-between items-center overflow-x-hidden">
                        <div className="w-full h-6 sm:h-7 flex z-1"></div>
                        <div className="absolute top-0 left-0 w-full h-fit rounded-2xl bg-linear-to-r from-emerald-500/50 via-emerald-300/20 to-emerald-200/1 transition-colors duration-300">
                            <h2 className="text-2x sm:text-lg lg:text-xl ml-3 my items-center text-[#252c36] dark:text-[#c9ced7] transition-colors duration-300">Algorithms</h2>
                        </div>
                        <div className="w-full h-6 sm:h-7 flex bg-gray-200/20"></div>
                        <div className="w-full h-6 sm:h-7 flex bg-gray-200/20"></div>
                        <div className="w-full h-6 sm:h-7 flex bg-gray-200/20"></div>
                        <div className="w-full h-6 sm:h-7 flex bg-gray-200/20"></div>
                        <div className="w-full h-6 sm:h-7 flex bg-gray-200/20"></div>
                    </div>
					<div className="flex absolute right-0 w-px h-full bg-linear-to-b from-emerald-200/16 via-emerald-400 to-emerald-200/16 sm:hidden md:hidden"></div>
				</div>
				<div className="relative flex items-center justify-center p-3 w-full h-80">
					<div className="flex absolute left-0 w-px h-full bg-linear-to-b from-emerald-200/16 via-emerald-400 to-emerald-200/16 top"></div>
                    <div className="w-full h-full flex flex-col relative justify-between items-center overflow-x-hidden">
                        <div className="w-full h-6 sm:h-7 flex z-1"></div>
                        <div className="absolute top-0 left-0 w-full h-fit rounded-2xl bg-linear-to-r from-emerald-500/50 via-emerald-300/20 to-emerald-200/1 transition-colors duration-300">
                            <h2 className="text-2x sm:text-lg lg:text-xl ml-3 my items-center text-[#252c36] dark:text-[#c9ced7] transition-colors duration-300">System Status</h2>
                        </div>
                        <div className="w-full h-6 sm:h-7 flex bg-gray-200/20"></div>
                        <div className="w-full h-6 sm:h-7 flex bg-gray-200/20"></div>
                        <div className="w-full h-6 sm:h-7 flex bg-gray-200/20"></div>
                        <div className="w-full h-6 sm:h-7 flex bg-gray-200/20"></div>
                        <div className="w-full h-6 sm:h-7 flex bg-gray-200/20"></div>
                    </div>
					<div className="flex absolute right-0 w-px h-full bg-linear-to-b from-emerald-200/16 via-emerald-400 to-emerald-200/16"></div>
				</div>
			</div>
		</div>
	);
}

export default InfoLayout;
