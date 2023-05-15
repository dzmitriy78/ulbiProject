import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss"
import React, {useMemo} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LangSwitcher} from "widgets/LangSwitcher/LangSwitcher";
import {Button, ButtonSize, ButtonTheme} from "shared/ui/Button/Button";
import {SidebarItemsList} from "../../model/items";
import {SidebarItem} from "../SidebarItem/SidebarItem";

interface SidebarProps {
    className?: string
}

export const Sidebar = React.memo(({className}: SidebarProps) => {

        const [collapsed, setCollapsed] = React.useState(false)

        const onToggle = () => {
            setCollapsed(prevState => !prevState)
        }

        const itemList = useMemo(() => {
            return SidebarItemsList.map((item) => (
                <SidebarItem key={item.path}
                             item={item}
                             collapsed={collapsed}
                />
            ))
        }, [collapsed])

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
                    {itemList}
                </div>
                <div className={cls.switchers}>
                    <ThemeSwitcher/>
                    <LangSwitcher short={collapsed}
                                  className={cls.lang}/>
                </div>
            </div>
        )
    }
)
