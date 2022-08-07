import {getUserRequest, getUserError, getUserSuccess} from '../actions/';
import {put} from 'redux-saga/effects'

export function *userDataSaga(action){
    yield put(getUserRequest())
    try{
        const data = yield fetch('https://randomuser.me/api').then(data => data.json())
        yield put(getUserSuccess(data.results))
    } catch(error){
        yield put(getUserError(error))
    }
}
