
'use client';

import { useThemeConfig } from '../theme-provider';
import { themes } from '@/lib/themes';
import { useEffect, useState } from 'react';

const Star = ({ style }: { style: React.CSSProperties }) => (
    <div className="absolute rounded-full bg-white/80" style={style} />
);

export function DynamicBackground() {
    const { theme } = useThemeConfig();
    const [stars, setStars] = useState<React.ReactElement[]>([]);
    const [primaryColor, setPrimaryColor] = useState('hsl(357 79% 53%)');

    useEffect(() => {
        const currentTheme = themes.find((t) => t.name === theme);
        if (currentTheme) {
            setPrimaryColor(`hsl(${currentTheme.primary})`);
        }
    }, [theme]);
    
    useEffect(() => {
        const generateStars = (numStars: number) => {
            const newStars = [];
            for (let i = 0; i < numStars; i++) {
                const size = Math.random() * 2 + 0.5;
                const style: React.CSSProperties = {
                    width: `${size}px`,
                    height: `${size}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animation: `twinkle ${Math.random() * 5 + 3}s linear infinite`,
                    animationDelay: `${Math.random() * 5}s`,
                };
                newStars.push(<Star key={i} style={style} />);
            }
            return newStars;
        };
        setStars(generateStars(150));
    }, []);

    return (
        <>
            <style>
                {`
                    @keyframes twinkle {
                        0%, 100% { opacity: 0.2; }
                        50% { opacity: 1; }
                    }
                    @keyframes move-gradient {
                        0% { background-position: 0% 50%; }
                        50% { background-position: 100% 50%; }
                        100% { background-position: 0% 50%; }
                    }
                `}
            </style>
            <div className="absolute inset-0 z-0 h-full w-full bg-background" />
            <div 
                className="absolute inset-0 z-0 opacity-40"
                style={{
                    background: `radial-gradient(circle at center, ${primaryColor} 0%, transparent 60%)`,
                    animation: 'move-gradient 20s ease infinite',
                    backgroundSize: '200% 200%'
                }}
            />
            <div className="absolute inset-0 z-0">{stars}</div>
             <div className="absolute inset-0 z-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </>
    );
}
