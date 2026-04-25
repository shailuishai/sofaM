import React from 'react';
import { motion } from 'framer-motion';

const FadeInUp = ({ children, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: delay, ease: [0.25, 0.25, 0, 1] }}
            // КРИТИЧНО ДЛЯ FPS НА МОБИЛКАХ:
            style={{ willChange: "opacity, transform" }}
        >
            {children}
        </motion.div>
    );
};

export default FadeInUp;