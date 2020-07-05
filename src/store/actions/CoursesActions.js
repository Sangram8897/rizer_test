import { url } from 'config';
import { getData } from 'api';
import { errorHandler } from 'api/message';

const NAME = 'COURSES';

export const TAG = {
  LOADING: `${NAME}/LOADING`,
  GETALL: `${NAME}/GETALL`,
};

export const get_all_institude_courses = data => {
  return async (dispatch, getState) => {

    await dispatch({ type: TAG.LOADING });

    const headers = await {
      'Content-Type': 'application/json',
      'Authorization': getState().AuthReducer.token,
    };

    const result = await getData(`${url}/api/v1/admin/institutes/1/courses?page=1&&q[name_cont]`, headers);

    if (result.ok === true) {

      const res = await result.json();
      dispatch({ type: TAG.GETALL, payload: res.courses });

    } else {
      errorHandler(result);
      return false;
    }
  }
};
