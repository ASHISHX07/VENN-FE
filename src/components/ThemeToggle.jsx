import React, { useState, useEffect } from 'react';

function ThemeToggle() {
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    const [isDarkMode, setIsDarkMode] = useState(savedDarkMode);

    useEffect(() => {
        const body = document.body;
        if(isDarkMode) {
            body.classList.add('dark', 'bg-slate-950');
            body.classList.remove('bg-white')
            document.querySelector("body").setAttribute('data-theme', 'dark');
        } else {
            body.classList.remove('dark', 'bg-slate-950');
            body.classList.add('bg-white');
            document.querySelector("body").setAttribute('data-theme', 'light');
        }
        localStorage.setItem('darkMode', isDarkMode);
    }, [isDarkMode]);
    
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <label 
            className="relative inline-block cursor-pointer text-gray-400 hover:text-green-400 transition-colors"
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
        {/* SIZE CONTROL: 
            - w-6 h-6 (24px) is approx 50% smaller than the original 3em (~48px).
            - We hide the actual checkbox but keep it for logic.
        */}
            <input 
                type="checkbox" 
                checked={isDarkMode} 
                onChange={toggleTheme}
                className="sr-only peer" 
            />

            <svg
                width="22"
                height="22"
                viewBox="0 0 20 20"
                fill="currentColor"
                stroke="none"
                // THE ANIMATION LOGIC:
                // Rotate 40deg (Dark) -> 90deg (Light)
                className={`transition-transform duration-500 ease-[cubic-bezier(0.41,0.64,0.32,1.575)] mx-2 max-lg:hidden ${
                !isDarkMode ? 'rotate-90' : 'rotate-40'
                }`}
            >
                <mask id="moon-mask">
                <rect x="0" y="0" width="20" height="20" fill="white"></rect>
                {/* THE "ECLIPSE" CIRCLE: 
                    - Dark Mode: at (11,3) -> Creates Crescent
                    - Light Mode: Moves away -> Shows full Sun
                */}
                <circle
                    cx="11"
                    cy="3"
                    r="8"
                    fill="black"
                    className={`transition-transform duration-500 ease-[cubic-bezier(0.41,0.64,0.32,1.575)] ${
                    !isDarkMode ? 'translate-x-4 -translate-y-[3px]' : 'translate-x-0 translate-y-0'
                    }`}
                ></circle>
                </mask>

                {/* THE MAIN BODY (Sun/Moon) */}
                <circle
                    className={`origin-center transition-transform duration-500 ${
                        !isDarkMode ? 'scale-55' : 'scale-100'
                    }`}
                    cx="10"
                    cy="10"
                    r="8"
                    mask="url(#moon-mask)"
                ></circle>

                {/* THE SUN RAYS */}
                <g 
                    className={`origin-center transition-opacity duration-500 ${
                    !isDarkMode ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                {/* Ray 1 */}
                <circle 
                    cx="18" cy="10" r="1.5" 
                    className={`origin-center transition-transform duration-500 ${!isDarkMode ? 'scale-100' : 'scale-0'}`} 
                />
                {/* Ray 2 */}
                <circle 
                    cx="14" cy="16.928" r="1.5" 
                    className={`origin-center transition-transform duration-500 delay-50 ${!isDarkMode ? 'scale-100' : 'scale-0'}`} 
                />
                {/* Ray 3 */}
                <circle 
                    cx="6" cy="16.928" r="1.5" 
                    className={`origin-center transition-transform duration-500 delay-100 ${!isDarkMode ? 'scale-100' : 'scale-0'}`} 
                />
                {/* Ray 4 */}
                <circle 
                    cx="2" cy="10" r="1.5" 
                    className={`origin-center transition-transform duration-500 delay-170 ${!isDarkMode ? 'scale-100' : 'scale-0'}`} 
                />
                {/* Ray 5 */}
                <circle 
                    cx="6" cy="3.1718" r="1.5" 
                    className={`origin-center transition-transform duration-500 delay-250 ${!isDarkMode ? 'scale-100' : 'scale-0'}`} 
                />
                {/* Ray 6 */}
                <circle 
                    cx="14" cy="3.1718" r="1.5" 
                    className={`origin-center transition-transform duration-500 delay-290 ${!isDarkMode ? 'scale-100' : 'scale-0'}`} 
                />
                </g>
            </svg>
        </label>
    );
}

export default ThemeToggle;
