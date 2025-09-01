import { useMediaQuery } from "react-responsive";
import { Button } from "../components/Button";
import { COLORS, STYLES } from "../constants/GLOBAL_VARIABLES";
import { Link } from "react-router-dom";
import { CustomInput } from "../components/CustomInput";

export function Footer() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  return (
    <div
      style={{
        padding: "20px",
        gap: "48px",
      }}
    >
      <div
        className="d-flex flex-column"
        style={{
          padding: isDesktopOrLaptop ? "60px" : "30px",
          borderRadius: "20px",
          border: `3px solid ${COLORS.black}`,
          gap: "48px",
          backgroundColor: COLORS.yellow,
        }}
      >
        <div
          className="w-100"
          style={{ backgroundColor: COLORS.primaryColor }}
        ></div>
        <div>
          <Button
            title={"FOLLow us on instagram"}
            customStyle={{
              border: `3px solid ${COLORS.black}`,
              backgroundColor: COLORS.secondaryColor,
              padding: isDesktopOrLaptop ? "16px 32px" : "10px 10px",
            }}
          />
        </div>
        {!isDesktopOrLaptop && (
          <div className="col-sm-6">
            <p style={{ ...STYLES.footer.title, color: COLORS.primaryColor }}>
              OUR EMAILS ARE ALL CEREAL, <br /> WITH A BIT OF EMOTIONAL SUPPORT
            </p>
            <CustomInput type={"text"} placeholder={"Email address"} />
          </div>
        )}
        <div className="row text-start">
          <div className="col-sm-2 col-12">
            <p style={STYLES.footer.title}>About us</p>
            <p style={STYLES.footer.content}>
              We used to eat cereal. <br />
              Then we became adults. Big mistake. <br />
              So we fixed cereal. Now everything's fine. <br />
              Probably.
            </p>
          </div>
          <div className="col-sm-2 col-6">
            <p style={STYLES.footer.title}>SHOp</p>
            <p style={STYLES.footer.content}>
              <Link className="text-decoration-none text-dark" to="#">
                Choco Boom
              </Link>{" "}
              <br />
              <Link className="text-decoration-none text-dark" to="#">
                Peanut Crazy
              </Link>{" "}
              <br />
              <Link className="text-decoration-none text-dark" to="#">
                Honey Crunch
              </Link>{" "}
              <br />
              <Link className="text-decoration-none text-dark" to="#">
                Cookie N'Cream
              </Link>
            </p>
          </div>
          <div className="col-sm-2 col-6">
            <p style={STYLES.footer.title}>Help</p>
            <p style={STYLES.footer.content}>
              <Link className="text-decoration-none text-dark" to="#">
                About us
              </Link>{" "}
              <br />
              <Link className="text-decoration-none text-dark" to="#">
                My subscription
              </Link>{" "}
              <br />
              <Link className="text-decoration-none text-dark" to="#">
                FAQ
              </Link>{" "}
              <br />
              <Link className="text-decoration-none text-dark" to="#">
                Contact
              </Link>
            </p>
          </div>
          {isDesktopOrLaptop && (
            <div className="col-sm-6">
              <p style={{ ...STYLES.footer.title, color: COLORS.primaryColor }}>
                OUR EMAILS ARE ALL CEREAL, <br /> WITH A BIT OF EMOTIONAL
                SUPPORT
              </p>
              <CustomInput type={"text"} placeholder={"Email address"} />
            </div>
          )}
        </div>
        <div className="d-flex">
          <Link
            style={STYLES.footer.content}
            className="text-decoration-none text-dark"
            to="#"
          >
            Terms <span className="mx-3">|</span>
          </Link>
          <Link
            style={STYLES.footer.content}
            className="text-decoration-none text-dark"
            to="#"
          >
            Refund Policy <span className="mx-3">|</span>
          </Link>
          <Link
            style={STYLES.footer.content}
            className="text-decoration-none text-dark"
            to="#"
          >
            Legal Info
          </Link>
        </div>
      </div>
    </div>
  );
}
