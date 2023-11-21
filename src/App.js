import "./App.css";
import TodoCard from "./TodoCard";
import Container from "@mui/material/Container";

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
                <TodoCard />
            </Container>
        </div>
    );
}

export default App;
