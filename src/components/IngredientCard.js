import { useMediaQuery } from "react-responsive";
import { COLORS, STYLES } from "../constants/GLOBAL_VARIABLES";

export function IngredientCard({ title, rotation, description, key }) {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  return (
    <div
      className="d-flex flex-column"
      key={key}
      style={{
        ...STYLES.HMotivationSec.content,
        transform: `rotate(${rotation && 0}deg)`,
        flex: "0 0 auto",
        width: isDesktopOrLaptop ? "320px" : "280px",
      }}
    >
      <div
        style={{
          backgroundColor: COLORS.primaryColor,
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
          height: isDesktopOrLaptop ? "302px" : "280px",
        }}
      ></div>
      <div
        className="text-start"
        style={{
          ...STYLES.HMotivationSec.item,
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
          width: "100%",
        }}
      >
        <p
          style={{
            ...STYLES.HMotivationSec.item.title,
            fontWeight: "bold",
          }}
        >
          {title}
        </p>
        <p
          className="text-start"
          style={{ fontWeight: 400, fontSize: "16px" }}
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
      </div>
    </div>
  );
}
