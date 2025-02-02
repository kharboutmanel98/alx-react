import { Map } from 'immutable';
import {
  SELECT_COURSE,
  UNSELECT_COURSE,
  FETCH_COURSE_SUCCESS,
} from '../actions/courseActionTypes';
import coursesNormalizer from '../schema/courses';

export const initialCourseState = [];

const courseReducer = (state = Map(initialCourseState), action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      const normalizedData = coursesNormalizer(action.data);
      Object.keys(normalizedData).forEach((key) => {
        normalizedData[key].isSelected = false;
      });
      return state.merge(normalizedData);
    case SELECT_COURSE:
      return state.setIn([String(action.index), 'isSelected'], true);
    case UNSELECT_COURSE:
      return state.setIn([String(action.index), 'isSelected'], false);
    default:
      break;
  }
  return state;
};

export default courseReducer;