import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import React from "react";
import {DynamicModuleLoader, ReducerList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {profileReducer} from "entities/Profile";


const reducers: ReducerList = {
    profile: profileReducer
}

interface ProfilePageProps {
    className?: string
}

const ProfilePage: React.FC<ProfilePageProps> = React.memo(({className}) => {
        const {t} = useTranslation()
        return (
            <DynamicModuleLoader reducers={reducers}
                                 removeAfterUnmount
            >
                <div className={classNames("", {}, [className])}>
                    {t("Страница профиля")}
                </div>
            </DynamicModuleLoader>
        )
    }
)
export default ProfilePage