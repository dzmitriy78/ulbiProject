import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {createRoot} from 'react-dom/client';
import ThemeProvider from "./styles/theme/ThemeProvider";

/*render(
    <div>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </div>,
    document.getElementById("root")
)*/

const container = document.getElementById('root');
const root = createRoot(container!)
root.render(
    <BrowserRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>
)