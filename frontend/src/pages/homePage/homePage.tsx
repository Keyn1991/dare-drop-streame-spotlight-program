import React from 'react';

import StreamerForm from "../../Components/StreamerForm/StreamerForm";
import StreamerList from "../../Components/StreamerList/StreamerList";

const HomePage = () => {
    return (
        <div>
            <StreamerForm/>
            <StreamerList/>
        </div>
    );
};

export default HomePage;