import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/:user" element={<ProfilePage/>}/>
            </Routes>
        </div>
    );
}

export default App;
