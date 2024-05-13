import {api} from '@/services/api';
import {combineReducers, configureStore} from '@reduxjs/toolkit';

const reducers = combineReducers({
  [api.reducerPath]: api.reducer,
});

const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware => {
    const middlewares = getDefaultMiddleware().concat(api.middleware);
    return middlewares;
  },
});

export {store};
