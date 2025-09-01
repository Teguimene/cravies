import { useMediaQuery } from "react-responsive";
import { STYLES } from "../constants/GLOBAL_VARIABLES";

export function PackTitle({ number, title }) {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  return (
    <div className="d-flex align-items-center mt-3">
      <div style={STYLES.pdp.pdpFirstSec.bunble}>
        <span
          style={{ fontSize: "16px", fontWeight: "bold" }}
          className="text-white"
        >
          {number}
        </span>
      </div>
      <span
        style={{
          ...STYLES.pdp.pdpFirstSec.subTitle,
          fontSize: isDesktopOrLaptop ? "32px" : "23px",
          margin: "10px",
        }}
      >
        {title}
      </span>
    </div>
  );
}
