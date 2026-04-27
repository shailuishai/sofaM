import React from 'react';
import { motion } from 'framer-motion';

export default function FadeInUp({ children, delay = 0, className = '' }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            // margin: "-50px" заставляет анимацию начинаться чуть раньше, чем пользователь доскроллит
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            // Кастомный easing для "дорогого" ощущения (как у Apple)
            transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
            style={{ willChange: "opacity, transform" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}