import { useState } from "react";
import { useSelector } from "react-redux";
import { TaskModal } from "./../TaskModal/TaskModal";
import { getTasks } from "../../redux/selectors";
import css from "./TaskTableItem.module.css";

export const TaskTableItem = () => {
  const [showModal, setShowModal] = useState(false);
  const [taskId, setTaskId] = useState(null);
  const tasks = useSelector(getTasks);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = (id) => {
    setTaskId(id);
    setShowModal(true);
  };
  return (
    <>
      {tasks?.map(({ id, title, description, status }) => {
        return (
          <tr
            key={id}
            className={css.tableRow}
            onClick={() => handleOpenModal(id)}
          >
            <td>{id}</td>
            <td>{title}</td>
            <td>{description}</td>
            <td>
              <input type="checkbox" name="status" checked={status} />
            </td>
          </tr>
        );
      })}
      {showModal && <TaskModal closeModal={handleCloseModal} id={taskId} />}
    </>
  );
};
