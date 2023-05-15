import {classNames} from "shared/lib/classNames/classNames";
import cls from "./LoginForm.module.scss"
import {useTranslation} from "react-i18next";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {Input} from "shared/ui/Input/Input";
import {useSelector} from "react-redux";
import {loginActions, loginReducer} from "../../model/slice/loginSlice";
import React from "react";
import {loginByUsername} from "../../model/services/loginByUsername/loginByUsername";
import {Text, TextTheme} from "shared/ui/Text/Text";
import {getLoginUsername} from "../../model/selectors/getLoginUsername/getLoginUsername";
import {getLoginPassword} from "../../model/selectors/getLoginPassword/getLoginPassword";
import {getLoginIsLoading} from "../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import {getLoginError} from "../../model/selectors/getLoginError/getLoginError";
import {DynamicModuleLoader, ReducerList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";

export interface LoginFormProps {
    className?: string
    onSuccess: () => void
}

const initialReducers: ReducerList = {
    loginForm: loginReducer
}

const LoginForm = React.memo(({className, onSuccess}: LoginFormProps) => {
        const {t} = useTranslation()
        const dispatch = useAppDispatch()
        const username = useSelector(getLoginUsername)
        const password = useSelector(getLoginPassword)
        const isLoading = useSelector(getLoginIsLoading)
        const error = useSelector(getLoginError)

        const onChangeUsername = React.useCallback((value: string) => {
                dispatch(loginActions.setUsername(value))
            }, [dispatch]
        )
        const onChangePassword = React.useCallback((value: string) => {
                dispatch(loginActions.setPassword(value))
            }, [dispatch]
        )
        const onLoginClick = React.useCallback(async () => {
                const result = await dispatch(loginByUsername({username, password}))
                if (result.meta.requestStatus === "fulfilled") {
                    onSuccess()
                }
            }, [dispatch, username, password, onSuccess]
        )

        return (
            <DynamicModuleLoader reducers={initialReducers}
                                 removeAfterUnmount
            >
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
            </DynamicModuleLoader>
        )
    }
)
export default LoginForm