import React, {useState, useEffect} from "react";
import todoData from "../toDoListData";


function ToDoItem(props){

    return(
        <div className="d-flex justify-content-center row">
                <div className="taskItems row">
                    <div className="col-6">
                            <div className={`${props.taskDone ? "done" : "notDone"}`}>
                                <h3>{props.taskName}</h3>
                            </div>
                        <div className={`row taskDesc `}>
                            <div className={`${props.taskDone ? "done" : "notDone"}`}>
                                <h3>{props.taskDesc}</h3>
                            </div>
                        </div>
                    </div>
                    <div className=" taskTime col-4 d-flex align-items-end">
                        <div className={`${props.taskDone ? "done" : "notDone"}`}>
                            <h4>{props.taskTime}</h4>
                        </div>
                    </div>
                    <div className={`col-2 d-flex align-items-center`}>
                        <div className={`${props.taskDone ? "done" : "notDone"}`}>
                            <input 
                            onChange={() => props.onToggleCheckbox(props.taskId)} 
                            type="checkbox" 
                            name="done" 
                            checked={props.taskDone} />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 d-flex justify-content-center align-items-center">
                        <div className="mx-2">
                            <button className="btn btn-sm btn-danger">Delete</button>
                        </div>
                        <div className="mx-2">
                            <button className="btn btn-sm btn-warning">Edit</button>
                        </div>
                    </div>
                </div>
        </div>
    )
}



export default ToDoItem;