import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import FadeInUp from '../components/ui/FadeInUp';

export default function AboutPage() {
    const { hash } = useLocation();

    // Магия для плавного скролла к блоку контактов
    useEffect(() => {
        if (hash) {
            // Ждем 150мс, чтобы DOM и анимации Framer Motion успели смонтироваться
            setTimeout(() => {
                // Убираем '#' из хеша для безопасного поиска по ID
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

            {/* СКРОЛЛ 1: Философия и Фото */}
            <section className="px-4 md:px-[120px] mb-24 md:mb-40">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-start">

                    {/* Левая колонка: Заголовок */}
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

                    {/* Правая колонка: Текст */}
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

                {/* Широкое атмосферное фото (ОБНОВЛЕНО) */}
                <div className="mt-16 md:mt-24 w-full h-[400px] md:h-[70vh] overflow-hidden">
                    <FadeInUp delay={0.4}>
                        <img
                            src="https://menuiseriemordantjimmy.com/uploads/media/images/cms/medias/2f1b74ee97fb0947e77cff990604f5b4.jpeg"
                            alt="Интерьер производства"
                            className="w-full h-full object-cover grayscale-[20%]"
                        />
                    </FadeInUp>
                </div>
            </section>

            {/* СКРОЛЛ 2: Блок Контактов */}
            {/* ДОБАВЛЕН scroll-mt-32 для отступа от фиксированного хедера */}
            <section id="contacts" className="px-4 md:px-[120px] scroll-mt-32">
                <FadeInUp>
                    <div className="bg-[#1A1A1A] text-[#F9F9F7] p-8 md:p-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                        {/* Текстовая часть контактов */}
                        <div>
                            <span className="font-sans text-[12px] uppercase tracking-widest text-gray-400 mb-4 block">
                                Связаться с нами
                            </span>
                            <h2 className="font-serif text-[32px] md:text-[48px] leading-[120%] mb-10">
                                Назначить встречу <br/>в нашем офисе
                            </h2>

                            <div className="flex flex-col gap-6 font-sans text-[15px] font-light">
                                <div>
                                    <p className="text-gray-500 uppercase text-xs tracking-widest mb-1">Телефон / Мессенджеры</p>
                                    <a href="tel:+80293302000" className="hover:text-gray-300 transition-colors block mb-2">8029 330-20-00</a>
                                    <div className="flex gap-4">
                                        <a href="https://t.me/PavelShyker" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-gray-300">Telegram</a>
                                        <a href="https://www.instagram.com/sofa_m.by" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-gray-300">Instagram</a>
                                    </div>
                                </div>

                                <div>
                                    <p className="text-gray-500 uppercase text-xs tracking-widest mb-1">Адрес</p>
                                    <p>Москва, ул. Архитектурная, 1</p>
                                </div>
                            </div>
                        </div>

                        {/* Кнопка связи */}
                        <div className="flex flex-col justify-center items-start md:items-end">
                            <p className="font-sans text-sm text-gray-400 font-light max-w-sm mb-8 md:text-right">
                                Оставьте заявку, и наш архитектор свяжется с вами для обсуждения индивидуального проекта.
                            </p>
                            <a
                                href="https://t.me/PavelShyker"
                                target="_blank"
                                rel="noreferrer"
                                className="font-sans font-medium uppercase tracking-widest text-[14px] bg-[#F9F9F7] text-[#1A1A1A] py-4 px-10 hover:bg-gray-200 transition-colors"
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