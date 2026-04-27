import React from 'react';
import { motion } from 'framer-motion';

export default function FadeInUp({ children, delay = 0, className = '' }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay, ease: "easeOut" }}
            style={{
                // Эти 4 строчки — главный хак против мерцаний в Telegram и iOS Safari
                WebkitBackfaceVisibility: 'hidden',
                backfaceVisibility: 'hidden',
                WebkitTransform: 'translate3d(0,0,0)',
                transform: 'translateZ(0)',
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}