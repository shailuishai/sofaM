import React from 'react';
import Button from './ui/Button';
import FadeInUp from './ui/FadeInUp';

export default function Craftsmanship() {
    return (
        <section className="w-full px-0 md:px-[120px] py-16 md:py-[120px] bg-primary">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">

                {/* ИЗМЕНЕНО: FadeInUp стал родительским контейнером */}
                <FadeInUp className="lg:col-span-7 relative w-full h-[450px] md:h-[600px] bg-gray-200 rounded-sm overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=1200&auto=format&fit=crop"
                        alt="Процесс создания премиальной мебели"
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 md:hover:scale-105"
                    />
                </FadeInUp>

                <div className="relative z-10 lg:col-span-4 lg:col-start-9 flex flex-col items-start w-[90%] md:w-full mx-auto -mt-24 md:mt-0 bg-primary md:bg-transparent p-8 md:p-0 border border-gray-200 md:border-none">
                    <FadeInUp delay={0.1} className="w-full">
                        <span className="font-sans text-[12px] uppercase tracking-widest text-graphite/60 mb-4 block">
                            О производстве
                        </span>
                    </FadeInUp>

                    <FadeInUp delay={0.2} className="w-full">
                        <h2 className="font-serif text-[28px] md:text-[48px] leading-[120%] text-graphite mb-6">
                            Бескомпромиссное мастерство
                        </h2>
                    </FadeInUp>

                    <FadeInUp delay={0.3} className="w-full">
                        <p className="font-sans text-[16px] leading-[160%] text-graphite/80 font-light mb-10">
                            Каждый предмет мебели создается вручную с использованием премиальных материалов.
                            Мы не идем на компромиссы в качестве: от каркаса из массива дерева до идеальных швов на итальянской ткани.
                        </p>
                    </FadeInUp>

                    <FadeInUp delay={0.4} className="w-full">
                        <Button
                            variant="secondary"
                            to="/about#contacts"
                            onClick={(e) => {
                                if (window.location.pathname === '/about') {
                                    e.preventDefault();
                                    document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                        >
                            Узнать больше
                        </Button>
                    </FadeInUp>
                </div>
            </div>
        </section>
    );
}