import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // Если в URL нет якоря (hash), сбрасываем скролл в самый верх мгновенно
        if (!hash) {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'auto', // Используем 'auto', чтобы переход был мгновенным без дерганий
            });
        }
    }, [pathname, hash]);

    return null; // Компонент ничего не рендерит, он только управляет логикой
}