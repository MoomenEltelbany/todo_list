import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function AllBtns() {
    return (
        <ButtonGroup
            variant="contained"
            aria-label=""
            style={{ marginBottom: "20px" }}
        >
            <Button>All</Button>
            <Button>Done</Button>
            <Button>Not-Done</Button>
        </ButtonGroup>
    );
}
