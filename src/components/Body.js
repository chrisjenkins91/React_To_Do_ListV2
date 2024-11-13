import React from "react";
import ToDoItem from "./ToDoItem";
import toDoListData from "../toDoListData";

function Body() {

    const toDoItems = toDoListData.map(
        (item) => {
            return <ToDoItem taskName={item.name} taskDesc={item.description} taskTime={item.timeDue} askDone={item.done}  />
        }
    )

    return(
        <div className="container">
            <div className="row">
                {toDoItems}
            </div>
        </div>
    )
}

export default Body;