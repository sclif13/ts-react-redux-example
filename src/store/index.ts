import { createStore, applyMiddleware } from "redux"
import { createLogger } from "redux-logger"
import { composeWithDevTools } from "redux-devtools-extension"
import rootReducer from "../reducers"

export type AppState = ReturnType<typeof rootReducer>

export default function configureStore() {
    const middlewares = [createLogger({ collapsed: true })]
    const middleWareEnhancer = applyMiddleware(...middlewares)
    const store = createStore(rootReducer, composeWithDevTools(middleWareEnhancer))
    return store
}
