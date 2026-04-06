import React from 'react';
import Hero from '../components/Hero.jsx';
import Categories from '../components/Categories.jsx';
import Craftsmanship from '../components/Craftsmanship.jsx';
import ProductsGrid from '../components/ProductsGrid.jsx';
import SEO from "../components/SEO.jsx";

export default function Home() {
    return (
        <main className="flex-grow">
            {/* ГЛАВНЫЙ SEO-БЛОК САЙТА */}
            <SEO
                title="Премиальная мягкая мебель на заказ"
                description="Производство эксклюзивных диванов, кресел и кроватей по индивидуальным размерам. Безупречное качество, итальянские ткани, массив дерева."
            />
            <Hero />
            <Categories />
            <Craftsmanship />
            <ProductsGrid />
        </main>
    );
}