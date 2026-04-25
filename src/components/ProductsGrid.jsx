import React from 'react';
import { Link } from 'react-router-dom';
import FadeInUp from './ui/FadeInUp';

// ИМПОРТ КАРТИНОК
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';

// Обновленные данные (с массивом images)
const products = [
    {
        id: 1,
        name: 'Диван «Lumina»',
        description: 'Модульный диван с обивкой из итальянского букле',
        images: [img1],
    },
    {
        id: 2,
        name: 'Диван «Horizon»',
        description: 'Прямой диван с глубокой эргономичной посадкой',
        images: [img2],
    },
    {
        id: 3,
        name: 'Диван «Eclipse»',
        description: 'Угловая модель для просторных гостиных зон',
        images: [img3],
    },
    {
        id: 4,
        name: 'Диван «Aura»',
        description: 'Лаконичный диван на скрытом парящем каркасе',
        images: [img4],
    }
];

export default function ProductsGrid() {
    return (
        <section className="w-full px-4 md:px-[120px] py-16 md:py-[120px] bg-primary overflow-hidden">

            <FadeInUp>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-6">
                    <div>
                        <span className="font-sans text-[12px] uppercase tracking-widest text-graphite/60 mb-2 block">
                            Коллекция
                        </span>
                        <h2 className="font-serif text-[28px] md:text-[48px] leading-[120%] text-graphite">
                            Популярные модели
                        </h2>
                    </div>
                </div>
            </FadeInUp>

            <div className="flex md:grid overflow-x-auto md:overflow-visible hide-scrollbar snap-x snap-mandatory md:snap-none grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 -mx-4 px-4 md:mx-0 md:px-0 pb-4 md:pb-0">
                {products.map((product, index) => (
                    <FadeInUp key={product.id} delay={index * 0.15}>
                        <div className="group flex flex-col h-full cursor-pointer min-w-[85vw] sm:min-w-[45vw] md:min-w-0 snap-center shrink-0">
                            <div className="relative w-full aspect-[4/5] overflow-hidden mb-6 bg-gray-100">
                                {/* ИЗМЕНЕНО: Оптимизация LCP и CLS */}
                                <img
                                    src={product.images[0]}
                                    alt={product.name}
                                    loading={index < 2 ? "eager" : "lazy"}
                                    decoding="async"
                                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                            </div>
                            <div className="flex flex-col flex-grow">
                                <h3 className="font-serif text-[20px] md:text-[24px] text-graphite mb-2">
                                    {product.name}
                                </h3>
                                <p className="font-sans text-[14px] text-graphite/70 font-light leading-relaxed mb-6 flex-grow">
                                    {product.description}
                                </p>
                                <Link
                                    to="/about#contacts"
                                    onClick={(e) => {
                                        if (window.location.pathname === '/about') {
                                            e.preventDefault();
                                            document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}
                                    className="relative w-max text-[13px] font-sans font-medium uppercase tracking-widest text-graphite border-b border-graphite pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors"
                                >
                                    Узнать стоимость
                                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-graphite origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                                </Link>
                            </div>
                        </div>
                    </FadeInUp>
                ))}
            </div>
        </section>
    );
}