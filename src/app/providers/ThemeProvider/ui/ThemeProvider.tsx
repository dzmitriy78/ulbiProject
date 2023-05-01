import React from 'react';
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "../lib/ThemeContext";

export type ThemeProviderProps = {
    children: React.ReactNode
    initialTheme?: Theme
}

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

const ThemeProvider: React.FC<ThemeProviderProps> = ({children, initialTheme}) => {
    const [theme, setTheme] = React.useState<Theme>(initialTheme || defaultTheme)

    const defaultProps = React.useMemo(() => ({
        theme,
        setTheme
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;