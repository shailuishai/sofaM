import React from 'react';
import { motion } from 'framer-motion';

const FadeInUp = ({ children, delay = 0 }) => {
    return (
        <motion.div
            // Начальное состояние: невидимый и опущен на 40px вниз
            initial={{ opacity: 0, y: 40 }}

            // Конечное состояние: когда попадает в зону видимости экрана
            whileInView={{ opacity: 1, y: 0 }}

            // Настройки:
            // once: true - анимируем только один раз при скролле вниз
            // amount: 0.2 - анимация начнется, когда хотя бы 20% блока появится на экране
            viewport={{ once: true, amount: 0.2 }}

            // Параметры плавности: 0.8 секунд, легкая задержка и премиальный ease-эффект
            transition={{
                duration: 0.8,
                delay: delay,
                ease: [0.25, 0.25, 0, 1] // Плавное замедление к концу
            }}
        >
            {children}
        </motion.div>
    );
};

export default FadeInUp;