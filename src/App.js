// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TransferFunctions from './screens/TransferFunctions';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<TransferFunctions />} />

            </Routes>
        </Router>
    );
}

export default App;
