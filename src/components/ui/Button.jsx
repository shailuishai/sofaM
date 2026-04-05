export default function Button({
                                   children,
                                   variant = 'primary',
                                   className = '',
                                   ...props
                               }) {
    // Базовые стили для всех кнопок (шрифт, отступы, анимация)
    const baseStyles = "inline-flex items-center justify-center font-sans font-medium text-[14px] uppercase tracking-wide px-10 py-4 min-h-[48px] transition-all duration-300";

    // Стили для разных вариантов кнопок (из ТЗ)
    const variants = {
        primary: "bg-graphite border border-graphite text-white hover:bg-white hover:text-graphite",
        secondary: "bg-transparent border border-graphite text-graphite hover:bg-graphite hover:text-white",
        tertiary: "text-graphite border-b border-graphite pb-1 px-0 py-0 min-h-0 hover:text-gray-500 hover:border-gray-500"
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}