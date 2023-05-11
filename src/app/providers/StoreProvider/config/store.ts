import {configureStore, ReducersMapObject} from '@reduxjs/toolkit'
import type {StateSchema} from "./StateSchema";
import {counterReducer} from "entities/Counter";
import {userReducer} from "entities/User";
import {createReducerManager} from "./reducerManager";

export function createReduxStore(initialState: StateSchema) {

    const rootReducer: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
    }

    const reducerManager = createReducerManager(rootReducer)

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState

    })

    // @ts-ignore
    store.reducerManager = reducerManager

    return store
}

//export type RootState = ReturnType<typeof store.getState>

//export type AppDispatch = typeof store.dispatch

//export const useAppDispatch: () => AppDispatch = useDispatch
//export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector