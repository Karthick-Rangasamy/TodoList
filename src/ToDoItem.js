import React from 'react';
import './App.css'
const TodoItem = (props) => {
   
    return (
        
            <div className="todo">
          <div class="ui grid">
            <div class="fifteen wide column content">{props.item.value} </div>
            <div class="one wide column "><button class="ui primary button" onClick={props.delete}>Clear</button> </div>
        </div>
            </div>
           

    );
}

export default TodoItem;

