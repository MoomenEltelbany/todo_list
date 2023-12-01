import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function DeleteBtn() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
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
                    <Button onClick={handleClose} style={{ color: "red" }}>
                        Yes, I am sure
                    </Button>
                    <Button onClick={handleClose} autoFocus>
                        No, I am not
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
