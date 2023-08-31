import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {SiteBar} from "./components/SiteBar";
import {Profile} from "./components/Profile";


function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <SiteBar/>
            <Profile/>
        </div>
    );
}

export default App;

