import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../components/ui/Button';
import FadeInUp from '../components/ui/FadeInUp';
import SEO from "../components/SEO.jsx";

// ИМПОРТ КАРТИНОК ИЗ ПАПКИ ASSETS
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.jpg';

// --- БАЗА ДАННЫХ (Заглушки) ---
const productsData = [
    {
        id: 1,
        category: 'Диваны',
        name: 'Диван «Lumina»',
        shortDesc: 'Модульный диван из итальянского букле',
        fullDesc: 'Lumina воплощает архитектурный минимализм. Глубокая посадка и модульная система позволяют адаптировать диван под любой интерьер, создавая зону абсолютного комфорта.',
        materials: 'Массив ясеня, пенополиуретан Memory Foam, ткань Boucle.',
        dimensions: 'Ширина: 280 см | Глубина: 105 см | Высота: 75 см',
        image: img1,
    },
    {
        id: 2,
        category: 'Диваны',
        name: 'Диван «Horizon»',
        shortDesc: 'Прямой диван с глубокой посадкой',
        fullDesc: 'Идеальный баланс строгих линий и невероятной мягкости. Horizon создан для долгих вечеров в кругу семьи. Цельная подушка сиденья обеспечивает равномерную поддержку.',
        materials: 'Массив сосны, высокоэластичный ППУ, износостойкий велюр.',
        dimensions: 'Ширина: 240 см | Глубина: 110 см | Высота: 80 см',
        image: img2,
    },
    {
        id: 3,
        category: 'Диваны',
        name: 'Диван «Eclipse»',
        shortDesc: 'Угловая модель для просторных гостиных',
        fullDesc: 'Создан для больших открытых пространств. Низкий профиль не перекрывает вид из панорамных окон, а широкая оттоманка позволяет отдыхать полулежа.',
        materials: 'Березовая фанера, независимый пружинный блок, шенилл.',
        dimensions: 'Ширина: 320 см | Глубина оттоманки: 160 см',
        image: img3,
    },
    {
        id: 4,
        category: 'Диваны',
        name: 'Диван «Aura»',
        shortDesc: 'Лаконичный диван на скрытом каркасе',
        fullDesc: 'Благодаря скрытым опорам создается иллюзия левитации. Тонкие подлокотники экономят пространство, оставляя максимум места для сидения.',
        materials: 'Массив дуба, натуральный пух/перо, премиальная рогожка.',
        dimensions: 'Ширина: 220 см | Глубина: 95 см | Высота: 85 см',
        image: img4,
    },
    {
        id: 5,
        category: 'Диваны',
        name: 'Диван «Nova»',
        shortDesc: 'Минималистичный дизайн из шенилла',
        fullDesc: 'Nova — это чистота формы. Отсутствие лишних деталей делает эту модель универсальной для современных интерьеров от лофта до сканди.',
        materials: 'Металлический каркас, пенополиуретан HR, ткань Шенилл.',
        dimensions: 'Ширина: 260 см | Глубина: 100 см | Высота: 78 см',
        image: img5,
    }
];

const categories = ['Диваны'];

