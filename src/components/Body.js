import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import TaskInput from "./TaskInput";

// The Body component acts as the main container for our to-do list application.
// It manages the state of all tasks and handles interactions like adding tasks, toggling task completion, etc.
function Body() {
    // This is our main list of tasks.
    // `todoDataa` holds all the tasks, and `setToDoData` allows us to update the list.
    const [todoDataa, setToDoData] = useState([]);

    // This is the blueprint for a task. Think of it as a blank form that we can fill out.
    // Whenever we want to add a new task, we use this structure.
    const [todoTemplate, setToDoTemplate] = useState({
        title: "", // The name of the task
        description: "", // Additional details about the task
        time: "", // Time related to the task (e.g., deadline)
        done: false // Whether the task is completed or not
    });

    // This function is called when a user clicks a checkbox to mark a task as done/undone.
    // It looks at the task's unique ID (`taskId`) and flips its `done` status.
    function toggleTask(taskId) {
        setToDoData((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId
                    ? { ...task, done: !task.done } // If this is the task we clicked, flip its `done` value
                    : task // Otherwise, leave it unchanged
            )
        );
    }

    // This function runs whenever there's a change in the input fields of our form (title, description, etc.).
    // It updates the `todoTemplate` state with the new input values.
    function handleEvent(event) {
        const { name, value, checked, type } = event.target;

        setToDoTemplate((prevTemplate) => ({
            ...prevTemplate, // Keep everything from the previous state
            [name]: type === "checkbox" ? checked : value // Update the field that changed
        }));
    }

    // This function runs when the user submits the form to add a new task.
    function submit(event) {
        event.preventDefault(); // Stop the page from reloading

        // Add the new task to our `todoDataa` array.
        setToDoData((prevToDoData) => [
            ...prevToDoData,
            { ...todoTemplate, id: Date.now() } // Spread the template and give the task a unique ID
        ]);

        // Clear the form by resetting `todoTemplate` to its blank state.
        setToDoTemplate({
            title: "",
            description: "",
            time: "",
            done: false
        });
    }

    function deleteTask(){
        
    }

    // Create a list of `ToDoItem` components from our `todoDataa` array.
    const toDoItems = todoDataa.map((item) => (
        <ToDoItem
            key={item.id} // A unique key is required for each list item
            taskId={item.id} // Pass the task's unique ID
            taskName={item.title} // Pass the task's title
            taskDesc={item.description} // Pass the task's description
            taskTime={item.time} // Pass the task's time
            taskDone={item.done} // Pass whether the task is done or not
            onToggleCheckbox={toggleTask} // Pass the function to toggle the task's `done` state
        />
    ));

    // Render the main structure of the app.
    return (
        <div className="container">
            <div className="row">
                {/* Render the task input form */}
                <TaskInput
                    viewTitle={todoTemplate.title} // Current title input
                    viewDesc={todoTemplate.description} // Current description input
                    viewTime={todoTemplate.time} // Current time input
                    setFunc={handleEvent} // Function to handle input changes
                    setTaskList={submit} // Function to handle form submission
                />
                {/* Render all the tasks */}
                {toDoItems}
            </div>
        </div>
    );
}

export default Body;
