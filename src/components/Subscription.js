import { COLORS } from "../constants/GLOBAL_VARIABLES";

export default function Subscription({ id, title, description, color }) {
  return (
    <div
      className="mx-1 my-2 mx-sm-0"
      style={{
        borderRadius: "20px",
        padding: "24px",
        gap: "8px",
        textAlign: "start",
        backgroundColor: color,
        color: COLORS.white,
      }}
    >
      <p style={{ fontWeight: 700, fontSize: "32px" }}>{id}</p>
      <p style={{ fontWeight: "bold", fontSize: "32px", lineHeight: "36px" }}>
        {title}
      </p>
      <p style={{ fontWeight: 400, fontSize: "18px", lineHeight: "28px" }}>
        {description}
      </p>
    </div>
  );
}
