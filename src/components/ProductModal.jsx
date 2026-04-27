import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './ui/Button';

export default function ProductModal({ product, onClose }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Блокировка скролла при открытии
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    const nextImage = useCallback((e) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) =>
            prev === product.images.length - 1 ? 0 : prev + 1
        );
    }, [product.images.length]);

    const prevImage = useCallback((e) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) =>
            prev === 0 ? product.images.length - 1 : prev - 1
        );
    }, [product.images.length]);

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                style={{ willChange: "opacity" }}
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
                        onClose();
                    }
                }}
                style={{ willChange: "transform" }}
                className="fixed bottom-0 left-0 w-full h-[85vh] md:h-[75vh] bg-primary z-50 shadow-2xl flex flex-col md:flex-row overflow-hidden"
            >
                {/* Индикатор свайпа для мобилок */}
                <div className="md:hidden absolute top-3 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-white/80 z-50 mix-blend-difference cursor-grab active:cursor-grabbing" />

                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 md:top-6 md:right-6 z-50 bg-black/30 md:bg-transparent backdrop-blur-md md:backdrop-blur-none text-white md:text-graphite uppercase font-sans text-[10px] md:text-xs tracking-widest px-3 py-1.5 md:p-0 md:border-b md:border-graphite md:pb-1 hover:opacity-70 transition-opacity"
                >
                    Закрыть [X]
                </button>

                {/* Галерея изображений */}
                <div className="relative w-full h-[40vh] md:h-full md:w-1/2 shrink-0 bg-gray-200 group">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={currentImageIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            src={product.images[currentImageIndex]}
                            alt={`${product.name} - ракурс ${currentImageIndex + 1}`}
                            className="absolute inset-0 w-full h-full object-cover z-0"
                            style={{ willChange: "opacity" }}
                        />
                    </AnimatePresence>

                    {product.images.length > 1 && (
                        <>
                            <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/50 hover:bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-graphite z-20 will-change-transform">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 19l-7-7 7-7" /></svg>
                            </button>
                            <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/50 hover:bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-graphite z-20 will-change-transform">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 5l7 7-7 7" /></svg>
                            </button>
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                                {product.images.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${ currentImageIndex === idx ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/80' }`}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>

                {/* Информационная часть */}
                <div className="flex-1 w-full md:w-1/2 flex flex-col min-h-0 bg-primary relative">
                    <div className="flex-1 overflow-y-auto p-6 md:px-16 md:pt-16 md:pb-8 hide-scrollbar touch-pan-y">
                        <span className="font-sans text-[12px] uppercase tracking-widest text-graphite/50 mb-4 block">
                            Категория: {product.category}
                        </span>
                        <h2 className="font-serif text-[32px] md:text-[40px] lg:text-[48px] text-graphite leading-tight mb-6">
                            {product.name}
                        </h2>
                        <p className="font-sans text-[15px] md:text-[16px] leading-relaxed text-graphite/80 font-light mb-8">
                            {product.fullDesc}
                        </p>
                        <div className="border-t border-gray-200 pt-6 flex flex-col gap-5">
                            <div>
                                <h4 className="font-sans text-xs uppercase tracking-widest text-graphite font-medium mb-2">Материалы</h4>
                                <p className="font-sans text-[14px] text-graphite/70">{product.materials}</p>
                            </div>
                            <div>
                                <h4 className="font-sans text-xs uppercase tracking-widest text-graphite font-medium mb-2">Габариты</h4>
                                <p className="font-sans text-[14px] text-graphite/70">{product.dimensions}</p>
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
    );
}