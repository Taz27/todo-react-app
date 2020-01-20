import React from 'react';

function TodoItem(props) {
    //console.log(props);
    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }
    //className={props.item.completed ? "todo-done" : undefined}
    return (
        <li style={props.item.completed ? completedStyle : undefined}><span name="span" onClick={(e) => props.deletefunc(props.item.id, e)}><i name="i" className="fas fa-trash-alt"></i></span>
        <input type="checkbox" onChange={(event) => props.changefunc(props.item.id, event)} checked={props.item.completed} /> {props.item.title}</li>
    );
}

export default TodoItem;