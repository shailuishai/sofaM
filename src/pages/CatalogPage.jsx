import React, { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import FadeInUp from '../components/ui/FadeInUp';
import SEO from "../components/SEO.jsx";
import ProductModal from '../components/ProductModal.jsx';
import { useSwipe } from '../hooks/useSwipe';

// Хардкод данные лучше выносить в отдельный файл (например src/data/products.js),
// но оставляю здесь для совместимости с твоей текущей архитектурой.
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img3_2 from '../assets/3_2.jpg';
import img4 from '../assets/4.jpg';
import img4_2 from '../assets/4_2.jpg';
import img4_3 from '../assets/4_3.jpg';
import img4_4 from '../assets/4_4.jpg';
import img4_5 from '../assets/4_5.jpg';
import img5 from '../assets/5.jpg';
import img5_2 from '../assets/5_2.jpg';

const productsData = [
    { id: 1, category: 'Диваны', name: 'Диван «Lumina»', shortDesc: 'Модульный диван из итальянского букле', fullDesc: 'Lumina воплощает архитектурный минимализм...', materials: 'Массив ясеня, пенополиуретан Memory Foam, ткань Boucle.', dimensions: 'Ширина: 280 см | Глубина: 105 см | Высота: 75 см', images: [img1] },
    { id: 2, category: 'Диваны', name: 'Диван «Horizon»', shortDesc: 'Прямой диван с глубокой посадкой', fullDesc: 'Идеальный баланс строгих линий и невероятной мягкости...', materials: 'Массив сосны, высокоэластичный ППУ, износостойкий велюр.', dimensions: 'Ширина: 240 см | Глубина: 110 см | Высота: 80 см', images: [img2] },
    { id: 3, category: 'Диваны', name: 'Диван «Eclipse»', shortDesc: 'Угловая модель для просторных гостиных', fullDesc: 'Создан для больших открытых пространств...', materials: 'Березовая фанера, независимый пружинный блок, шенилл.', dimensions: 'Ширина: 320 см | Глубина оттоманки: 160 см', images: [img3, img3_2] },
    { id: 4, category: 'Диваны', name: 'Диван «Aura»', shortDesc: 'Лаконичный диван на скрытом каркасе', fullDesc: 'Благодаря скрытым опорам создается иллюзия левитации...', materials: 'Массив дуба, натуральный пух/перо, премиальная рогожка.', dimensions: 'Ширина: 220 см | Глубина: 95 см | Высота: 85 см', images: [img4, img4_2, img4_3, img4_4, img4_5] },
    { id: 5, category: 'Диваны', name: 'Диван «Nova»', shortDesc: 'Минималистичный дизайн из шенилла', fullDesc: 'Nova — это чистота формы...', materials: 'Металлический каркас, пенополиуретан HR, ткань Шенилл.', dimensions: 'Ширина: 260 см | Глубина: 100 см | Высота: 78 см', images: [img5, img5_2] }
];

const categories = ['Все', 'Диваны', 'Кресла', 'Кровати']; // Расширил для примера

export default function CatalogPage() {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState(location.state?.category || 'Диваны');
    const [selectedProduct, setSelectedProduct] = useState(null);

    // Синхронизация таба при переходе из других страниц
    useEffect(() => {
        if (location.state?.category) {
            setActiveTab(location.state.category);
        }
    }, [location.state?.category]);

    // Использование вынесенного хука
    const swipeHandlers = useSwipe({
        onSwipeLeft: () => {
            const idx = categories.indexOf(activeTab);
            if (idx < categories.length - 1) setActiveTab(categories[idx + 1]);
        },
        onSwipeRight: () => {
            const idx = categories.indexOf(activeTab);
            if (idx > 0) setActiveTab(categories[idx - 1]);
        }
    });

    const filteredProducts = useMemo(() => {
        return activeTab === 'Все'
            ? productsData
            : productsData.filter(item => item.category === activeTab);
    }, [activeTab]);

    return (
        <section
            className="w-full min-h-screen bg-primary pt-32 pb-16 md:px-[120px] px-4 relative overflow-hidden"
            {...swipeHandlers}
        >
            <SEO title="Каталог мебели | Sofa M" description="Выбирайте эксклюзивные модели мебели Sofa M." />

            <FadeInUp>
                <div className="flex flex-col items-center mb-16 relative z-10">
                    <h1 className="font-serif text-[40px] md:text-[56px] text-graphite mb-8">Каталог</h1>

                    <div className="flex flex-wrap justify-center gap-6 md:gap-12 border-b border-gray-200 w-full md:w-auto px-4 md:px-12">
                        {categories.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`relative pb-4 font-sans text-sm md:text-base uppercase tracking-widest transition-colors ${
                                    activeTab === tab ? 'text-graphite font-medium' : 'text-gray-400 hover:text-gray-600'
                                }`}
                            >
                                {tab}
                                {activeTab === tab && (
                                    <motion.div
                                        layoutId="activeTabUnderline"
                                        className="absolute left-0 right-0 bottom-0 h-[2px] bg-graphite"
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </FadeInUp>

            {/* Сетка товаров без layout вычислений для 120 FPS в Webview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <AnimatePresence mode="sync">
                    {filteredProducts.map((product) => (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                            style={{ willChange: "opacity, transform" }}
                            key={product.id}
                            className="group flex flex-col h-full cursor-pointer relative z-10"
                            onClick={() => setSelectedProduct(product)}
                        >
                            {/* Строгий контейнер от Layout Shifts */}
                            <div className="relative w-full pt-[125%] overflow-hidden mb-6 bg-gray-200 block rounded-sm">
                                <img
                                    src={product.images[0]}
                                    alt={product.name}
                                    decoding="async"
                                    loading="lazy"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 will-change-transform"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 z-10" />
                            </div>
                            <h3 className="font-serif text-[20px] text-graphite mb-2">{product.name}</h3>
                            <p className="font-sans text-[14px] text-graphite/70 font-light mb-4">{product.shortDesc}</p>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Изолированная модалка (не триггерит ререндер всей страницы при листании фото) */}
            <AnimatePresence>
                {selectedProduct && (
                    <ProductModal
                        product={selectedProduct}
                        onClose={() => setSelectedProduct(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
}