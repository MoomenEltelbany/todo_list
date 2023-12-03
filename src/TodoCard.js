import * as React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useContext } from "react";
import { TodosContext } from "./contexts/TodosContexts";

// Importing Buttons components from Buttons folder
import Card from "@mui/material/Card";
import Todo from "./Todo";
import AllBtns from "./Buttons/AllBtns";
import Button from "@mui/material/Button";

// Importing a library for unique ID
import { v4 as uniqueID } from "uuid";

export default function TodoCard() {
    const [submit, setSubmit] = React.useState("");
    const { todos, setTodos } = useContext(TodosContext);

    const todo = todos.map((todo) => {
        return (
            <Todo
                key={todo.id}
                id={todo.id}
                title={todo.title}
                done={todo.done}
            />
        );
    });

    const handleInputChange = (event) => {
        setSubmit(event.target.value);
    };

    function handleSubmitClick() {
        const newTodo = { id: uniqueID(), title: submit, done: false };
        const updatedTodos = [...todos, newTodo];
        setTodos(updatedTodos);
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
        setSubmit("");
    }
    return (
        <Card sx={{ minWidth: 275 }} style={{ padding: "20px" }}>
            <h1 style={{ borderBottom: "1px solid black" }}>TODO LIST</h1>
            <AllBtns />
            {todo}
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <TextField
                        id="outlined-basic"
                        label="Task"
                        variant="outlined"
                        style={{ width: "100%" }}
                        value={submit}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Button
                        variant="contained"
                        style={{ width: "100%", height: "100%" }}
                        onClick={handleSubmitClick}
                        disabled={submit.length === 0}
                    >
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </Card>
    );
}
