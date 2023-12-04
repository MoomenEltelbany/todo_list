import CheckIcon from "@mui/icons-material/Check";
import { useContext, useState, useEffect } from "react";
import { TodosContext } from "../contexts/TodosContexts";
import "./CheckedBtn.css";

export default function CheckedBtn(props) {
    const { todos, setTodos } = useContext(TodosContext);

    const [done, setDone] = useState(false);

    // This useEffect runs when the component mounts
    useEffect(() => {
        // Find the corresponding todo item
        const todo = todos.find((todo) => todo.id === props.id);

        // Update the done state based on the actual state of the todo item
        if (todo) {
            setDone(todo.done);
        }
    }, [todos, props.id]);

    function handleCheckClicked() {
        const updatedTodos = todos.map((todo) => {
            if (todo.id === props.id) {
                setDone(!done);
                return { ...todo, done: !todo.done };
            }
            return todo;
        });

        setTodos(updatedTodos);
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
    }

    return (
        <CheckIcon
            className="checked"
            style={{
                backgroundColor: done ? "green" : "white",
                color: done ? "white" : "green",
                borderRadius: "50%",
                height: "20px",
                width: "20px",
                padding: "5px",
                marginLeft: "10px",
                cursor: "pointer",
            }}
            onClick={() => {
                handleCheckClicked();
            }}
        />
    );
}
