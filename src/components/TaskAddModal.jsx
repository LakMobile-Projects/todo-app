import React, { useState } from "react";

const TaskAddModal = ({ setOpenModal, addTask,tasks }) => {
    const [title, setTitle] = useState("");

    const handleSave = () => {
        const trimmedTitle = title.trim();

        if (!trimmedTitle) return;

        const isDuplicate = tasks.some((task) =>
            task.title.toLowerCase() === trimmedTitle.toLowerCase()
        );

        if (!isDuplicate) {
            addTask(trimmedTitle);
            setOpenModal(false);
        } else {
            alert("Already saved");
        }
    };

    return (
        <div className="modalBackground" onClick={() => setOpenModal(false)}>
            <div className="modalContainer" onClick={(e) => e.stopPropagation()}>
                <div className="title">
                    <h1>Add New Task</h1>
                </div>
                <div className="body">
                    <input
                        type="text"
                        placeholder="Type your task here..."
                        autoFocus
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSave()}
                        className="modal-input"
                    />
                </div>
                <div className="footer">
                    <button id="cancelBtn" onClick={() => setOpenModal(false)}>
                        Cancel
                    </button>
                    <button onClick={handleSave}>Save</button>
                </div>
            </div>
        </div>
    );
};

export default TaskAddModal;