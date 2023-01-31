import React from 'react'

const TodoList = (props) => {

  return (
    <div>
        <li>
          <input type="checkbox" onClick={()=> {props.isChecked(props.id)}}></input>
        {props.text} 
        <button onClick={() => {props.onSelect(props.id);}}>X</button>
        </li>
    </div>
  )
}

export default TodoList
