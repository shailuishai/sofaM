import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Импортируем Link
import logo from '../../assets/logo.svg';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isMenuOpen]);

    // Прописали реальные пути (paths) для роутинга
    const navLinks = [
        { name: 'Главная', path: '/' },
        { name: 'Каталог', path: '/catalog' },
        { name: 'О нас', path: '/about' },
    ];

    return (
        <>
            <header className="fixed top-0 left-0 w-full bg-primary z-50 border-b border-gray-200">
                <div className="relative flex items-center justify-between px-4 md:px-[120px] h-20 md:h-24">

                    {/* Логотип: ведет на главную и закрывает меню на мобилке, если оно было открыто */}
                    <div className="flex-1 flex items-center">
                        <Link
                            to="/"
                            onClick={() => setIsMenuOpen(false)}
                            className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"
                        >
                            <img src={logo} alt="Logo" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
                        </Link>
                    </div>

                    {/* Десктопная навигация */}
                    <nav className="hidden md:flex items-center justify-center gap-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="group relative text-[14px] font-sans font-medium uppercase tracking-[0.05em] py-1 text-graphite"
                            >
                                {link.name}
                                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-graphite origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                            </Link>
                        ))}
                    </nav>

                    <div className="hidden md:flex flex-1 items-center justify-end">
                        {/* Кнопка Связаться (Якорь на страницу О нас) */}
                        <Link
                            to="/about#contacts"
                            onClick={(e) => {
                                // Если мы уже на странице /about, отменяем переход и просто скроллим
                                if (window.location.pathname === '/about') {
                                    e.preventDefault();
                                    document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                            className="group relative text-[14px] font-sans font-medium uppercase tracking-wide py-1 text-graphite"
                        >
                            Связаться
                            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-graphite origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                        </Link>
                    </div>

                    <button
                        className="md:hidden font-sans text-[14px] font-medium uppercase tracking-widest z-50 text-graphite"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? 'Закрыть' : 'Меню'}
                    </button>
                </div>
            </header>

            {/* Полноэкранное меню */}
            <div
                className={`fixed inset-0 bg-primary z-40 transition-transform duration-500 ease-in-out flex flex-col px-4 pt-28 pb-10 ${
                    isMenuOpen ? 'translate-y-0' : '-translate-y-full'
                } md:hidden`}
            >
                <nav className="flex flex-col gap-6 mt-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="text-4xl sm:text-5xl font-serif text-graphite hover:text-gray-500 transition-colors"
                            // Обязательно закрываем меню при клике по ссылке
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="mt-auto border-t border-gray-300 pt-8 flex flex-col gap-6">
                    {/* Кнопка Связаться с нами (мобилка) */}
                    <Link
                        to="/about#contacts"
                        onClick={(e) => {
                            setIsMenuOpen(false); // Всегда закрываем меню
                            if (window.location.pathname === '/about') {
                                e.preventDefault();
                                // Даем меню немного времени закрыться, прежде чем скроллить
                                setTimeout(() => {
                                    document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' });
                                }, 300);
                            }
                        }}
                        className="group relative text-xl font-sans uppercase tracking-widest text-graphite inline-block w-max"
                    >
                        Связаться с нами
                        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-graphite origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                    </Link>
                </div>
            </div>
        </>
    );
}