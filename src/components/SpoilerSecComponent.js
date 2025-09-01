import { useMediaQuery } from "react-responsive";
import { COLORS, STYLES } from "../constants/GLOBAL_VARIABLES";
import { SPOILERS } from "../datas/HomeData";

export default function SpoilerSecComponent() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  return (
    <>
      <p
        style={{
          ...STYLES.HBunbleSec.title,
          fontSize: isDesktopOrLaptop ? "50px" : "40px",
          color: COLORS.white,
          fontWeight: "bold",
        }}
      >
        SPOILER: THEY DIDN'T STOP AT ONE BOWL.
      </p>
      <div
        style={{ scrollbarWidth: "thin", gap: "24px" }}
        className="mb-5 d-flex flex-row justify-content-center flex-nowrap overflow-auto w-100"
      >
        {SPOILERS.map((spoiler, idx) => (
          <div
            key={idx}
            className="d-flex flex-column align-items-center"
            style={{
              gap: "24px",
              flex: "0 0 auto",
              width: isDesktopOrLaptop ? "264px" : "200px",
            }}
          >
            <div
              style={{
                ...STYLES.HSpoilerSec.content,
                width: "100%",
                height: isDesktopOrLaptop ? "450px" : "300px",
                flex: "0 0 auto",
              }}
            ></div>
            <span style={STYLES.HSpoilerSec.item}>{spoiler.pseudo}</span>
          </div>
        ))}
      </div>
    </>
  );
}
