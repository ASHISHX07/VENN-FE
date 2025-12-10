import React from "react";
import logo from "../../assets/TradeTactix-w.png";
import accIcon from "../../assets/account_icon.png"
import { useState } from "react";
import { useNavigate } from "react-router";
import { NavLink, Link } from "react-router";

export const Navbar = () => {
    
    const navigate = useNavigate();
    const [theme, setTheme] = useState();

	return (
		<nav className="min-w-full h-10 mb-2 items-center flex flex-col sticky">
            <div className="relative min-w-full items-center flex h-full justify-between">
                <div className="text-white w-[20%] h-full items-center flex">
                    <Link className={"cursor-default"}>
                        <img src={logo} alt="Logo" className="h-auto w-5 mx-2 md:w-8 md:mx-3 cursor-pointer" />
                    </Link>
                </div>
                <div className="hidden md:flex text-white w-[80%] h-full items-center justify-evenly text-[15px]">
                    <div className="anchor w-auto h-auto flex box-border px-3 py-0.5 rounded">
                        <NavLink to={'/'}>Dashboard</NavLink>
                    </div>
                    <div className="anchor w-auto h-auto flex box-border px-3 py-1 rounded">
                        <NavLink to={'/strategies'}>Strategies</NavLink>
                    </div>
                    <div className="anchor w-auto h-auto flex box-border px-3 py-1 rounded">
                        <NavLink to={'/backtest'}>Backtest</NavLink>
                    </div>
                    <div className="anchor w-auto h-auto flex box-border px-3 py-1 rounded">
                        <NavLink to={'/positions'}>Positions</NavLink>
                    </div>
                    <div className="anchor w-auto h-auto flex box-border px-3 py-1 rounded">
                        <NavLink to={'/about'}>About</NavLink>
                    </div>
                </div>
                <div className="flex text-white w-[20%] h-full items-center justify-end">
                    <img src={accIcon} alt="account_icon" className="flex cursor-pointer w-5 mx-2 md:w-8 md:mx-3"/>
                </div>
            </div>
            <div className="h-0.5 w-full bg-linear-to-r from-transparent via-green-300 to-transparent"></div>
            {/* <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3"> */}

                {/* ---------- Logo section ---------- */}
                

            {/* </div> */}
			{/* <img src={logo} alt="Logo" className="w-" /> */}
		</nav>
	);
};
