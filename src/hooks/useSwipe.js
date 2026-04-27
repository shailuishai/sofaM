import { useState, useCallback } from 'react';

export const useSwipe = ({ onSwipeLeft, onSwipeRight, threshold = 50 }) => {
    const [touchStartX, setTouchStartX] = useState(null);

    const handleTouchStart = useCallback((e) => {
        setTouchStartX(e.targetTouches[0].clientX);
    }, []);

    const handleTouchEnd = useCallback((e) => {
        if (!touchStartX) return;
        const touchEndX = e.changedTouches[0].clientX;
        const distance = touchStartX - touchEndX;

        if (distance > threshold && onSwipeLeft) {
            onSwipeLeft();
        }
        if (distance < -threshold && onSwipeRight) {
            onSwipeRight();
        }

        setTouchStartX(null);
    }, [touchStartX, onSwipeLeft, onSwipeRight, threshold]);

    return { onTouchStart: handleTouchStart, onTouchEnd: handleTouchEnd };
};