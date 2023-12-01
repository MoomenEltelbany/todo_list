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

export default function EditBtn() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const { todos, setTodos } = useContext(TodosContext);

    function handleEditBtnClick() {
        alert("Edit");
    }

    return (
        <>
            <Button variant="outlined" onClick={handleClickOpen}>
                Open form dialog
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email
                        address here. We will send updates occasionally.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Subscribe</Button>
                </DialogActions>
            </Dialog>
            <EditIcon
                onClick={handleEditBtnClick}
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
