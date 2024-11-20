import React, {useState} from "react";

function TaskInput(props){
    
    return(
            <div className="row input-container text-white">
                <form action="" onSubmit={props.setTaskList}>
                    <div className="col-12 input-field">
                        <div className="row">
                            <div className="text-center">
                                <p>Enter your task you want to complete.</p>
                            </div>
                            <div className="col-sm-12 col-md-5 inputTitle">
                                <div className="col-12">
                                    <label htmlFor="title">Task Name: </label>
                                </div>
                                <div className="col-6">
                                    <input
                                    onChange={props.setFunc} 
                                    type="text" 
                                    name="title" 
                                    value={props.viewTitle}
                                    required />
                                </div>
                            </div>
                            <div className="col-5 d-flex justify-content-around align-items-start inputTime">
                                <div className="">
                                    <div className="col-12">
                                        <label htmlFor="time">Task Time: </label>
                                    </div>
                                    <div className="col-12">
                                        <input 
                                        onChange={props.setFunc} 
                                        type="time" 
                                        name="time" 
                                        value={props.viewTime} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-2 mt-4">
                                <button className="btn btn-sm">Submit</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className=" col-sm-12 col-md-8 inputDesc">
                                <div>
                                    <label htmlFor="description">Task Description: </label>
                                </div>
                                <div>
                                    <input 
                                    onChange={props.setFunc} 
                                    type="text" 
                                    name="description" 
                                    value={props.viewDesc}
                                    placeholder=""
                                    required />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
    )
}

export default TaskInput;