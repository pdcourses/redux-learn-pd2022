import rootSaga from '../sagas';
import makeStore from './configStore';
import rootReducer from '../reducers';

const store = makeStore();
store.runSaga(rootSaga)

export default store;
