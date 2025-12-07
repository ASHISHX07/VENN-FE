import React from "react";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { useNavigate } from "react-router";
import { NavLink } from "react-router";

export const Navbar = () => {
    
    // const navigate = useNavigate();
    const [open, setIsOpen] = useState(false);

	return (
		<nav className="relative min-w-full h-12 items-center flex">
            <div className="text-white w-[20%] h-full  items-center flex">
                <NavLink className={"cursor-default"}>
                    <img src={logo} alt="Logo" className="h-auto w-6 mx-1 md:w-8 md:mx-6 cursor-pointer" />
                </NavLink>
            </div>
            <div className="text-white w-[80%] h-full items-center flex justify-evenly">
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/strategies'}>Strategies</NavLink>
                <NavLink to={'/backtest'}>Backtest</NavLink>
                <NavLink to={'/account'}>Account</NavLink>
            </div>
            <div className="text-white w-[20%] h-full items-center flex">
                
            </div>
            {/* <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3"> */}

                {/* ---------- Logo section ---------- */}
                

            {/* </div> */}
			{/* <img src={logo} alt="Logo" className="w-" /> */}
		</nav>
	);
};
