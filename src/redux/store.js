import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import createSagaMiddlware from 'redux-saga'
import{fetchCollectionsStart} from "./shop/shop.sagas";
import { persistStore } from "redux-persist";

import rootReducer from "./root-reducer";

const sagaMiddleware = createSagaMiddlware()

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(fetchCollectionsStart)
export const persistor = persistStore(store);
