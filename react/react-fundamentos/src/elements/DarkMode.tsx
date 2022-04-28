import { useState } from 'react';
import { light, dark } from './themes';
import { ThemeProvider } from 'styled-components';

export const DarkMode = () => {
    const [theme, setTheme] = useState('light');
    const themeChange = () => theme === 'light' ? setTheme('dark') : setTheme('light')
    return (
        <ThemeProvider theme={theme === 'light' ? light : dark}>
            <h1>Hey</h1>
        </ThemeProvider>
    )
}