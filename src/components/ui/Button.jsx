import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({
                                   children,
                                   variant = 'primary',
                                   className = '',
                                   to,
                                   href,
                                   ...props
                               }) {
    // Базовые стили (добавил cursor-pointer на всякий случай)
    const baseStyles = "inline-flex items-center justify-center font-sans font-medium text-[14px] uppercase tracking-wide px-10 py-4 min-h-[48px] transition-all duration-300 cursor-pointer";

    // Стили для разных вариантов
    const variants = {
        primary: "bg-graphite border border-graphite text-white hover:bg-white hover:text-graphite",
        secondary: "bg-transparent border border-graphite text-graphite hover:bg-graphite hover:text-white",
        tertiary: "text-graphite border-b border-graphite pb-1 px-0 py-0 min-h-0 hover:text-gray-500 hover:border-gray-500"
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

    // Если передан пропс `to`, рендерим Link из react-router-dom
    if (to) {
        return (
            <Link to={to} className={combinedClassName} {...props}>
                {children}
            </Link>
        );
    }

    // Если передан `href`, рендерим обычную ссылку (например, для внешних сайтов)
    if (href) {
        return (
            <a href={href} className={combinedClassName} {...props}>
                {children}
            </a>
        );
    }

    // По умолчанию рендерим обычную кнопку
    return (
        <button className={combinedClassName} {...props}>
            {children}
        </button>
    );
}