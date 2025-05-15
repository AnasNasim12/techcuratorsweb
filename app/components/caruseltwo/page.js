'use client';

import { useMotionValue, animate, motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
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

    const size = direction === 'horizontal' ? width : height;
    const contentSize = size + gap;
    const from = reverse ? -contentSize / 2 : 0;
    const to = reverse ? 0 : -contentSize / 2;

    const startLoop = () => {
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
    };

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
    }, [width, height, gap, duration, direction, reverse]);

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
