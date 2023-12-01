import CheckedBtn from "./Buttons/CheckedBtn";
import EditBtn from "./Buttons/EditBtn";
import DeleteBtn from "./Buttons/DeleteBtn";

export default function Todo({ id, title, done }) {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#2A3592",
                borderRadius: "10px",
                marginBottom: "20px",
                padding: "10px",
            }}
        >
            <p style={{ color: "white", fontSize: "20px" }}>{title}</p>
            <div>
                <CheckedBtn id={id} />
                <EditBtn id={id} />
                <DeleteBtn id={id} />
            </div>
        </div>
    );
}
