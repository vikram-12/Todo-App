import React from "react";
import "./Todo.css";
import db from './firebase'
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Button,
} from "@material-ui/core";
function Todo(props) {
  return (
    <List className="todo_list">
      <ListItem>
        <ListItemAvatar></ListItemAvatar>
        <ListItemText primary={props.todo.todo} secondary="⏰⏰" />
        
      </ListItem>
      <Button  onClick={event =>db.firestore().collection('todos').doc(props.todo.id).delete()}>❎Delete</Button>
    </List>
  );
}

export default Todo;
