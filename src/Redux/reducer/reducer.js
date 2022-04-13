import { actionListManegmant } from "../contant/action-type";
const tasks = [
  {
    id: 1,
    name: "i will do it",
    taskstate: "todo",
  },
  {
    id: 2,
    name: "i am doing",
    taskstate: "inporgress",
  },
  {
    id: 3,
    name: "i did it",
    taskstate: "done",
  },
];

export const tasksManegment = (state = tasks, { type, payload }) => {
  switch (type) {
    case actionListManegmant.ADD_TASK:
      return [...state, payload];
    case actionListManegmant.SET_TASKS:
      return [...payload];
    default:
      return state;
  }
};
