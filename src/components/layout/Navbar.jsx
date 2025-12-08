import React from "react";
import logo from "../../assets/logo.png";
import accIcon from "../../assets/account_icon.png"
import { useState } from "react";
import { useNavigate } from "react-router";
import { NavLink } from "react-router";

export const Navbar = () => {
    
    const navigate = useNavigate();
    const [open, setIsOpen] = useState(false);

	return (
		<nav className="relative min-w-full h-12 items-center flex flex-col">
            <div className="relative min-w-full items-center flex h-full">
                <div className="text-white w-[20%] h-full items-center flex">
                    <NavLink className={"cursor-default"}>
                        <img src={logo} alt="Logo" className="h-auto w-6 mx-2 md:w-8 md:mx-3 cursor-pointer" />
                    </NavLink>
                </div>
                <div className="hidden md:flex text-white w-[80%] h-full items-center justify-evenly text-[15px]">
                    <NavLink to={'/'}>Dashboard</NavLink>
                    <NavLink to={'/strategies'}>Strategies</NavLink>
                    <NavLink to={'/backtest'}>Backtest</NavLink>
                    <NavLink to={'/positions'}>Positions</NavLink>
                </div>
                <div className="hidden md:flex text-white w-[20%] h-full items-center justify-end">
                    <img src={accIcon} alt="account_icon" className="hidden md:flex cursor-pointer w-8 mx-3"/>
                </div>
            </div>
            <div className="h-0.5 w-full bg-linear-to-r from-transparent via-gray-600 to-transparent"></div>
            {/* <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3"> */}

                {/* ---------- Logo section ---------- */}
                

            {/* </div> */}
			{/* <img src={logo} alt="Logo" className="w-" /> */}
		</nav>
	);
};
