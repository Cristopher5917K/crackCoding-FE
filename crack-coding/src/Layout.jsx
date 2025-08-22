import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './views/Home';
import Login from './views/Login';
import NotFound from './views/NotFound';
import Navbar from './components/Navbar';

const Layout = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Layout