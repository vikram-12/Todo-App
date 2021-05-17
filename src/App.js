import React, { useState, useEffect } from "react";
import { FormControl } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";
import { Input } from "@material-ui/core";
import Todo from "./ToDo";
import "./App.css";
import db from "./firebase";
import firebase from "firebase";
function App() {
  const [todos, settodos] = useState([]);
  const [input, setInput] = useState("");
  //when appp loads we need to listen to the database to fetch new todos as they are added or removed
  useEffect(() => {
    db.firestore()
      .collection("todos")
      .orderBy("timeStamp", "desc")
      .onSnapshot((snapshot) => {
        settodos(snapshot.docs.map((doc) => ({id: doc.id ,todo: doc.data().todo})));
      });
  }, []);
  //this code here fires .. when app.js loads

  //console.log(input);
  //function to add the value of input field to list
  const addTodo = (event) => {
    event.preventDefault();
    db.firestore().collection("todos").add({
      todo: input,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    }); //prevent refresh on button clicked
    //settodos([...todos, input]); //pushes the new values as input to the end of the list & the ... implies the previous values
    setInput(""); //to clear the input field
  };
  return (
    // we are wrapping in form so that it gets submitted when we press enter
    <div className="App">
      <h1>Hello Vikram 👋</h1>

      <form>
      
        <FormControl>
          <InputLabel>✔️Write your TODO ...</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
        >
          Add ToDo
        </Button>

        </FormControl>
       
      </form>

      <ul>
        {todos.map((todos) => (
          <Todo todo={todos} />
          //<li>{todo}</li>
          //works as a loop and add all items into the list
        ))}
      </ul>
    </div>
  );
}

export default App;
