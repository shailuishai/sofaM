import React from 'react';
import Hero from '../components/Hero.jsx';
import Categories from '../components/Categories.jsx';
import Craftsmanship from '../components/Craftsmanship.jsx';
import ProductsGrid from '../components/ProductsGrid.jsx';

export default function Home() {
    return (
        <main className="flex-grow">
            <Hero />
            <Categories />
            <Craftsmanship />
            <ProductsGrid />
        </main>
    );
}