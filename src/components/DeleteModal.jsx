const DeleteModal = ({ setOpenModal, deleteTask }) => {


    return (
        <div className="modalBackground" onClick={() => setOpenModal(false)}>
            <div className="modalContainer" onClick={(e) => e.stopPropagation()}>
                <div className="title">
                    <h1>Delete Task</h1>
                </div>
                <div className="body">
                    <p>Are you sure you want to delete this task?</p>
                </div>
                <div className="footer">
                    <button id="cancelBtn" onClick={() => setOpenModal(false)}>
                        Cancel
                    </button>
                    <button id="deleteBtn" onClick={deleteTask}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;