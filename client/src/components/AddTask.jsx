import { useRef } from "react";

const AddTask = ({ socket }) => {
  const todoRef = useRef(null);

  const handleAddTodo = (e) => {
    e.preventDefault();
    // Logs the task to the console
    socket.emit("createTask", todoRef.current.value);
    todoRef.current.value = "";
  };
  return (
    <form className="form__input" onSubmit={handleAddTodo}>
      <label htmlFor="task">Agregar nueva tarea</label>
      <input
        type="text"
        name="task"
        id="task"
        className="input"
        ref={todoRef}
        required
      />
      <button className="addTodoBtn">Agregar</button>
    </form>
  );
};

export default AddTask;
