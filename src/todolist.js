import React from "react";

function Todo (){
    const [todoArray, setTodoArray] = React.useState(["To do 1", "To do 2"]);

    function addItem (){
        setTodoArray(prevArray => [...prevArray, `To do ${prevArray.length + 1}`])      
    }
    const todoElements = todoArray.map(item => <p>{item}</p>);

    return(
        <div className="todo">
            <button onClick={addItem}>Add task</button>
            {todoElements}
        </div>
    )
}

export default Todo;