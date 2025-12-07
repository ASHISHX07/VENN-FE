import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Home from './pages/Home'
import RootLayout from './components/layout/RootLayout';
import Strategies from './pages/Strategies'

const App = () => {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<RootLayout />} >
                <Route index element={<Home />} />
                <Route path='strategies' element={<Strategies />} />
            </Route>
        )
    );

  return <RouterProvider router={router} />;
};

export default App;