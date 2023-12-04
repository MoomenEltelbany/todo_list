import * as React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useContext, useState } from "react";
import { TodosContext } from "./contexts/TodosContexts";

// Importing Buttons components from Buttons folder
import Card from "@mui/material/Card";
import Todo from "./Todo";
import AllBtns from "./Buttons/AllBtns";
import Button from "@mui/material/Button";

// Importing a library for unique ID
import { v4 as uniqueID } from "uuid";

export default function TodoCard() {
    const [submit, setSubmit] = useState("");
    const { todos, setTodos } = useContext(TodosContext);
    const [filter, setFilter] = useState("all");

    const filteredTodos = todos.filter((todo) => {
        switch (filter) {
            case "done":
                return todo.done;
            case "not-done":
                return !todo.done;
            default:
                return true; // "all" - no filtering
        }
    });

    const todo = filteredTodos.map((todo) => {
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

    const handleFilterChange = (event, newFilter) => {
        setFilter(newFilter);
    };

    return (
        <Card sx={{ minWidth: 275 }} style={{ padding: "20px" }}>
            <h1 style={{ borderBottom: "1px solid black" }}>TODO LIST</h1>
            <AllBtns filter={filter} onFilterChange={handleFilterChange} />
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
