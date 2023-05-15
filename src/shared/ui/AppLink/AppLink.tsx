import {classNames} from "shared/lib/classNames/classNames";
import cls from "./AppLink.module.scss"
import {Link, LinkProps} from "react-router-dom";
import React from "react";

export enum AppLinkTheme {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    RED = "red"
}

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: AppLinkTheme
    children?: React.ReactNode
}

export const AppLink: React.FC<AppLinkProps> = React.memo((props) => {
        const {
            className,
            children,
            theme = AppLinkTheme.PRIMARY,
            to,
            ...otherProps
        } = props
        return (
            <Link to={to}
                  className={classNames(cls.AppLink, {}, [className, cls[theme]])}
                  {...otherProps}
            >
                {children}
            </Link>
        )
    }
)