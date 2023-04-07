import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss"
import React from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LangSwitcher} from "widgets/LangSwitcher/LangSwitcher";
import {useTranslation} from "react-i18next";
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface SidebarProps {
    className?: string
}

export const Sidebar = ({className}: SidebarProps) => {

    const {t} = useTranslation()
    const [collapsed, setCollapsed] = React.useState(false)

    const onToggle = () => {
        setCollapsed(prevState => !prevState)
    }

    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <Button className={cls.sidebarBtn} theme={ThemeButton.CLEAR} onClick={onToggle}>
                {
                    collapsed
                        ? t("Показать")
                        : t("Скрыть")
                }
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher className={cls.lang}/>
            </div>
        </div>
    )
}
