import React, { useContext, useState } from 'react';

const ThemeContext = React.createContext('light');

export const ThemeProvider = ({ initialValue = 'light', children }) => {
    const [theme, setTheme] = useState(initialValue);
    return (
        <ThemeContext.Provider value={[theme, setTheme ]}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    return useContext(ThemeContext);
}