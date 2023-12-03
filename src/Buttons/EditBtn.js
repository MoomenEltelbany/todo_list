import EditIcon from "@mui/icons-material/Edit";
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { useContext, useState } from "react";
import { TodosContext } from "../contexts/TodosContexts";

export default function EditBtn(props) {
    const [open, setOpen] = React.useState(false);
    const { todos, setTodos } = useContext(TodosContext);
    const [edit, setEdit] = useState("");

    const title = todos.find((todo) => todo.id === props.id).title;

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    function handleEditBtnClick() {
        const updatedTodos = todos.map((todo) => {
            if (todo.id === props.id) {
                return { ...todo, title: edit };
            }
            return todo;
        });
        setTodos(updatedTodos);
        localStorage.setItem("todos", JSON.stringify(updatedTodos));

        setOpen(false);
    }

    return (
        <>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Edit Post</DialogTitle>
                <DialogContent>
                    <DialogContentText>{title}</DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Post Edit"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={edit}
                        onChange={(e) => setEdit(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleEditBtnClick}>Edit</Button>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
            <EditIcon
                onClick={handleClickOpen}
                style={{
                    color: "blue",
                    backgroundColor: "white",
                    borderRadius: "50%",
                    height: "20px",
                    width: "20px",
                    padding: "5px",
                    marginLeft: "10px",
                    cursor: "pointer",
                }}
            />
        </>
    );
}
