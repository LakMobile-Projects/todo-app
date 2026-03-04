import React, {useEffect, useState} from "react";
import InitialTasks from '../Data/Data.jsx'

const EditModal = ({ setOpenModal, editTaskId,tasks,updateTask }) => {

    const selectedTask = tasks.find((task)=>task.id === editTaskId);
    const [title, setTitle] = useState("");
    const [status, setStatus] = useState("");

    useEffect(() => {
        if(selectedTask){
            setTitle(selectedTask.title);
            setStatus(selectedTask.status);
        }

    }, [selectedTask]);

    const handleUpdate = () => {
        const trimmedTitle = title.trim();

        if (!trimmedTitle) return;

        updateTask(editTaskId,trimmedTitle,status);
        setOpenModal(false);

    };

    return (
        <div className="modalBackground" onClick={() => setOpenModal(false)}>
            <div className="modalContainer" onClick={(e) => e.stopPropagation()}>
                <div className="title">
                    <h1>Update Task :{
                        title
                    } </h1>

                </div>
                <div className="editBody">
                    <input
                        type="text"
                        placeholder="Type your task here..."
                        autoFocus
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleUpdate()}
                        className="modal-input"
                    />
                    <div className="status-select-wrapper">
                        <select
                            className={`status-select status-select--${selectedTask.status}`}
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            // Assuming you have a handler
                        >
                            <option value="complete">Complete</option>
                            <option value="incomplete">Incomplete</option>
                        </select>
                    </div>
                </div>

                <div className="footer">
                    <button id="cancelBtn" onClick={() => setOpenModal(false)}>
                        Cancel
                    </button>
                    <button onClick={handleUpdate}>Update</button>
                </div>
            </div>
        </div>
    );
};

export default EditModal;