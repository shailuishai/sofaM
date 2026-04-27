import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import FadeInUp from '../components/ui/FadeInUp';
import SEO from "../components/SEO.jsx";

const CONTACT_LINKS = [
    { label: 'Телефон / Мессенджеры', value: '+375 29 330-20-00', href: 'tel:+375293302000' },
    { label: 'Telegram', value: 'Написать', href: 'https://t.me/PavelShyker' },
    { label: 'Instagram', value: 'Смотреть профиль', href: 'https://www.instagram.com/sofa_m.by' }
];

export default function AboutPage() {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            requestAnimationFrame(() => {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            });
        }
    }, [hash]);

    return (
        <div className="w-full min-h-screen bg-primary pt-32 pb-16">
            <SEO title="О производстве | Sofa M" />

            <section className="px-4 md:px-[120px] mb-16 md:mb-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-start">

                    <div className="lg:col-span-5 w-full">
                        {/* Защита от растяжения текста */}
                        <FadeInUp className="w-full">
                            <span className="font-sans text-[12px] uppercase tracking-widest text-graphite/60 mb-6 block">
                                Манифест
                            </span>
                            <h1 className="font-serif text-[40px] md:text-[64px] leading-[110%] text-graphite">
                                Искусство <br/>в каждой детали
                            </h1>
                        </FadeInUp>
                    </div>

                    <div className="lg:col-span-6 lg:col-start-7 lg:mt-12 w-full">
                        <FadeInUp delay={0.2} className="w-full">
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

                <FadeInUp
                    delay={0.4}
                    className="relative mt-12 md:mt-20 w-full h-[300px] md:h-[50vh] bg-gray-200 rounded-sm overflow-hidden"
                >
                    <img
                        src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2000&auto=format&fit=crop"
                        alt="Интерьер и мебель производства Sofa M"
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 w-full h-full object-cover grayscale-[10%]"
                    />
                </FadeInUp>
            </section>

            <section id="contacts" className="px-4 md:px-[120px] scroll-mt-32">
                <FadeInUp className="w-full">
                    <div className="bg-graphite text-[#F9F9F7] p-8 md:p-24 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center rounded-sm">

                        <div className="w-full">
                            <span className="font-sans text-[12px] uppercase tracking-widest text-gray-400 mb-4 block">
                                Контакты
                            </span>
                            <h2 className="font-serif text-[32px] md:text-[48px] leading-[120%] mb-10">
                                Обсудить проект
                            </h2>

                            <div className="flex flex-col gap-6 font-sans text-[15px] font-light">
                                <div className="flex flex-col gap-3">
                                    {CONTACT_LINKS.map((link) => (
                                        <div key={link.label} className="flex gap-4 items-center">
                                            <span className="text-gray-500 uppercase text-xs tracking-widest w-24">
                                                {link.label.split(' ')[0]}
                                            </span>
                                            <a href={link.href} target={link.href.startsWith('http') ? '_blank' : '_self'} rel="noreferrer" className="hover:text-gray-300 transition-colors underline underline-offset-4">
                                                {link.value}
                                            </a>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-4 pt-4 border-t border-gray-800">
                                    <p className="text-gray-500 uppercase text-xs tracking-widest mb-2">Адрес шоурума</p>
                                    <p>Минск, ул. Архитектурная, 1</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center items-start md:items-end w-full">
                            <p className="font-sans text-sm text-gray-400 font-light max-w-sm mb-8 md:text-right leading-relaxed">
                                Напишите нам, и мы с удовольствием ответим на все вопросы, поможем подобрать идеальную конфигурацию и рассчитаем стоимость по вашим размерам.
                            </p>
                            <a
                                href="https://t.me/PavelShyker"
                                target="_blank"
                                rel="noreferrer"
                                className="w-full sm:w-auto text-center font-sans font-medium uppercase tracking-widest text-[14px] bg-[#F9F9F7] text-graphite py-4 px-10 hover:bg-gray-200 transition-colors"
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