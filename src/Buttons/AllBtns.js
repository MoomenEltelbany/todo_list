import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function AllBtns() {
    const [alignment, setAlignment] = React.useState("all");

    const handleChange = (event) => {
        setAlignment(event.target.value);
    };

    return (
        <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
            style={{ marginBottom: "20px" }}
        >
            <ToggleButton value="all">All</ToggleButton>
            <ToggleButton value="done">Done</ToggleButton>
            <ToggleButton value="not-done">Not-Done</ToggleButton>
        </ToggleButtonGroup>
    );
}
