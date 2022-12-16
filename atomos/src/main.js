import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from './containers/home';
import ContactScreen from './containers/contact';
import AboutScreen from './containers/about';

import Layout from './components/layout';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
// import './App.css';

function MainScreen() {
    return (
        <div className="main_page">
          
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index  element={<HomeScreen />} />
                        <Route path="about" element={<AboutScreen />} />
          <Route path="contact" element={<ContactScreen />} />
          {/* <Route path="*" element={<NoPage />} /> */}
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default MainScreen;
