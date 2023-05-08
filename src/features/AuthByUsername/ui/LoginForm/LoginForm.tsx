import {classNames} from "shared/lib/classNames/classNames";
import cls from "./LoginForm.module.scss"
import {useTranslation} from "react-i18next";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {Input} from "shared/ui/Input/Input";
import {useDispatch, useSelector} from "react-redux";
import {loginActions} from "../../model/slice/loginSlice";
import React from "react";
import {getLoginState} from "../../model/selectors/getLoginState/getLoginState";
import {loginByUsername} from "features/AuthByUsername/model/services/loginByUsername/loginByUsername";
import {Dispatch} from "@reduxjs/toolkit";
import {Text, TextTheme} from "shared/ui/Text/Text";

interface LoginFormProps {
    className?: string
}

export const LoginForm = React.memo(({className}: LoginFormProps) => {
        const {t} = useTranslation()
        const dispatch = useDispatch<Dispatch<any>>()
        const {
            username,
            password,
            isLoading,
            error
        } = useSelector(getLoginState)

        const onChangeUsername = React.useCallback((value: string) => {
                dispatch(loginActions.setUsername(value))
            }, [dispatch]
        )
        const onChangePassword = React.useCallback((value: string) => {
                dispatch(loginActions.setPassword(value))
            }, [dispatch]
        )
        const onLoginClick = React.useCallback(() => {
                dispatch(loginByUsername({username, password}))
            }, [dispatch, username, password]
        )

        return (
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text title={t("Форма авторизации")}/>
                {error &&
                    <Text text={t("Вы ввели неверный логин или пароль")}
                          theme={TextTheme.ERROR}
                    />
                }
                <Input className={cls.input}
                       type={"text"}
                       placeholder={t("Введите имя")}
                       autoFocus
                       onChange={onChangeUsername}
                       value={username}
                />
                <Input className={cls.input}
                       type={"text"}
                       placeholder={t("Введите пароль")}
                       onChange={onChangePassword}
                       value={password}
                />
                <Button className={cls.btn}
                        theme={ButtonTheme.OUTLINE}
                        onClick={onLoginClick}
                        disabled={isLoading}>
                    {t("Войти")}
                </Button>
            </div>
        )
    }
)