import { useState } from "react";
import TodoList from "./components/TodoList";
import TaskAddModal from "./components/TaskAddModal";
import initialTasks from "./Data/Data.jsx";
import DeleteModal from "./components/DeleteModal.jsx";
import EditModal from "./components/EditModal.jsx";

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [modalType, setModalType] = useState(null);
  const [selectedTaskId, setSelectedTaskId] = useState(null);

  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      status: "incomplete",
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
    setModalType(null);
  };

  const updateTask = (id, newTitle,status) => {
    setTasks((prev) =>
        prev.map((task) =>
            task.id === id ? { ...task, title: newTitle ,status: status} : task
        )
    );
  };
  return (
      <div className="App">
        <TodoList
            tasks={tasks}
            setModalType={setModalType}
            setSelectedTaskId={setSelectedTaskId}
        />

        {modalType === "add" && (
            <TaskAddModal
                setOpenModal={() => setModalType(null)}
                addTask={addTask}
                tasks={tasks}
            />
        )}

        {modalType === "delete" && (
            <DeleteModal
                setOpenModal={() => setModalType(null)}
                deleteTask={() => deleteTask(selectedTaskId)}
            />
        )}
        {modalType === "edit" &&  (

            <EditModal
                setOpenModal={() => setModalType(null)}
                editTaskId={selectedTaskId}
                tasks={tasks}
                updateTask={updateTask}
                status={status}
            />

        )}
      </div>
  );
}

export default App;

