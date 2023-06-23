import React from 'react';

import './App.css';
import StreamerForm from "./Components/StreamerForm/StreamerForm";
import StreamerList from "./Components/StreamerList/StreamerList";

const App = () => (
    <div className="App">
        <div>
            <h1>Streamer Spotlight</h1>
            <StreamerForm />
            <StreamerList />
        </div>
    </div>
);

export default App;
