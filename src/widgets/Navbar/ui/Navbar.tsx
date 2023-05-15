import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss"
import React, {useCallback} from "react";
import {useTranslation} from "react-i18next";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {LoginModal} from "features/AuthByUsername";
import {useDispatch, useSelector} from "react-redux";
import {getUserAuthData, userActions} from "entities/User";

interface NavbarProps {
    className?: string
}

export const Navbar = React.memo(({className}: NavbarProps) => {

        const {t} = useTranslation()
        const dispatch = useDispatch()

        const [isAuthModal, setIsAuthModal] = React.useState(false)

        const authData = useSelector(getUserAuthData)

        const onCloseModal = useCallback(() => {
            setIsAuthModal(false)
        }, [])
        const onShowModal = useCallback(() => {
            setIsAuthModal(true)
        }, [])
        const onLogout = useCallback(() => {
            dispatch(userActions.logout())
        }, [dispatch])

        if (authData) {
            return <div className={classNames(cls.Navbar, {}, [className])}>
                <Button theme={ButtonTheme.CLEAR}
                        className={cls.links}
                        onClick={onLogout}
                >
                    {t("Выйти")}
                </Button>
            </div>
        }

        return (
            <div className={classNames(cls.Navbar, {}, [className])}>
                <Button theme={ButtonTheme.CLEAR}
                        className={cls.links}
                        onClick={onShowModal}
                >
                    {t("Войти")}
                </Button>

                {isAuthModal && <LoginModal isOpen={isAuthModal}
                                            onClose={onCloseModal}/>}
            </div>
        )
    }
)
