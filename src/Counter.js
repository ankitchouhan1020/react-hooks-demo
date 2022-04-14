import React from 'react';
import { useCounter } from "./hooks/useCounter";
import { useTheme } from './hooks/useTheme';

export default function Counter() {
    const { count, incrementCount, decrementCount, resetCount } = useCounter();
    
    // get the current theme
    const [theme, setTheme] = useTheme();
    console.log(theme);
    
    
    const handleIncrement = () => {
        setTheme('light');
        incrementCount();
    }
    const handleDecrement = () => {
        setTheme('dark');
        decrementCount();
    }

    const countColor = count > 0 ? '#FFEA00' : count < 0 ? '#231f20' : '#fff';

    return (
        <>
            <div className={["counter", theme === 'dark' ? "dark" : "" ].join(' ')}>
                <button
                    className="increase arrow btn"
                    onClick={handleIncrement}
                >
                    <i className="fas fa-chevron-up"></i>
                </button>

                <span className="value" style={{ color: countColor }}>{count}</span>

                <button
                    className="decrease arrow btn"
                    onClick={handleDecrement}
                >
                    <i className="fas fa-chevron-down"></i>
                </button>
            </div>

            <button className="reset btn" onClick={resetCount}>Reset</button>
        </>
    );
}