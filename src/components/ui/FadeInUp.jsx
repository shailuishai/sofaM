import React from 'react';
import { motion } from 'framer-motion';

export default function FadeInUp({ children, delay = 0, className = '' }) {
    return (
        <motion.div
            // Используем только смещение по Y (y: 20) и прозрачность. Никакого scale!
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay, ease: "easeOut" }}
            // Полностью удалены style={{ willChange... }} и хаки с translateZ
            className={className}
        >
            {children}
        </motion.div>
    );
}