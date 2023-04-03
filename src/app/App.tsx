import React from 'react';
import "../styles/index.scss"
import {useTheme} from "./providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {Link} from "react-router-dom";
import AppRouter from "app/providers/router/ui/AppRouter";


const App = () => {

    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Theme</button>
            <Link to={"/"}>Главная</Link>
            <Link to={"/about"}>О сайте</Link>
            <AppRouter/>
        </div>
    )
}

export default App;