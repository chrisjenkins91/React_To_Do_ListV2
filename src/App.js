import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import TaskInput from "./components/TaskInput";
import todoData from "./toDoListData";
import '../src/style.css'

function App(){
    
    
    
    return(
            <div className="container-fluid main d-flex justify-content-center align-items-center">
                <div className="row d-flex justify-content-center">
                    <Header />
                    <div className="col-9 d-flex justify-content-center task-container">
                        <div className="taskList row">
                            <Body />
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default App;

