import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer.jsx";
import Home from "./pages/Home.jsx";
import CatalogPage from "./pages/CatalogPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import {HelmetProvider} from "react-helmet-async";

export default function App() {
    return (
        <HelmetProvider>
            <BrowserRouter>
                <ScrollToTop />
                <div className="min-h-screen flex flex-col bg-primary">
                    <Header />
                    <div className="flex-grow">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/catalog" element={<CatalogPage />} />
                            <Route path="/about" element={<AboutPage />} />
                        </Routes>
                    </div>
                    <Footer />
                </div>
            </BrowserRouter>
        </HelmetProvider>
    );
}