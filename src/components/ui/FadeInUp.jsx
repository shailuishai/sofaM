import React from 'react';
import { motion } from 'framer-motion';

const FadeInUp = ({ children, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
            style={{ willChange: "opacity, transform" }}
            // ИЗМЕНЕНО: Добавили opacity-0 по умолчанию, чтобы до загрузки JS элемент не мелькал
            className="opacity-0"
        >
            {children}
        </motion.div>
    );
};

export default FadeInUp;