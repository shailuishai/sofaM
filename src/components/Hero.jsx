import React from 'react';
// Убедись, что путь до компонента Button правильный
import Button from './ui/Button';

const Hero = () => {
    return (
        <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-[#F9F9F7]">

            {/* Фоновое изображение */}
            <div className="absolute inset-0 w-full h-full">
                <img
                    src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2000&auto=format&fit=crop"
                    alt="Премиальный интерьер"
                    className="w-full h-full object-cover object-center opacity-70"
                />
                {/* Легкий градиент для лучшей читаемости текста, если фото будет слишком пестрым */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#F9F9F7]/40 to-transparent"></div>
            </div>

            {/* Контентная часть */}
            <div className="relative z-10 flex flex-col items-center text-center px-[16px] lg:px-[120px] w-full max-w-[1440px] mx-auto mt-16">

                <h1 className="font-playfair text-[40px] md:text-[72px] leading-[110%] text-[#1A1A1A] mb-6 max-w-4xl">
                    Архитектура вашего комфорта
                </h1>

                <p className="font-montserrat text-[16px] md:text-[18px] leading-[160%] text-[#1A1A1A]/80 mb-10 max-w-xl font-light">
                    Премиальная мебель собственного производства под заказ.
                    Безупречное качество, строгие линии и индивидуальный подход к вашему пространству.
                </p>

                {/* Используем нашу готовую кнопку */}
                <Button variant="primary">
                    Узнать стоимость
                </Button>

            </div>
        </section>
    );
};

export default Hero;