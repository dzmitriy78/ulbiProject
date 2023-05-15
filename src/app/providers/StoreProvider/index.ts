import {StoreProvider} from "./ui/StoreProvider";
import type {AppDispatch} from "./config/store";
import {createReduxStore} from "./config/store";
import type {ReduxStoreWithManager, StateSchema} from "./config/StateSchema";


export {
    StoreProvider,
    createReduxStore,
    StateSchema,
    ReduxStoreWithManager,
    AppDispatch
}