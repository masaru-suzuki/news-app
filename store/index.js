import { createStore, combineReducers } from 'redux';
import userReducer from './reducers/user';
import { composeWithDevTools } from 'redux-devtools-extension';

// reduxの永続化
import {persistReducer, persistStore} from 'redux-persist';
import {AsyncStorage} from 'react-native';

const rootReducer = combineReducers({
  user: userReducer,
});

// reduxの永続化
const persistConfig = {
  key:'root',
  storage: AsyncStorage,
  // 必要なデータだけ保存
  // whitelist形式とblacklist形式を選ぶ
  // userだけ保存
  whiteList: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = createStore(rootReducer, composeWithDevTools());
// persistedReducerにさしかえ
const store = createStore(persistedReducer, composeWithDevTools());

export const persistor = persistStore(store);
console.log('persistor',  persistor);
export default store;
