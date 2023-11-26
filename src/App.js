import "./App.css";
import TodoCard from "./TodoCard";
import Container from "@mui/material/Container";
import { TodosContext } from "./contexts/TodosContexts";
import { v4 as uniqueID } from "uuid";

const todosList = [
    {
        id: uniqueID(),
        title: "Finish React Course",
        done: false,
    },
    {
        id: uniqueID(),
        title: "Finish NextJS Course",
        done: false,
    },
    {
        id: uniqueID(),
        title: "Finish NodeJS Course",
        done: false,
    },
];

function App() {
    return (
        <div
            className="App"
            style={{
                height: "100vh",
                backgroundColor: "#191B1E",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Container maxWidth="sm">
                <TodosContext.Provider value={todosList}>
                    <TodoCard />
                </TodosContext.Provider>
            </Container>
        </div>
    );
}

export default App;
