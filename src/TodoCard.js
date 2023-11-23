import * as React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

// Importing Buttons components from Buttons folder
import Card from "@mui/material/Card";
import Todo from "./Todo";
import AllBtns from "./Buttons/AllBtns";
import Button from "@mui/material/Button";

export default function TodoCard() {
    return (
        <Card sx={{ minWidth: 275 }} style={{ padding: "20px" }}>
            <h1 style={{ borderBottom: "1px solid black" }}>TODO LIST</h1>
            <AllBtns />
            <Todo />
            <Todo />
            <Todo />
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <TextField
                        id="outlined-basic"
                        label="Outlined"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={4}>
                    <Button variant="contained">Submit</Button>
                </Grid>
            </Grid>
        </Card>
    );
}
