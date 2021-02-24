import {applyMiddleware, createStore} from "redux";
import allReducer from "./reducers/reducerindex";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, allReducer)


export default () => {
    let store = createStore(persistedReducer,
        composeWithDevTools(applyMiddleware(thunk))
    )
    let persistor = persistStore(store)
    return { store, persistor }
}