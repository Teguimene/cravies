import { COLORS, STYLES } from "../constants/GLOBAL_VARIABLES";

export function Button({ title, customStyle, icon, displayCounter, className, cardCount }) {
  return (
    <button
    className={className}
      style={{ ...STYLES.navButtons, ...customStyle, position: "relative" }}
    >
      {title ? <span style={{...STYLES.buttonTitle}}>{title}</span> : icon}

      {displayCounter ? <span style={STYLES.buttonCounter}>{1}</span> : <></>}
      
      <span style={{...STYLES.buttonCardTitle}}>{cardCount}</span>
    </button>
  );
}
