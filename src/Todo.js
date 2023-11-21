export default function Todo() {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#2A3592",
                borderRadius: "10px",
                marginBottom: "10px",
                padding: "10px",
            }}
        >
            <p style={{ color: "white", fontSize: "20px" }}>
                Finish React Course
            </p>
            <div>
                <button style={{ marginLeft: "10px" }}>Add</button>
                <button style={{ marginLeft: "10px" }}>Add</button>
                <button style={{ marginLeft: "10px" }}>Add</button>
            </div>
        </div>
    );
}
