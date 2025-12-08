import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Home from './pages/Home'
import RootLayout from './components/layout/RootLayout';
import Strategies from './pages/Strategies'
import Backtest from './pages/Backtest';
import Positions from './pages/Positions';

const App = () => {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<RootLayout />} >
                <Route index element={<Home />} />
                <Route path='strategies' element={<Strategies />} />
                <Route path='backtest' element={<Backtest />} />
                <Route path='positions' element={<Positions />} />
            </Route>
        )
    );

  return <RouterProvider router={router} />;
};

export default App;