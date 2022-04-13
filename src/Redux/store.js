import { tasksManegment } from "./reducer/reducer";
import { createStore } from "redux";

const store = createStore(tasksManegment);

export default store;
