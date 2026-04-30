import { useState ,useEffect } from "react";


export function AdvancedCounter() {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);
    const [history, setHistory] = useState<number[]>([]);
}