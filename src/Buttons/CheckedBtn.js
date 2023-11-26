import CheckIcon from "@mui/icons-material/Check";

export default function CheckedBtn() {
    return (
        <CheckIcon
            style={{
                color: "green",
                backgroundColor: "white",
                borderRadius: "50%",
                height: "20px",
                width: "20px",
                padding: "5px",
                marginLeft: "10px",
                cursor: "pointer",
            }}
            onClick={() => {
                alert("Checked");
            }}
        />
    );
}
