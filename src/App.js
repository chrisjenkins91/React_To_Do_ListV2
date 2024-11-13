import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import TaskInput from "./components/TaskInput";

import '../src/style.css'

function App(){

    return(
        <div className="container-fluid main d-flex justify-content-center align-items-center">
            <div className="row">
                <Header />
                    <div className="container task-container">
                        <div className="row">
                            <TaskInput />
                            <Body />
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default App;

