import { Link } from "react-router-dom";
import { COLORS, NAV_ITEMS, STYLES } from "../constants/GLOBAL_VARIABLES";
import { useState } from "react";
import { Button } from "../components/Button";
import  { useMediaQuery } from "react-responsive";

export function NavBar({textColor}) {
  const [active, setActive] = useState(NAV_ITEMS[0].targetPath);
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  return (
    <div className="navbar d-flex align-items-center">
      <div>
        <Link style={{...STYLES.logo, color: textColor}} to={"/"}>
          GRAVIES
        </Link>
      </div>
      <div className="d-none d-sm-flex nav-items">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.targetPath}
            onClick={() => setActive(item.targetPath)}
            className="text-decoration-none"
            to={item?.targetPath}
          >
            <p style={{...STYLES.items, color: textColor}}>{item?.title}</p>
            <span
              style={STYLES.navItemUnderline(
                active === item.targetPath,
                textColor
              )}
            ></span>
          </Link>
        ))}
      </div>

      {isDesktopOrLaptop ? (
        <div style={{ gap: "24px" }} className="d-flex">
          <Button
            customStyle={{
              border: `2px solid ${COLORS.black}`,
              backgroundColor: COLORS.secondaryColor,
            }}
            title={"Subscribe now"}
          />

          <Button
            className={"d-none d-sm-block"}
            customStyle={{
              border: `3px solid ${COLORS.black}`,
              backgroundColor: COLORS.primaryColor,
            }}
            title={"."}
          />

          <Button
            customStyle={{
              border: `3px solid ${COLORS.black}`,
              backgroundColor: COLORS.primaryColor,
            }}
            title={"."}
            displayCounter={true}
          />
        </div>
      ) : (
        <div style={{ gap: "24px" }} className="d-flex">
          <Button
            customStyle={{
              border: `3px solid ${COLORS.black}`,
              backgroundColor: COLORS.primaryColor,
            }}
            title={"."}
            displayCounter={true}
          />

          <Button
            customStyle={{
              border: `2px solid ${COLORS.black}`,
              backgroundColor: COLORS.secondaryColor,
            }}
            title={"Menu"}
          />
        </div>
      )}
    </div>
  );
}
