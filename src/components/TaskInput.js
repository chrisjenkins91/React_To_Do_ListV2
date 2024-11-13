import React from "react";

function TaskInput(){

    return(
            <div className="col-12 d-flex justify-content-center">
                <div>
                    <div>
                        <p className="">I know you have a busy schedule. Enter you tasks and let's knock them out!</p>
                    </div>
                    <form action="">
                        <div className="input-field d-flex justify-content-center">
                            <input type="text" size={15} placeholder="Please Enter A Task" />
                            <button className="btn btn-sm btn-dark ms-3">Add Task</button>    
                        </div>
                    </form>
                </div>
            </div>
    )
}

export default TaskInput;