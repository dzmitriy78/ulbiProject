import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss"
import React, {useCallback} from "react";
import {Modal} from "shared/ui/Modal/Modal";
import {useTranslation} from "react-i18next";
import {Button, ButtonTheme} from "shared/ui/Button/Button";

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {

    const {t} = useTranslation()

    const [isAuthModal, setIsAuthModal] = React.useState(false)

    const onToggleModal = useCallback(() => {
        setIsAuthModal(prevState => !prevState)
    }, [])

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button theme={ButtonTheme.CLEAR}
                    className={cls.links}
                    onClick={onToggleModal}
            >
                {t("Войти")}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                SDFGHSFGJDTGKFHULFUILCGHMJ JDGYJDGHJD SR srtujh SRTURTUSR TSRT USDFTYYSTJSTDTYYYY
            </Modal>
        </div>
    )
}

