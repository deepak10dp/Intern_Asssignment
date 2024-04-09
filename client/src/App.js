import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from './components/Form'; // Your existing form component
import Welcome from './components/Welcome'; // The new welcome component
import CardSelectionPage from './components/CardSelectionPage';
import VerifyEmailPage from './components/VerifyEmailPage';

const App = () => {
 return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/card-selection" element={<CardSelectionPage/>} />
        <Route path="/verify-email" element={<VerifyEmailPage/>}/>
      </Routes>
    </Router>
 );
};
export default App;

