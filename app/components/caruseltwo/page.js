"use client";
import { useMotionValue, animate, motion } from 'framer-motion';
import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import useMeasure from 'react-use-measure';

function cn(...classes) {
    return classes.filter(Boolean).join(' ');
}

export function CarouselTwo({
    children,
    gap = 16,
    duration = 60,
    direction = 'horizontal',
    reverse = true,
    className,
}) {
    const [ref, { width, height }] = useMeasure();
    const translation = useMotionValue(0);
    const animationControls = useRef(null);

    // Memoize size because it's derived from width/height and direction
    const size = useMemo(() => (direction === 'horizontal' ? width : height), [width, height, direction]);
    const contentSize = size + gap;
    const from = reverse ? -contentSize / 2 : 0;
    const to = reverse ? 0 : -contentSize / 2;

    // Memoize startLoop so it's stable and can be a dependency
    const startLoop = useCallback(() => {
        animationControls.current = animate(translation, [from, to], {
            ease: 'linear',
            duration,
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 0,
            onRepeat: () => {
                translation.set(from);
            },
        });
    }, [translation, from, to, duration]);

    const resumeAnimation = () => {
        const current = translation.get();
        const distance = Math.abs(current - to);
        const totalDistance = Math.abs(from - to);
        const remainingDuration = (distance / totalDistance) * duration;

        animationControls.current = animate(translation, [current, to], {
            ease: 'linear',
            duration: remainingDuration,
            onComplete: startLoop,
        });
    };

    const stopAnimation = () => {
        animationControls.current?.stop();
    };

    useEffect(() => {
        if (size === 0) return;
        startLoop();
        return () => stopAnimation();
    }, [size, startLoop]);

    return (
        <div
            className={cn('overflow-hidden max-w-screen', className)}
            onMouseEnter={stopAnimation}
            onMouseLeave={resumeAnimation}
        >
            <motion.div
                className="flex w-max h-fit"
                style={{
                    ...(direction === 'horizontal'
                        ? { x: translation }
                        : { y: translation }),
                    gap: `${gap}px`,
                    flexDirection: direction === 'horizontal' ? 'row' : 'column',
                }}
                ref={ref}
            >
                {children}
                {children}
            </motion.div>
        </div>
    );
}
