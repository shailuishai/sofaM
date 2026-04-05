import React from 'react';
import logo from '../../assets/logo.svg';
import FadeInUp from '../ui/FadeInUp'; // Проверь путь!

const Footer = () => {
    return (
        <footer className="bg-[#1A1A1A] text-[#F9F9F7] px-4 lg:px-[120px] py-16 lg:py-24 overflow-hidden">
            <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

                <FadeInUp delay={0.1}>
                    <div className="flex flex-col gap-6">
                        <a href="#" className="w-fit">
                            <img src={logo} alt="Logo" className="w-24 h-24 md:w-36 md:h-36 object-contain invert opacity-90 hover:opacity-100 transition-opacity duration-300" />
                        </a>
                        <p className="font-montserrat text-sm text-gray-400 leading-relaxed max-w-sm">
                            Создаем премиальную мебель по индивидуальным размерам. Архитектурная точность и бескомпромиссное качество в каждой детали.
                        </p>
                    </div>
                </FadeInUp>

                <FadeInUp delay={0.2}>
                    <div className="flex flex-col gap-6">
                        <h3 className="font-montserrat text-xs uppercase tracking-[0.15em] text-gray-500">Навигация</h3>
                        <nav className="flex flex-col gap-4">
                            {['Каталог', 'Производство', 'О нас', 'Контакты'].map((item) => (
                                <a key={item} href={`#${item.toLowerCase()}`} className="font-montserrat text-sm w-fit group relative">
                                    {item}
                                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#F9F9F7] transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            ))}
                        </nav>
                    </div>
                </FadeInUp>

                <FadeInUp delay={0.3}>
                    <div className="flex flex-col gap-6">
                        <h3 className="font-montserrat text-xs uppercase tracking-[0.15em] text-gray-500">Связь с нами</h3>
                        <div className="flex flex-col gap-4">
                            {[
                                { name: 'Telegram', url: 'https://t.me/PavelShyker' },
                                { name: 'Instagram', url: 'https://www.instagram.com/sofa_m.by' }
                            ].map((item) => (
                                <a key={item.name} href={item.url} target="_blank" rel="noopener noreferrer" className="font-montserrat text-sm w-fit group relative">
                                    {item.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#F9F9F7] transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            ))}
                        </div>
                    </div>
                </FadeInUp>

                <FadeInUp delay={0.4}>
                    <div className="flex flex-col gap-6">
                        <h3 className="font-montserrat text-xs uppercase tracking-[0.15em] text-gray-500">Контакты</h3>
                        <div className="flex flex-col gap-4 font-montserrat text-sm">
                            <a href="tel:+80293302000" className="hover:text-gray-300 transition-colors duration-300">8029 330-20-00</a>
                            <a href="mailto:hello@brand.com" className="hover:text-gray-300 transition-colors duration-300">hello@brand.com</a>
                            <p className="text-gray-400 mt-2">Москва, ул. Архитектурная, 1</p>
                        </div>
                    </div>
                </FadeInUp>

            </div>

            <FadeInUp delay={0.6}>
                <div className="max-w-[1920px] mx-auto mt-16 lg:mt-24 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 font-montserrat text-xs text-gray-500">
                    <p>Copyright © {new Date().getFullYear()}. Все права защищены.</p>
                    <a href="#" className="hover:text-[#F9F9F7] transition-colors duration-300">Политика конфиденциальности</a>
                </div>
            </FadeInUp>
        </footer>
    );
};

export default Footer;