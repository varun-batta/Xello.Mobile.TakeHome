import { TodoTypes } from "./TodoTypes";

export type Todo = {
  id: number;
  title: string;
  complete: boolean;
  type: string;
  imgFileName: string;
};
