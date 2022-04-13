import { actionListManegmant } from "../contant/action-type";

export const addTask = (task) => {
  return {
    type: actionListManegmant.ADD_TASK,
    payload: task,
  };
};

export const setTask = (data) => {
  return {
    type: actionListManegmant.SET_TASKS,
    payload: data,
  };
};
