import { COLORS, STYLES } from "../constants/GLOBAL_VARIABLES";

export function Pack({
  backgroundColor,
  leftTile,
  leftDescription,
  promo,
  price,
  percent,
  showBestSeller,
  isFlavour,
}) {
  return (
    <div
      style={
        !isFlavour
          ? { ...STYLES.pdp.pdpFirstSec.pack, backgroundColor, padding: "8px" }
          : {
              ...STYLES.pdp.pdpFirstSec.pack,
              backgroundColor,
              paddingRight: "20px",
              padding: "8px",
            }
      }
      className="d-flex my-2"
    >
      <div
        style={{
          width: "88px",
          width: "88px",
          borderRadius: "12px",
          backgroundColor: COLORS.white,
        }}
      ></div>
      <div className={ `${!isFlavour ? 'align-items-sm-center' : 'align-items-center'} d-flex flex-sm-row ${!isFlavour && 'flex-column'} justify-content-between w-100`}>
        <div>
          <span
            style={{
              fontSize: "18px",
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            {leftTile}
          </span>
          {!showBestSeller ? (
            <p style={{ fontSize: "14px", fontWeight: 400 }}>
              {leftDescription}
            </p>
          ) : (
            <p
              style={{
                backgroundColor: COLORS.clearBrown,
                borderRadius: "30px",
                paddingInline: "7px",
                paddingBlock: "2px",
                textAlign: "start",
                width: "93px",
              }}
            >
              <span style={{ fontSize: "12px", fontWeight: 700 }}>
                Best Seller
              </span>
            </p>
          )}
        </div>

        {/* right description */}
        {!isFlavour ? (
          <div className="d-flex align-items-center" style={{ gap: "8px" }}>
            <span style={STYLES.pdp.pdpFirstSec.pack.promo}>{promo}</span>
            <span
              style={{
                fontSize: "16px",
                color: COLORS.secondaryColor,
                fontWeight: "bold",
                marginInline: "5px",
              }}
            >
              {price}
            </span>
            <span style={STYLES.pdp.pdpFirstSec.pack.percent}>{percent}</span>
          </div>
        ) : (
          <div
            className="text-center"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "12px",
              gap: "12px",
              padding: "12px",
              backgroundColor: COLORS.black,
            }}
          >
            .
          </div>
        )}
      </div>
    </div>
  );
}
