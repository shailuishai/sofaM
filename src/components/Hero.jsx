import React from 'react';
import Button from './ui/Button';

export default function Hero() {
    return (
        <section className="relative w-full h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden bg-[#DCDCDC]">

            {/* Оптимизированный фон для идеального LCP */}
            <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                <img
                    srcSet="
                        https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format,compress&q=60&w=800 800w,
                        https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format,compress&q=75&w=1920 1920w
                    "
                    sizes="100vw"
                    src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format,compress&q=75&w=1920"
                    alt="Премиальный интерьер"
                    fetchPriority="high"
                    loading="eager"
                    decoding="sync"
                    className="absolute inset-0 w-full h-full object-cover object-center opacity-70"
                />
                {/* Оверлей градиента вырван из потока */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/40 to-transparent" />
            </div>

            {/* Контентная часть */}
            <div className="relative z-10 flex flex-col items-center text-center px-4 lg:px-[120px] w-full max-w-[1440px] mx-auto mt-16">
                <h1 className="sr-only">Премиальная мягкая мебель на заказ в Минске</h1>

                <h2 className="font-serif text-[40px] md:text-[72px] leading-[110%] text-graphite mb-6 max-w-4xl">
                    Архитектура вашего комфорта
                </h2>

                <p className="font-sans text-[16px] md:text-[18px] leading-[160%] text-graphite/80 mb-10 max-w-xl font-light">
                    Sofa M — это <strong>премиальная мебель в Минске</strong> собственного производства.
                    Мы создаем диваны и кровати под заказ, гарантируя безупречное качество, строгие линии и индивидуальный подход к вашему интерьеру.
                </p>

                <Button
                    variant="primary"
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
            </div>
        </section>
    );
}