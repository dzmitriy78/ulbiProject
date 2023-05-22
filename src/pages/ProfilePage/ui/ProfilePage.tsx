import {classNames} from "shared/lib/classNames/classNames";
import React from "react";
import {DynamicModuleLoader, ReducerList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {fetchProfileData, ProfileCard, profileReducer} from "entities/Profile";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";


const reducers: ReducerList = {
    profile: profileReducer
}

interface ProfilePageProps {
    className?: string
}

const ProfilePage: React.FC<ProfilePageProps> = React.memo(({className}) => {
        const dispatch = useAppDispatch()
        React.useEffect(() => {
            dispatch(fetchProfileData())
        }, [dispatch])

        return (
            <DynamicModuleLoader reducers={reducers}
                                 removeAfterUnmount
            >
                <div className={classNames("", {}, [className])}>
                    <ProfileCard/>
                </div>
            </DynamicModuleLoader>
        )
    }
)
export default ProfilePage