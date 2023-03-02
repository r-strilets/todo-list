import { TaskTableItem } from "../TaskTableItem/TaskTableItem";
import css from "./TaskTable.module.css";

export const TaskTable = () => {
  return (
    <>
      <table className={css.taskTable}>
        <thead>
          <tr>
            <th>ID</th>
            <th>title</th>
            <th>description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <TaskTableItem />
        </tbody>
      </table>
    </>
  );
};
