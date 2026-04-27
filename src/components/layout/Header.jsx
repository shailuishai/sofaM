import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.svg';

const NAV_LINKS = [
    { name: 'Главная', path: '/' },
    { name: 'Каталог', path: '/catalog' },
    { name: 'О нас', path: '/about' },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    // Блокировка скролла при открытом меню
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
        return () => { document.body.style.overflow = 'unset'; };
    }, [isMenuOpen]);

    // Универсальный обработчик клика по якорю "Связаться"
    const handleContactClick = useCallback((e) => {
        setIsMenuOpen(false);
        if (location.pathname === '/about') {
            e.preventDefault();
            setTimeout(() => {
                document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    }, [location.pathname]);

    return (
        <>
            <header className="fixed top-0 left-0 w-full bg-primary z-50 border-b border-gray-200">
                <div className="relative flex items-center justify-between px-4 md:px-[120px] h-20 md:h-24">

                    {/* Логотип */}
                    <div className="flex-1 flex items-center">
                        <Link
                            to="/"
                            onClick={() => setIsMenuOpen(false)}
                            className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"
                        >
                            <img src={logo} alt="Sofa M Logo" width="80" height="80" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
                        </Link>
                    </div>

                    {/* Десктопная навигация */}
                    <nav className="hidden md:flex items-center justify-center gap-10">
                        {NAV_LINKS.map(({ name, path }) => (
                            <Link
                                key={name}
                                to={path}
                                className="group relative text-[14px] font-sans font-medium uppercase tracking-[0.05em] py-1 text-graphite"
                            >
                                {name}
                                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-graphite origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                            </Link>
                        ))}
                    </nav>

                    <div className="hidden md:flex flex-1 items-center justify-end">
                        <Link
                            to="/about#contacts"
                            onClick={handleContactClick}
                            className="group relative text-[14px] font-sans font-medium uppercase tracking-wide py-1 text-graphite"
                        >
                            Связаться
                            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-graphite origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                        </Link>
                    </div>

                    {/* Бургер-кнопка */}
                    <button
                        className="md:hidden font-sans text-[14px] font-medium uppercase tracking-widest z-50 text-graphite w-16 text-right"
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                        aria-label="Переключить меню"
                    >
                        {isMenuOpen ? 'Закрыть' : 'Меню'}
                    </button>
                </div>
            </header>

            {/* Мобильное меню с аппаратным ускорением (willChange) */}
            <div
                style={{ willChange: "transform" }}
                className={`fixed inset-0 bg-primary z-40 transition-transform duration-500 ease-in-out flex flex-col px-4 pt-28 pb-10 md:hidden ${
                    isMenuOpen ? 'translate-y-0' : '-translate-y-full'
                }`}
            >
                <nav className="flex flex-col gap-6 mt-10">
                    {NAV_LINKS.map(({ name, path }) => (
                        <Link
                            key={name}
                            to={path}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-4xl sm:text-5xl font-serif text-graphite hover:text-gray-500 transition-colors"
                        >
                            {name}
                        </Link>
                    ))}
                </nav>

                <div className="mt-auto border-t border-gray-300 pt-8 flex flex-col gap-6">
                    <Link
                        to="/about#contacts"
                        onClick={handleContactClick}
                        className="group relative text-xl font-sans uppercase tracking-widest text-graphite inline-block w-max"
                    >
                        Связаться с нами
                        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-graphite origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                    </Link>
                </div>
            </div>
        </>
    );
}