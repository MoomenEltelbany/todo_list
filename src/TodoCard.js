import * as React from "react";
import Card from "@mui/material/Card";
import Todo from "./Todo";

export default function TodoCard() {
    return (
        <Card sx={{ minWidth: 275 }} style={{ padding: "20px" }}>
            <h1 style={{ borderBottom: "1px solid black" }}>TODO LIST</h1>
            <Todo />
            <Todo />
            <Todo />
        </Card>
    );
}
