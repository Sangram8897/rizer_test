import { TAG } from '../actions/CoursesActions';

const getDefaultState = () => ({
    courses: null,
    loading: false,
  });

export default function (state = getDefaultState(), action) {
    if (typeof state === 'undefined') {
        return getDefaultState();
    }
    switch (action.type) {

        case TAG.LOADING:
            return {
                loading: true
            };

        case TAG.GETALL:
            return {
                ...state,
                courses: action.payload,
                loading: false
            };

        default:
            return state;
    }
}