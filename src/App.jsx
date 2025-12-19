import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home'
import Strategies from './pages/Strategies'
import Backtest from './pages/Backtest';
import Positions from './pages/Positions';
import About from './pages/About';
import Account from './pages/Account'

const App = () => {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<RootLayout />} >
                <Route index element={<Home />} />
                <Route path='strategies' element={<Strategies />} />
                <Route path='backtest' element={<Backtest />} />
                <Route path='positions' element={<Positions />} />
                <Route path='about' element={<About />} />
                <Route path='account' element={<Account />} />
            </Route>
        )
    );

    return (
        <RouterProvider router={router} />
    );
};

export default App;