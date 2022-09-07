import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FormContainer from '../Form/FormContainer.jsx';
import ProfileContainer from '../Profile/ProfileContainer.jsx';
import classes from './App.module.css';

const App = () => {
    return <div className={classes.appContainer}>
        <Routes>
            <Route path='/' element={<FormContainer />} />
            <Route path='/profile' element={<ProfileContainer />} />
        </Routes>
    </div>
}

export default App;
