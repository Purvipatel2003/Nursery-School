import {takeEvery, put, call} from 'redux-saga/effects';
import {SET_USER_LIST, USER_LIST} from './Constants';

function* userList() {
  const url = 'https://dummyjson.com/users';
  console.log('Saga triggered to fetch user list');

  try {
    const response = yield call(fetch, url);
    const data = yield response.json();

    // If the data contains 'users', dispatch the action to update Redux store
    if (data && data.users) {
      yield put({type: SET_USER_LIST, payload: data.users});
    } else {
      console.error('No users found');
    }
  } catch (error) {
    console.error('Error fetching users:', error);
  }
}
function* SagaData() {
  yield takeEvery(USER_LIST, userList);
}

export default SagaData;
