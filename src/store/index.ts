import { combineReducers, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import thunk from "redux-thunk";
import * as users from "./users";
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  blacklist: ["socket"],
};

const reducers = combineReducers({
  users: users.reducer,
});
const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, applyMiddleware(thunk));
let persistor = persistStore(store);
const actions = {
  user: users.actions,
};

if (window) {
  window.store = store;
  window.actions = actions;
}

export { store, persistor, actions };
