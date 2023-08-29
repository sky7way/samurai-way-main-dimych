import React from 'react';
import './App.css';
import logo from './img/19586_0_01.jpeg'
import background from './img/background/background.png'
import avatar from './img/avatar.png'


function App() {
    return (
        <div className="app-wrapper">
            <header className="header">
                <img src={logo} alt="logo"/>
            </header>
            <nav className="nav">
                <div>Profile</div>
                <div>Messages</div>
                <div>News</div>
                <div>Music</div>
                <div>Settings</div>
            </nav>
            <div className="content">
                <div className="bg-img">
                    <img src={background} alt="background"/>
                </div>
                <div className="avatar-img">
                    <img src={avatar} alt="avatar"/>
                </div>
                <div className="my-posts">
                    My posts
                </div>
                <div className="new-posts">
                    New posts
                </div>
                <div className="posts">
                    <div>post 1</div>
                    <div>post 2</div>
                    <div>post 3</div>
                </div>
            </div>
        </div>
    );
}

export default App;

