import { useState ,useEffect } from "react";
import "./AdvanceCounter.css";


export default function AdvancedCounter() {
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
        setStep(1);
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

    return (
        <div className="container">
           <div className="card" >
            <h4 className="title">Counter</h4>


            <h2 className="count">Count: {count}</h2>

        <div className="buttonGroup">
            <button className="button" onClick={minus}>Decrement</button>
            <button className="button" onClick={add}>Increment</button>
            <button className="resetbutton" onClick={reset}>Reset</button>
          </div>  

          <div className="inputGroup">
            <label>Step:</label>
            <input
                type="number"
                value={step}
                onChange={(e) => setStep(Number(e.target.value))}
                className="input"
            />
          </div>
                <p className="history">
                  History: {history.join(", ")}
                </p>

            </div>
        </div>
    )
}