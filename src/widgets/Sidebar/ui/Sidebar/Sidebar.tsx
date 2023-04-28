import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss"
import React from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LangSwitcher} from "widgets/LangSwitcher/LangSwitcher";
import {useTranslation} from "react-i18next";
import {Button, ButtonSize, ButtonTheme} from "shared/ui/Button/Button";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {RoutePath} from "shared/config/routerConfig/routeConfig";
import MainIcon from "shared/assets/icons/main.svg";
import AboutIcon from "shared/assets/icons/about.svg";

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
        <div data-testid={"sidebar"}
             className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>

            <Button data-testid={"sidebar-toggle"}
                    className={cls.collapseBtn}
                    theme={ButtonTheme.BACKGROUND_INVERTED}
                    onClick={onToggle}
                    square
                    size={ButtonSize.L}>
                {
                    collapsed
                        ? ">"
                        : "<"
                }
            </Button>
            <div className={cls.items}>
                <AppLink theme={AppLinkTheme.SECONDARY}
                         to={RoutePath.main}
                         className={cls.item}
                >
                    <MainIcon className={cls.icon}/>
                    <span className={cls.link}> {t("Главная")}</span>
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY}
                         to={RoutePath.about}
                         className={cls.item}
                >
                    <AboutIcon className={cls.icon}/>
                    <span className={cls.link}>{t("О сайте")}</span>
                </AppLink>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher short={collapsed}
                              className={cls.lang}/>
            </div>
        </div>
    )
}
