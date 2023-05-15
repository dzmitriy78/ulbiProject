import React from "react";
import {RoutePath} from "shared/config/routerConfig/routeConfig";
import MainIcon from "shared/assets/icons/main.svg";
import AboutIcon from "shared/assets/icons/about.svg";
import ProfileIcon from "shared/assets/icons/profile.svg"

export interface SidebarItemType {
    path: string
    text: string
    Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        Icon: MainIcon,
        text: "Главная"
    },
    {
        path: RoutePath.profile,
        Icon: ProfileIcon,
        text: "Профиль"
    },
    {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: "О сайте"
    },


]