import React, {Suspense} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import AppRouter from "app/providers/router/ui/AppRouter";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";
import {useDispatch} from "react-redux";
import {userActions} from "entities/User";


const App = () => {

    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(userActions.initAuthData())
    }, [dispatch])

    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback={""}>
                <Navbar/>
                <div className={"content-page"}>
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    )
}

export default App;