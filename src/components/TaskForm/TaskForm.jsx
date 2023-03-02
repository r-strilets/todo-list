import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/tasksSlice";
import css from "./TaskForm.module.css";

export const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [id, setId] = useState(1);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "title":
        setTitle(value);
        break;

      case "description":
        setDescription(value);
        break;

      default:
        return;
    }
    !title && setTitleError(false);
    !description.length && setDescriptionError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    if (!title || !description) {
      !title && setTitleError(true);
      !description && setDescriptionError(true);
      return;
    }
    setId(id + 1);
    const newTask = {
      id,
      title,
      description,
      status: false,
    };
    dispatch(addTask(newTask));
    form.reset();
    setTitle("");
    setDescription("");
    setTitleError(false);
    setDescriptionError(false);
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">
          Title
          <input
            className={css.field}
            type="text"
            name="title"
            placeholder="Enter title"
            onChange={handleChange}
          />
        </label>
        {titleError && <span className={css.error}>this field is empty</span>}
      </div>
      <div>
        <label htmlFor="">
          Description
          <input
            className={css.field}
            type="text"
            name="description"
            placeholder="Enter description"
            onChange={handleChange}
          />
        </label>
        {descriptionError && (
          <span className={css.error}>this field is empty</span>
        )}
      </div>
      <button type="submit">Create</button>
    </form>
  );
};
