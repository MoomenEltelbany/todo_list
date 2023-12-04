import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function AllBtns({ filter, onFilterChange }) {
    const handleChange = (event, newFilter) => {
        if (newFilter !== null) {
            onFilterChange(event, newFilter);
        }
    };

    return (
        <ToggleButtonGroup
            color="primary"
            value={filter}
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
