import React from "react";
import Navbar from "../components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Shop from "./Shop";
import Slider from "../components/Slider";


const Home = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Slider />}/>
                <Route path="/tienda" element={<Shop />}/>
                <Route path="/SingleProduct/:id" element={<Shop />}/>
            </Routes>
        </div>
    );
};

export { Home };
