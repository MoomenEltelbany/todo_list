import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export default function DeleteBtn() {
    return (
        <DeleteOutlineIcon
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
    );
}
