import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound.jsx";
import Home from './pages/Home.jsx'

export default function WebRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}