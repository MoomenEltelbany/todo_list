import CheckedBtn from "./Buttons/CheckedBtn";
import EditBtn from "./Buttons/EditBtn";
import DeleteBtn from "./Buttons/DeleteBtn";

export default function Todo() {
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
            <p style={{ color: "white", fontSize: "20px" }}>
                Finish React Course
            </p>
            <div>
                <CheckedBtn />
                <EditBtn />
                <DeleteBtn />
            </div>
        </div>
    );
}
