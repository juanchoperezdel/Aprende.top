
import { useState, useEffect } from 'react';

const COUNTDOWN_KEY = 'aprende_top_timer';
const INITIAL_TIME = { hours: 0, minutes: 27, seconds: 45 };

export const useCountdown = () => {
    // Initialize state function to read from localStorage only once on mount
    const [timeLeft, setTimeLeft] = useState(() => {
        try {
            const saved = localStorage.getItem(COUNTDOWN_KEY);
            if (saved) {
                const parsed = JSON.parse(saved);
                // If timer is finished (or weirdly negative), reset or keep at 0
                if (parsed.hours <= 0 && parsed.minutes <= 0 && parsed.seconds <= 0) {
                    return { hours: 0, minutes: 0, seconds: 0 };
                    // Or return INITIAL_TIME if you want it to loop
                }
                return parsed;
            }
        } catch (e) {
            console.error("Error reading timer from storage", e);
        }
        return INITIAL_TIME;
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev: typeof INITIAL_TIME) => {
                let newTime = { ...prev };

                if (prev.seconds > 0) {
                    newTime.seconds = prev.seconds - 1;
                } else if (prev.minutes > 0) {
                    newTime.minutes = prev.minutes - 1;
                    newTime.seconds = 59;
                } else if (prev.hours > 0) {
                    newTime.hours = prev.hours - 1;
                    newTime.minutes = 59;
                    newTime.seconds = 59;
                } else {
                    // Timer finished, clear interval
                    clearInterval(timer);
                    return prev;
                }

                // Save to storage every second
                localStorage.setItem(COUNTDOWN_KEY, JSON.stringify(newTime));
                return newTime;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const format = (n: number) => n.toString().padStart(2, '0');

    return {
        hours: format(timeLeft.hours),
        minutes: format(timeLeft.minutes),
        seconds: format(timeLeft.seconds),
        isFinished: timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0
    };
};
