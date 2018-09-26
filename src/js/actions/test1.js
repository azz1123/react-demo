import {
  APP_TEST
} from "../constants/test1";

export const addTodo = () => {
  return {
    type: APP_TEST,
    data: "hello world"
  }
};
