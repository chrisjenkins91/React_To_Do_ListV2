import React from "react";

function ToDoItem(props){
    console.log(props)
    return(
        <div className="taskItems row">
            <div className="col-6">
                    <div>
                        <h3>{props.taskName}</h3>
                    </div>
                <div className="row taskTime">
                    <div>
                        <h3>{props.taskTime}</h3>
                    </div>
                </div>
            </div>
            <div className="col-5 d-flex align-items-end">
                <h4>{props.taskDesc}</h4>
            </div>
            <div className="col-1 d-flex align-items-center">
                <input type="checkbox" name="done" id="done" />
            </div>
        </div>
    )
}

export default ToDoItem;