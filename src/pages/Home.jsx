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
                title="Премиальная мебель в Минске | Купить мебель на заказ - Sofa M"
                description="Ищете где купить мебель в Минске? Sofa M — производство эксклюзивных диванов, кресел и кроватей по индивидуальным размерам. Премиум качество и гарантия."
            />
            <Hero />
            <Categories />
            <Craftsmanship />
            <ProductsGrid />
        </main>
    );
}