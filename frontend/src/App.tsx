import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';

import HomePage from "./pages/homePage/homePage";
import StreamerDetailsPage from "./pages/StreamerDetailsPage/StreamerDetailsPage";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";


const App = () => (
    <div className="App">
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/streamer/:id" element={<StreamerDetailsPage />} />
            </Routes>
            <Footer/>
        </div>
    </div>
);

export default App;
