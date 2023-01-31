import React,{useState} from "react"
import "./App.css"
import TodoList from "./TodoList"


function App() {
  const[item, setItem]= useState("");
  const[list, setList]= useState([])//array

  const handleChange=((event)=>{
    setItem(event.target.value);
  })

  //store in array and call it same time
  const handleSubmit=((event)=>{
      setList((oldValue) => {
        return [...oldValue,item];
      })
      setItem("");
  })

  const checkItem=(id)=>{
   if(id.target.checked ){
    console.log("checkItem")
   } 
   else{
    console.log("Not checked")
   }

  }

  const deleteItem =(id) =>{
    setList((oldValue)=>{
      return oldValue.filter((arrElem, index)=>{
        return index !== id;
      })
    })
  }


  return (
    <>
    <div className='back'>
      <div className='box'>
        <h1 className='toDoList'>
          ToDo List
        </h1>
        <input type="text" placeholder="Add Items"
        value={item}
        onChange={handleChange}
        ></input>
        <button onClick={handleSubmit} className="add">+</button>
        <ol>
          {list.map( (listValue, index)=> {
            return <TodoList 
            key={index}// props
            id={index} //props
            text={listValue} //props

            onSelect={deleteItem}
            isChecked={checkItem}
            />
          })
        }
        </ol>
      </div>
    </div>

    </>
  );
}

export default App;
