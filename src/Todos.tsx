import { TodoType } from "./type/todo";

export const Todo = (props: Omit<TodoType, "id">) => {
  const { title, userId, completed } = props;
  const compmark = completed ? "[完了]" : "[未完了]";
  return <p>{`${compmark}${title}(user:${userId})`}</p>;
};
