import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from "react-helmet-async";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

// Ленивая загрузка страниц (разделение бандла)
const Home = lazy(() => import('./pages/Home.jsx'));
const CatalogPage = lazy(() => import('./pages/CatalogPage.jsx'));
const AboutPage = lazy(() => import('./pages/AboutPage.jsx'));

// Фолбэк-лоадер (чтобы не прыгал CLS)
const PageLoader = () => <div className="min-h-screen bg-primary" />;

export default function App() {
    return (
        <HelmetProvider>
            <BrowserRouter>
                <ScrollToTop />
                <div className="min-h-screen flex flex-col bg-primary">
                    <Header />
                    <div className="flex-grow">
                        <Suspense fallback={<PageLoader />}>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/catalog" element={<CatalogPage />} />
                                <Route path="/about" element={<AboutPage />} />
                            </Routes>
                        </Suspense>
                    </div>
                    <Footer />
                    <SpeedInsights/>
                    <Analytics/>
                </div>
            </BrowserRouter>
        </HelmetProvider>
    );
}