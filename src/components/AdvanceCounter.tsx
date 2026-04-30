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
}