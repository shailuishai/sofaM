import React from 'react';
import { motion } from 'framer-motion';

export default function FadeInUp({ children, delay = 0, className = '' }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            // ИЗМЕНЕНО: amount: 0.1 вместо отрицательных margin, так как margin ломает IntersectionObserver в Telegram
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay, ease: "easeOut" }}
            // ИЗМЕНЕНО: Полностью удален style={{ willChange... }} чтобы избежать мерцания в Safari/Telegram
            className={className}
        >
            {children}
        </motion.div>
    );
}