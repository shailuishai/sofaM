import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import FadeInUp from '../components/ui/FadeInUp';
import SEO from "../components/SEO.jsx";

export default function AboutPage() {
    const { hash } = useLocation();

    // Магия для плавного скролла к блоку контактов
    useEffect(() => {
        if (hash) {
            setTimeout(() => {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 150);
        }
    }, [hash]);

    return (
        <div className="w-full min-h-screen bg-primary pt-32 pb-16">
            <SEO
                title="О производстве | Sofa M"
                description="Узнайте, как мы создаем архитектуру вашего личного пространства. Ручной труд мастеров, премиальные материалы и бескомпромиссное качество."
            />

            {/* ПРАВКА: Уменьшили чрезмерный отступ снизу mb-24 -> mb-16 */}
            <section className="px-4 md:px-[120px] mb-16 md:mb-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-start">

                    <div className="lg:col-span-5">
                        <FadeInUp>
                            <span className="font-sans text-[12px] uppercase tracking-widest text-graphite/60 mb-6 block">
                                Манифест
                            </span>
                            <h1 className="font-serif text-[40px] md:text-[64px] leading-[110%] text-graphite">
                                Искусство <br/>в каждой детали
                            </h1>
                        </FadeInUp>
                    </div>

                    <div className="lg:col-span-6 lg:col-start-7 lg:mt-12">
                        <FadeInUp delay={0.2}>
                            <p className="font-sans text-[16px] md:text-[18px] leading-[160%] text-graphite/80 font-light mb-8">
                                Мы не просто производим мебель. Мы создаем архитектуру вашего личного пространства.
                                Отказ от компромиссов в качестве материалов и строгий минимализм в дизайне
                                позволяют нашим изделиям оставаться актуальными вне времени.
                            </p>
                            <p className="font-sans text-[16px] leading-[160%] text-graphite/60 font-light">
                                Каждая линия выверена, каждый шов идеален. Наше производство — это симбиоз
                                ручного труда потомственных мастеров и современных технологий обработки массива и металла.
                            </p>
                        </FadeInUp>
                    </div>
                </div>

                {/* ПРАВКА: Реалистичное фото + уменьшили высоту на десктопе (h-[50vh]) */}
                <div className="mt-12 md:mt-20 w-full h-[300px] md:h-[50vh] overflow-hidden">
                    <FadeInUp delay={0.4}>
                        <img
                            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2000&auto=format&fit=crop"
                            alt="Интерьер и мебель"
                            className="w-full h-full object-cover grayscale-[10%]"
                        />
                    </FadeInUp>
                </div>
            </section>

            {/* СКРОЛЛ 2: Блок Контактов */}
            <section id="contacts" className="px-4 md:px-[120px] scroll-mt-32">
                <FadeInUp>
                    <div className="bg-[#1A1A1A] text-[#F9F9F7] p-8 md:p-24 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

                        {/* ПРАВКА: Менее пафосные тексты */}
                        <div>
                            <span className="font-sans text-[12px] uppercase tracking-widest text-gray-400 mb-4 block">
                                Контакты
                            </span>
                            <h2 className="font-serif text-[32px] md:text-[48px] leading-[120%] mb-10">
                                Обсудить проект
                            </h2>

                            <div className="flex flex-col gap-6 font-sans text-[15px] font-light">
                                <div>
                                    <p className="text-gray-500 uppercase text-xs tracking-widest mb-1">Телефон / Мессенджеры</p>
                                    <a href="tel:+375293302000" className="hover:text-gray-300 transition-colors block mb-2">+375 29 330-20-00</a>
                                    <div className="flex gap-4">
                                        <a href="https://t.me/PavelShyker" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-gray-300">Telegram</a>
                                        <a href="https://www.instagram.com/sofa_m.by" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-gray-300">Instagram</a>
                                    </div>
                                </div>

                                <div>
                                    <p className="text-gray-500 uppercase text-xs tracking-widest mb-1">Адрес</p>
                                    {/* ПРАВКА: Минский адрес */}
                                    <p>Минск, ул. Архитектурная, 1</p>
                                </div>
                            </div>
                        </div>

                        {/* Кнопка связи */}
                        <div className="flex flex-col justify-center items-start md:items-end">
                            <p className="font-sans text-sm text-gray-400 font-light max-w-sm mb-8 md:text-right leading-relaxed">
                                Напишите нам, и мы с удовольствием ответим на все вопросы, поможем подобрать идеальную конфигурацию и рассчитаем стоимость по вашим размерам.
                            </p>
                            {/* ПРАВКА: Кнопка на всю ширину на мобилках */}
                            <a
                                href="https://t.me/PavelShyker"
                                target="_blank"
                                rel="noreferrer"
                                className="w-full sm:w-auto text-center font-sans font-medium uppercase tracking-widest text-[14px] bg-[#F9F9F7] text-[#1A1A1A] py-4 px-10 hover:bg-gray-200 transition-colors"
                            >
                                Написать в Telegram
                            </a>
                        </div>

                    </div>
                </FadeInUp>
            </section>
        </div>
    );
}