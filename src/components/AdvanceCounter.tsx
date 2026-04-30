import { useState ,useEffect } from "react";


export function AdvancedCounter() {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);
    const [history, setHistory] = useState<number[]>([]);

    const add = () => {
        setCount(prev => prev + step)
    }

    const minus = () => {
        setCount(prev => prev - step )
    }

    const reset = () => {
        setCount(0);
        setHistory([]);
    }

    useEffect(() => {
        setHistory(prev => [...prev, count])
    }, [count]);

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "ArrowUp") setCount(prev => prev + step);
            if (e.key === "ArrowDown") setCount(prev => prev - step);
        };

        document.addEventListener("keydown", handleKey);

        return () => {
            document.removeEventListener("keydown", handleKey);
        };
    }, [step])
}