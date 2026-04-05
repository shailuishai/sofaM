import React from 'react';
import { Link } from 'react-router-dom';
import FadeInUp from './ui/FadeInUp';

const categories = [
    {
        id: 1,
        title: 'Диваны',
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1000&auto=format&fit=crop',
    },
    {
        id: 2,
        title: 'Кровати',
        image: 'https://i.pinimg.com/736x/80/63/3e/80633e503232a602ee59a25f88212bec.jpg',
    },
    {
        id: 3,
        title: 'Кресла',
        image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1000&auto=format&fit=crop',
    }
];

export default function Categories() {
    return (
        <section className="w-full px-4 md:px-[120px] py-16 md:py-[120px] bg-primary">

            {/* Анимируем шапку секции */}
            <FadeInUp>
                <div className="flex justify-between items-end mb-10 md:mb-16">
                    <h2 className="font-serif text-[28px] md:text-[48px] leading-[120%] text-graphite">
                        Каталог
                    </h2>
                    {/* Передаем 'Все', чтобы сбросить фильтры */}
                    <Link
                        to="/catalog"
                        state={{ category: 'Все' }}
                        className="hidden md:inline-block font-sans text-[14px] uppercase tracking-widest text-graphite border-b border-graphite pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors"
                    >
                        Все модели
                    </Link>
                </div>
            </FadeInUp>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                {categories.map((category, index) => (
                    <FadeInUp key={category.id} delay={index * 0.2}>
                        {/* Передаем конкретный title категории в state */}
                        <Link
                            to="/catalog"
                            state={{ category: category.title }}
                            className="group relative block w-full h-[400px] md:h-[560px] overflow-hidden"
                        >
                            <img
                                src={category.image}
                                alt={category.title}
                                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-black/40"></div>
                            <div className="absolute bottom-8 left-8 md:bottom-10 md:left-10">
                                <h3 className="font-serif text-white text-[24px] md:text-[32px]">
                                    {category.title}
                                </h3>
                            </div>
                        </Link>
                    </FadeInUp>
                ))}
            </div>
        </section>
    );
}