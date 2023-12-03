import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

// Importing the context
import { useContext } from "react";
import { TodosContext } from "../contexts/TodosContexts";

export default function DeleteBtn(props) {
    const [open, setOpen] = React.useState(false);

    const { todos, setTodos } = useContext(TodosContext);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleCloseConfirmation = () => {
        setTodos(todos.filter((todo) => todo.id !== props.id));
        setOpen(false);
    };

    return (
        <>
            <DeleteOutlineIcon
                onClick={handleClickOpen}
                style={{
                    color: "red",
                    backgroundColor: "white",
                    borderRadius: "50%",
                    height: "20px",
                    width: "20px",
                    padding: "5px",
                    marginLeft: "10px",
                    cursor: "pointer",
                }}
            />

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        You sure you want to delete the post?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={handleCloseConfirmation}
                        style={{ color: "red" }}
                    >
                        Yes, I am sure
                    </Button>
                    <Button onClick={handleClose}>No, I am not</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
