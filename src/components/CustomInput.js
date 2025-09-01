import { COLORS } from "../constants/GLOBAL_VARIABLES";

export function CustomInput({ type, placeholder }) {
  return (
    <div
      style={{
        border: `2px solid ${COLORS.black}`,
        backgroundColor: COLORS.white,
        padding: "8px",
        borderRadius: "12px",
        gap: "12px",
      }}
      className="d-flex align-items-center  w-100"
    >
      <input
        className="custom-placeholder"
        style={{ flex: 1, outline: "none", border: "none" }}
        type={type}
        placeholder={placeholder}
      />
      <div
        style={{
          display: "flex",
          borderRadius: "12px",
          padding: "12px",
          gap: "12px",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: COLORS.black,
        }}
      >
        .
      </div>
    </div>
  );
}
