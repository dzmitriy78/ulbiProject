import App from "./app/App";
import "./styles/index.scss"
import {BrowserRouter} from "react-router-dom";
import {createRoot, Root} from 'react-dom/client';
import {ThemeProvider} from "./app/providers/ThemeProvider";
import "shared/config/i18n/i18n"
import {ErrorBoundary} from "app/providers/ErrorBoundary";

const container: HTMLElement = document.getElementById('root');
const root: Root = createRoot(container!)
root.render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>
)