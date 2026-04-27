import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import FadeInUp from '../ui/FadeInUp';

// Конфигурационные массивы (DRY)
const FOOTER_NAV = [
    { name: 'Каталог', path: '/catalog' },
    { name: 'О нас', path: '/about' },
];

const FOOTER_SOCIALS = [
    { name: 'Telegram', url: 'https://t.me/PavelShyker' },
    { name: 'Instagram', url: 'https://www.instagram.com/sofa_m.by' }
];

const FOOTER_CONTACTS = [
    { label: '8029 330-20-00', href: 'tel:+80293302000' },
    { label: 'hello@brand.com', href: 'mailto:hello@brand.com' }
];

export default function Footer() {
    return (
        <footer className="bg-graphite text-[#F9F9F7] px-4 lg:px-[120px] py-16 lg:py-24 overflow-hidden">
            <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

                <FadeInUp delay={0.1}>
                    <div className="flex flex-col gap-6">
                        <Link to="/" className="w-fit block">
                            <img src={logo} alt="Sofa M" width="144" height="144" className="w-24 h-24 md:w-36 md:h-36 object-contain invert opacity-90 hover:opacity-100 transition-opacity duration-300" />
                        </Link>
                        <p className="font-sans text-sm text-gray-400 leading-relaxed max-w-sm">
                            Создаем премиальную мебель по индивидуальным размерам. Архитектурная точность и бескомпромиссное качество в каждой детали.
                        </p>
                    </div>
                </FadeInUp>

                <FadeInUp delay={0.2}>
                    <div className="flex flex-col gap-6">
                        <h3 className="font-sans text-xs uppercase tracking-[0.15em] text-gray-500">Навигация</h3>
                        <nav className="flex flex-col gap-4">
                            {FOOTER_NAV.map(({ name, path }) => (
                                <Link key={name} to={path} className="font-sans text-sm w-fit group relative">
                                    {name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#F9F9F7] transition-all duration-300 group-hover:w-full" />
                                </Link>
                            ))}
                        </nav>
                    </div>
                </FadeInUp>

                <FadeInUp delay={0.3}>
                    <div className="flex flex-col gap-6">
                        <h3 className="font-sans text-xs uppercase tracking-[0.15em] text-gray-500">Связь с нами</h3>
                        <div className="flex flex-col gap-4">
                            {FOOTER_SOCIALS.map(({ name, url }) => (
                                <a key={name} href={url} target="_blank" rel="noopener noreferrer" className="font-sans text-sm w-fit group relative">
                                    {name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#F9F9F7] transition-all duration-300 group-hover:w-full" />
                                </a>
                            ))}
                        </div>
                    </div>
                </FadeInUp>

                <FadeInUp delay={0.4}>
                    <div className="flex flex-col gap-6">
                        <h3 className="font-sans text-xs uppercase tracking-[0.15em] text-gray-500">Контакты</h3>
                        <div className="flex flex-col gap-4 font-sans text-sm">
                            {FOOTER_CONTACTS.map(({ label, href }) => (
                                <a key={label} href={href} className="hover:text-gray-300 transition-colors duration-300 w-fit">
                                    {label}
                                </a>
                            ))}
                            <p className="text-gray-400 mt-2">Минск, ул. Архитектурная, 1</p>
                        </div>
                    </div>
                </FadeInUp>

            </div>

            <FadeInUp delay={0.6}>
                <div className="max-w-[1920px] mx-auto mt-16 lg:mt-24 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 font-sans text-xs text-gray-500">
                    <p>Copyright © {new Date().getFullYear()} Sofa M. Все права защищены.</p>
                    <Link to="/" className="hover:text-[#F9F9F7] transition-colors duration-300">Политика конфиденциальности</Link>
                </div>
            </FadeInUp>
        </footer>
    );
}