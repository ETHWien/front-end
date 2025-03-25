'use client';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

const BreathingIcon = ({ isInhaling }: { isInhaling: boolean }) => (
    <div className={`w-12 h-12 transition-all duration-1800 ${isInhaling ? 'scale-125' : 'scale-100'}`}>
        <Image
            src="/heart.gif"
            alt="Breathing heart"
            width={48}
            height={48}
            className="w-full h-full"
        />
    </div>
);

export default function BreathingEffect() {
    const [isInhaling, setIsInhaling] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false); // Changed to false by default
    const [colorStep, setColorStep] = useState(0);
    const inhaleAudioRef = useRef<HTMLAudioElement | null>(null);
    const exhaleAudioRef = useRef<HTMLAudioElement | null>(null);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    // Color rotation steps (in degrees)
    const colorSteps = [0, 60, 120, 180, 240, 300];

    useEffect(() => {
        // Preload audio files
        inhaleAudioRef.current = new Audio('/sounds/inhale.mp3');
        exhaleAudioRef.current = new Audio('/sounds/exhale.mp3');

        // Set volume
        if (inhaleAudioRef.current) inhaleAudioRef.current.volume = 0.3;
        if (exhaleAudioRef.current) exhaleAudioRef.current.volume = 0.3;

        return () => {
            stopBreathing();
        };
    }, []); // Only run on mount

    const breathCycle = async () => {
        if (!inhaleAudioRef.current || !exhaleAudioRef.current) return;

        // Inhale
        setIsInhaling(true);
        inhaleAudioRef.current.currentTime = 0;
        await inhaleAudioRef.current.play();

        // Cycle to next color
        setColorStep((prev) => (prev + 1) % colorSteps.length);

        // Wait for inhale to complete
        setTimeout(async () => {
            if (!exhaleAudioRef.current) return;

            // Exhale
            setIsInhaling(false);
            exhaleAudioRef.current.currentTime = 0;
            await exhaleAudioRef.current.play();
        }, 1800);
    };

    const startBreathing = () => {
        breathCycle();
        intervalRef.current = setInterval(breathCycle, 3500);
    };

    const stopBreathing = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }

        if (inhaleAudioRef.current) {
            inhaleAudioRef.current.pause();
            inhaleAudioRef.current.currentTime = 0;
        }

        if (exhaleAudioRef.current) {
            exhaleAudioRef.current.pause();
            exhaleAudioRef.current.currentTime = 0;
        }

        setIsInhaling(false); // Reset inhaling state when stopped
    };

    const toggleBreathing = () => {
        if (isPlaying) {
            stopBreathing();
        } else {
            startBreathing();
        }
        setIsPlaying(!isPlaying);
    };

    // Get color for current step
    const getCurrentColor = () => {
        const colors = ['#0F0', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96F', '#FF69B4'];
        return colors[colorStep];
    };

    return (
        <>
            {/* Only show overlay when playing */}
            {isPlaying && (
                <div
                    className={`fixed inset-0 w-full h-full z-50 pointer-events-none transition-all duration-1800`}
                    style={{
                        backdropFilter: `
                            hue-rotate(${colorSteps[colorStep]}deg)
                            brightness(${isInhaling ? '0.75' : '1'})
                            contrast(${isInhaling ? '1.1' : '1'})
                            saturate(${isInhaling ? '1.1' : '1'})
                        `
                    }}
                />
            )}

            {/* Control button with heart gif */}
            <button
                onClick={toggleBreathing}
                className="fixed bottom-4 right-4 z-[60] p-4 rounded-full transition-all duration-1800 hover:bg-white/5"
                style={{
                    backgroundColor: `${getCurrentColor()}10`,
                    color: getCurrentColor(),
                    boxShadow: isPlaying ? `0 0 20px ${getCurrentColor()}40` : 'none'
                }}
            >
                <BreathingIcon isInhaling={isInhaling} />
                <span className="sr-only">{isPlaying ? 'Stop Breathing' : 'Start Breathing'}</span>
            </button>
        </>
    );
} 