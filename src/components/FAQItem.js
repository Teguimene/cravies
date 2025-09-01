import { useState } from "react";
import { COLORS } from "../constants/GLOBAL_VARIABLES";

export function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="d-flex justify-content-between text-start"
      onClick={() => setIsOpen(!isOpen)}
      style={{
        borderBottom: `2px solid ${COLORS.black}`,
        padding: "24px 0",
        cursor: "pointer",
        gap: "16px",
      }}
    >
      <div>
        <div
          style={{
            fontWeight: "bold",
            fontSize: "16px",
            textTransform: "uppercase",
          }}
        >
          {question}
        </div>
        {isOpen && (
          <div
            style={{
              marginTop: "8px",
              fontSize: "16px",
              fontWeight: 400,
              color: COLORS.black,
            }}
          >
            {answer}
          </div>
        )}
      </div>
      <div style={{ cursor: "pointer" }} onClick={() => setIsOpen(!isOpen)}>
        <span style={{ width: "20px", height: "20px" }}>
          {isOpen ? "-" : "+"}
        </span>
      </div>
    </div>
  );
}
