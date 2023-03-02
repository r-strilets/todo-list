import { useState } from "react";
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { changeTaskStatus } from "../../redux/tasksSlice";
import { getTasks } from "../../redux/selectors";
import css from "./TaskModal.module.css";

export const TaskModal = ({ id, closeModal }) => {
  const tasks = useSelector(getTasks);
  const task = tasks.find((task) => task.id === id);
  const [taskStatus, setTaskStatus] = useState(task.status);

  const dispatch = useDispatch();

  const handleCheckboxChange = () => {
    dispatch(changeTaskStatus(id));
    setTaskStatus(!taskStatus);
  };

  return ReactDOM.createPortal(
    <div className={css.modal}>
      <div className={css.modalContent}>
        <h3>{task.title}</h3>
        <p>Description:</p>
        <p>{task.description}</p>
        <p>
          Status:
          <input
            type="checkbox"
            name="status"
            checked={taskStatus}
            onChange={handleCheckboxChange}
          />
        </p>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};
