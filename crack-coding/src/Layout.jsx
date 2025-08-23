import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './views/Home';
import Login from './views/Login';
import NotFound from './views/NotFound';
import Navbar from './components/Navbar';
import injectContext from './js/store/appContext';

const Layout = () => {
    const basename=proces.env.BASENAME || '';
    return (
        <div>
            <BrowserRouter basename={basename}>
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

export default injectContext(Layout);