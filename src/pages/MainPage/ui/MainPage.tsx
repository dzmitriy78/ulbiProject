import React from 'react';
import {useTranslation} from "react-i18next";

const MainPage: React.FC = React.memo(() => {
        const {t} = useTranslation()

        return (
            <div>
                {t("Главная страница")}
                {/*<BugButton/>*/}
            </div>
        )
    }
)
export default MainPage;