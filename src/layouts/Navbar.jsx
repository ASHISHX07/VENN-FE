import React from "react";
import logo from "../assets/TradeTactix-w.png";
import accIcon from "../assets/account_icon.png";
import { NavLink, Link } from "react-router";
import ThemeToggle from "../components/ThemeToggle";
import { useState } from "react";

export const Navbar = () => {
	return (
		<nav
			className="min-w-full h-10 mb-2 items-center flex flex-col sticky top-0 z-50
			backdrop-blur-md bg-[rgba(0,0,0,0.1)] dark:bg-[rgba(255,255,255,0.1)] transition-all duration-300"
		>
			<div className="relative min-w-full items-center flex h-full justify-between">
				<div className="w-[20%] h-full items-center flex text-gray-900 dark:text-gray-100">
					<Link className="cursor-default">
						<img
							src={logo}
							alt="Logo"
							className="h-auto w-5 mx-2 lg:w-8 md:mx-3 cursor-pointer"
						/>
					</Link>
				</div>
				<div className="hidden lg:flex w-[80%] h-full items-center justify-evenly text-[15px] text-gray-900 dark:text-gray-100 transition-colors duration-300">
					<div className="anchor w-auto h-auto flex box-border px-3 py-0.5 rounded transition-colors text-gray-900 dark:text-gray-100">
						<NavLink to={"/"}>Dashboard</NavLink>
					</div>
					<div className="anchor w-auto h-auto flex box-border px-3 py-0.5 rounded transition-colors text-gray-900 dark:text-gray-100">
						<NavLink to={"/strategies"}>Strategies</NavLink>
					</div>
					<div className="anchor w-auto h-auto flex box-border px-3 py-0.5 rounded transition-colors text-gray-900 dark:text-gray-100">
						<NavLink to={"/backtest"}>Backtest</NavLink>
					</div>
					<div className="anchor w-auto h-auto flex box-border px-3 py-0.5 rounded transition-colors text-gray-900 dark:text-gray-100">
						<NavLink to={"/positions"}>Positions</NavLink>
					</div>
					<div className="anchor w-auto h-auto flex box-border px-3 py-0.5 rounded transition-colors text-gray-900 dark:text-gray-100">
						<NavLink to={"/about"}>About</NavLink>
					</div>
				</div>
				<div className="flex flex-row w-[20%] h-full items-center justify-end text-gray-900 dark:text-gray-100">
					<ThemeToggle />
					<NavLink to={"/account"}>
						<img
							src={accIcon}
							alt="account_icon"
							className="flex cursor-pointer w-7 mx-3 max-lg:hidden"
						/>
					</NavLink>
				</div>
			</div>
			{/* <div className="h-0.5 w-full bg-linear-to-r from-transparent via-emerald-400 to-transparent"></div> */}
		</nav>
	);
};
