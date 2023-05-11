import React, { memo } from 'react';
import './App.css';
import Locations from './components/locations/locations';

function App() {
    return (
        <div>
            <h2>My first Apollo app 🚀</h2>
            <Locations/>
        </div>
    );
}

export default memo(App);
