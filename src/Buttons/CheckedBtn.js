import CheckIcon from "@mui/icons-material/Check";
import { useContext, useState } from "react";
import { TodosContext } from "../contexts/TodosContexts";
import "./CheckedBtn.css";

export default function CheckedBtn(props) {
    const { todos, setTodos } = useContext(TodosContext);
    const [done, setDone] = useState(false);

    function handleCheckClicked() {
        setTodos(
            todos.map((todo) => {
                if (todo.id === props.id) {
                    setDone(!done);
                    return { ...todo, done: !todo.done };
                }
                return todo;
            })
        );
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
