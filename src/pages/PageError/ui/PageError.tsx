import {classNames} from "shared/lib/classNames/classNames";
import cls from "./PageError.module.scss"
import {useTranslation} from "react-i18next";
import {Button} from "shared/ui/Button/Button";
import React from "react";

interface PageErrorProps {
    className?: string
}

export const PageError: React.FC<PageErrorProps> = React.memo(({className}) => {

        const {t} = useTranslation()

        const reloadPage = () => {
            location.reload()
        }

        return (
            <div className={classNames(cls.PageError, {}, [className])}>
                <p>
                    {t("Произошла непредвиденная ошибка")}
                </p>
                <Button onClick={reloadPage}>
                    {t("Обновить страницу")}
                </Button>
            </div>
        )
    }
)