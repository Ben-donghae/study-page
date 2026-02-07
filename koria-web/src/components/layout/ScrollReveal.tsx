'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollRevealProps {
    children: ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
}

export default function ScrollReveal({
    children,
    width = "100%",
    delay = 0.2,
    direction = "up"
}: ScrollRevealProps) {

    const getDirectionOffset = () => {
        switch (direction) {
            case "up": return { y: 40, x: 0 };
            case "down": return { y: -40, x: 0 };
            case "left": return { y: 0, x: 40 };
            case "right": return { y: 0, x: -40 };
            default: return { y: 40, x: 0 };
        }
    };

    const offset = getDirectionOffset();

    return (
        <div style={{ position: "relative", width, overflow: "visible" }}>
            <motion.div
                initial={{
                    opacity: 0,
                    y: offset.y,
                    x: offset.x
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    x: 0
                }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                    duration: 0.8,
                    delay: delay,
                    ease: "easeOut"
                }}
            >
                {children}
            </motion.div>
        </div>
    );
}