export default function CatalogPage() {
    const location = useLocation();

    const [activeTab, setActiveTab] = useState(location.state?.category || 'Диваны');
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [touchStartX, setTouchStartX] = useState(null);

    useEffect(() => {
        if (selectedProduct) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [selectedProduct]);

    useEffect(() => {
        const incomingCategory = location.state?.category;
        if (incomingCategory && incomingCategory !== activeTab) {
            setActiveTab(incomingCategory);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.state?.category]);

    const handleTouchStart = (e) => setTouchStartX(e.targetTouches[0].clientX);
    const handleTouchEnd = (e) => {
        if (!touchStartX) return;
        const touchEndX = e.changedTouches[0].clientX;
        const distance = touchStartX - touchEndX;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        const currentIndex = categories.indexOf(activeTab);

        if (isLeftSwipe && currentIndex < categories.length - 1) {
            setActiveTab(categories[currentIndex + 1]);
        }
        if (isRightSwipe && currentIndex > 0) {
            setActiveTab(categories[currentIndex - 1]);
        }
        setTouchStartX(null);
    };

    const filteredProducts = activeTab === 'Все'
        ? productsData
        : productsData.filter(item => item.category === activeTab);

    return (
        <section
            className="w-full min-h-screen bg-primary pt-32 pb-16 md:px-[120px] px-4 relative overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            <SEO
                title="Каталог диванов | Sofa M"
                description="Выбирайте эксклюзивные модели мебели Sofa M. Итальянские ткани и массив дуба."
            />
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

            {/* СЕТКА ТОВАРОВ */}
            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <AnimatePresence mode="popLayout">
                    {filteredProducts.map((product) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            key={product.id}
                            className="group flex flex-col h-full cursor-pointer relative z-10"
                            onClick={() => setSelectedProduct(product)}
                        >
                            <div className="relative w-full aspect-[4/5] overflow-hidden mb-6 bg-gray-100">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                            </div>
                            <h3 className="font-serif text-[20px] text-graphite mb-2">{product.name}</h3>
                            <p className="font-sans text-[14px] text-graphite/70 font-light mb-4">{product.shortDesc}</p>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* МОДАЛЬНОЕ ОКНО ТОВАРА */}
            <AnimatePresence>
                {selectedProduct && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProduct(null)}
                            className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm cursor-pointer"
                        />

                        <motion.div
                            initial={{ y: '100%' }}
                            animate={{ y: 0 }}
                            exit={{ y: '100%' }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            drag="y"
                            dragConstraints={{ top: 0, bottom: 0 }}
                            dragElastic={{ top: 0, bottom: 0.5 }}
                            onDragEnd={(e, info) => {
                                if (info.offset.y > 100 || info.velocity.y > 500) {
                                    setSelectedProduct(null);
                                }
                            }}
                            className="fixed bottom-0 left-0 w-full h-[85vh] md:h-[75vh] bg-primary z-50 shadow-2xl flex flex-col md:flex-row overflow-hidden"
                        >
                            <div className="md:hidden absolute top-3 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-white/80 z-50 mix-blend-difference cursor-grab active:cursor-grabbing"></div>

                            <button
                                onClick={() => setSelectedProduct(null)}
                                className="absolute top-4 right-4 md:top-6 md:right-6 z-50 bg-black/30 md:bg-transparent backdrop-blur-md md:backdrop-blur-none text-white md:text-graphite uppercase font-sans text-[10px] md:text-xs tracking-widest px-3 py-1.5 md:p-0 md:border-b md:border-graphite md:pb-1 hover:opacity-70 transition-opacity"
                            >
                                Закрыть [X]
                            </button>

                            <div className="relative w-full h-[40vh] md:h-full md:w-1/2 shrink-0 bg-gray-200">
                                <img
                                    src={selectedProduct.image}
                                    alt={selectedProduct.name}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/40 to-transparent pointer-events-none md:hidden z-10"></div>
                            </div>

                            <div className="flex-1 w-full md:w-1/2 flex flex-col min-h-0 bg-primary relative">
                                <div className="flex-1 overflow-y-auto p-6 md:px-16 md:pt-16 md:pb-8">
                                    <span className="font-sans text-[12px] uppercase tracking-widest text-graphite/50 mb-4 block break-words">
                                        Категория: {selectedProduct.category}
                                    </span>

                                    <h2 className="font-serif text-[32px] md:text-[40px] lg:text-[48px] text-graphite leading-tight mb-6 break-words">
                                        {selectedProduct.name}
                                    </h2>

                                    <p className="font-sans text-[15px] md:text-[16px] leading-relaxed text-graphite/80 font-light mb-8 break-words">
                                        {selectedProduct.fullDesc}
                                    </p>

                                    <div className="border-t border-gray-200 pt-6 flex flex-col gap-5">
                                        <div>
                                            <h4 className="font-sans text-xs uppercase tracking-widest text-graphite font-medium mb-2">Материалы</h4>
                                            <p className="font-sans text-[14px] text-graphite/70 leading-relaxed break-words">
                                                {selectedProduct.materials}
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="font-sans text-xs uppercase tracking-widest text-graphite font-medium mb-2">Габариты</h4>
                                            <p className="font-sans text-[14px] text-graphite/70 leading-relaxed break-words">
                                                {selectedProduct.dimensions}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="shrink-0 border-t border-gray-200 bg-primary p-6 md:px-16 md:py-8 z-10">
                                    <Button variant="primary" className="w-full">
                                        Рассчитать стоимость
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
}