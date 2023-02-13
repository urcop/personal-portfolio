import React from 'react'
import About from "./components/pages/about";
import MainReviews from "./components/pages/reviews";
import {Routes, Route} from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path="/" element={<About/>}/>
            <Route path="/reviews" element={<MainReviews/>}/>
            <Route path="/projects" element={<MainReviews/>}/>
            <Route path="/contacts" element={<MainReviews/>}/>
        </Routes>
    );
}

export default App;
