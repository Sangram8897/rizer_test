import { url } from 'config';
import { postData } from 'api';
import AsyncStorage from '@react-native-community/async-storage';
import jwt_decode from 'jwt-decode';

const NAME = 'SIGN';

export const TAG = {
  LOADING: `${NAME}/LOADING`,
  IN: `${NAME}/IN`,
  UP: `${NAME}/UP`,
  OUT:`${NAME}/OUT`,
  FAIL: `${NAME}/FAIL`,
};

export const sign_in_rizer = (data, callback) => async dispatch => {
  
  await dispatch({ type: TAG.LOADING });

  const headers = await {
    'Content-Type': 'application/json',
  };

  const result = await postData(`${url}/api/login`, data, headers);

  if (result.ok === true) {
    const res = await result.json();
    const token = await result.headers.map.authorization;
    await saveDataToStorage(token);

    dispatch({ type: TAG.IN, token: token });
    callback();
  } else {
    dispatch({ type: TAG.FAIL });
    return false;
  }
};

const saveDataToStorage = (token) => {
  AsyncStorage.setItem('@userData', JSON.stringify({
    token: token,
  }));
}

export const sign_up_rizer = (data, callback) => async dispatch => {

  await dispatch({ type: TAG.LOADING });

  const headers = await {
    'Content-Type': 'application/json',
  };

  const result = await postData(`${url}/api/signup`, data, headers);

  if (result.ok === true) {
    await dispatch({ type: TAG.UP });
    callback();
  } 
  else {
    dispatch({ type: TAG.FAIL });
    return false;
  }
};

export const sign_out_rizer = callback => async dispatch => {
  clearStorage();
  await dispatch({ type: TAG.OUT });
  callback();
}

const clearStorage = async () => {
  try {
    await AsyncStorage.removeItem('@userData')
  } catch (e) {
    console.log('Failed to clear the async storage.')
  }
}