import { Link } from "react-router-dom";
import { NavBar } from "../layouts/NavBar";
import { COLORS, STYLES } from "../constants/GLOBAL_VARIABLES";
import { useMediaQuery } from "react-responsive";
import { Button } from "../components/Button";
import {
  BUNBLES,
  MOTIVATIONS,
  PROTEINS,
  SPOILERS,
  SUBSCRIPTIONS,
  TESTIMONIALS,
} from "../datas/HomeData";
import Subscription from "../components/Subscription";
import { Testimonial } from "../components/Testimonial";
import { IngredientCard } from "../components/IngredientCard";
import SpoilerSecComponent from "../components/SpoilerSecComponent";

export default function HomePage() {
  // const products = [
  //   { id: 1, name: "p1" },
  //   { id: 2, name: "p2" },
  // ];
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  return (
    <>
      <NavBar textColor={COLORS.black} />

      <div className="wrapper d-flex flex-column justify-content-center">
        {/* First Section */}
        <div
          style={{
            ...STYLES.HFirstSec,
            paddingTop: isDesktopOrLaptop ? "120px" : "80px",
          }}
        >
          <div style={{ ...STYLES.HFirstSec.subSec }}>
            <p
              style={{
                ...STYLES.HFirstSec.subSec.boxTitle,
                fontSize: isDesktopOrLaptop ? "80px" : "40px",
              }}
            >
              <span
                style={{
                  ...STYLES.HFirstSec.subSec.boxTitle.title,
                  fontWeight: "bold",
                }}
              >
                TASTES BAD
              </span>
            </p>
            <p
              style={{
                ...STYLES.HFirstSec.subSec.boxTitle,
                fontSize: isDesktopOrLaptop ? "80px" : "40px",
              }}
            >
              <span
                style={{
                  ...STYLES.HFirstSec.subSec.boxTitle.title,
                  fontWeight: "bold",
                }}
              >
                FOR YOU. BUT ISN'T.
              </span>
            </p>
            {/* Allergenes */}
            <div
              style={{ gap: isDesktopOrLaptop ? "48px" : "16px" }}
              className="d-flex flex-wrap justify-content-center"
            >
              {PROTEINS.map((p) => (
                <p
                  className="d-flex align-items-center"
                  style={STYLES.HFirstSec.proteins}
                >
                  <div style={STYLES.HFirstSec.proteins.icon}>.</div>
                  {p?.name}
                </p>
              ))}
            </div>

            {/* Buttons */}
            <div style={STYLES.HFirstSec.buttonSec}>
              <Button
                title={"DECOUVRIR TASTILES"}
                customStyle={{
                  border: `3px solid ${COLORS.black}`,
                  backgroundColor: COLORS.secondaryColor,
                  padding: "16px 32px",
                }}
              />
            </div>
            <div
              className="d-flex align-items-center justify-content-center flex-column flex-sm-row"
              style={{ gap: "12px", padding: "10px" }}
            >
              <div>
                <div
                  style={{
                    backgroundColor: COLORS.secondaryColor,
                    width: "127px",
                    height: "24px",
                    padding: "2px",
                    borderRadius: "2px",
                  }}
                ></div>
              </div>
              <div>
                <span style={STYLES.HFirstSec.rateText}>
                  RATED 4.9/5 BY 1,250 + HAPPY CUSTOMERS
                </span>
              </div>
            </div>
            {/* Section Image */}
            <div
              className="d-flex justify-content-center"
              style={{ ...STYLES.HImageSec, marginLeft: "50px" }}
            >
              <img
                src="/assets/images/cookies.png"
                alt="cookies"
                width={isDesktopOrLaptop ? "550px" : "400px"}
              />
            </div>

            {/* Bunble section */}
            <div
              className="d-flex flex-column justify-content-center p-3"
              style={{ ...STYLES.HBunbleSec }}
            >
              <p
                style={{
                  ...STYLES.HBunbleSec.title,
                  fontSize: isDesktopOrLaptop ? "64px" : "48px",
                  color: COLORS.black,
                  fontWeight: "bold",
                }}
              >
                PICK YOUR FLAVOUR
              </p>
              <div
                style={{
                  ...STYLES.HBunbleSec.content,
                  grid: isDesktopOrLaptop
                    ? "auto auto / auto auto auto auto"
                    : "auto auto / auto auto",
                }}
              >
                {BUNBLES.map((bunble, idx) => (
                  <Link
                    key={idx}
                    to={`/product/${bunble.title}/details`}
                    // className="d-flex flex-column"
                    style={{
                      ...STYLES.HBunbleSec.item,
                      height: isDesktopOrLaptop ? "390px" : "236px",
                      backgroundColor: bunble.color,
                      textDecoration: "none",
                    }}
                  >
                    <div
                      style={{
                        height: isDesktopOrLaptop ? "254px" : "128px",
                      }}
                      className="bg-white"
                    ></div>
                    <div
                      style={{
                        gap: "8px",
                        paddingTop: "3px",
                        color: COLORS.white,
                      }}
                    >
                      <span style={{ fontWeight: "bold", fontSize: "25px" }}>
                        {bunble.title}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="mb-5">
                <Button
                  title={"BUILD YOUR BUNBLE"}
                  customStyle={{
                    border: `3px solid ${COLORS.black}`,
                    backgroundColor: COLORS.secondaryColor,
                    padding: "16px 32px",
                  }}
                />
              </div>
            </div>

            {/* Motivation section */}
            <div
              className="d-flex flex-column align-items-center p-3 m-0"
              style={{ ...STYLES.HMotivationSec }}
            >
              <p
                style={{
                  ...STYLES.HBunbleSec.title,
                  fontSize: isDesktopOrLaptop ? "64px" : "48px",
                  color: COLORS.white,
                  fontWeight: "bold",
                }}
              >
                SO WHY CRAVIES?
              </p>
              <div
                className="d-flex flex-row flex-nowrap overflow-auto w-100"
                style={{
                  gap: "24px",
                  scrollbarWidth: "thin",
                }}
              >
                {MOTIVATIONS.map((motivation, idx) => (
                  <IngredientCard
                    key={idx}
                    title={motivation.title}
                    rotation={motivation.rotation}
                    description={motivation.description}
                  />
                ))}
              </div>
              <div className="mb-5">
                <Button
                  title={"BUILD YOUR BUNBLE"}
                  customStyle={{
                    border: `3px solid ${COLORS.black}`,
                    backgroundColor: COLORS.secondaryColor,
                    padding: "16px 32px",
                  }}
                />
              </div>
            </div>

            {/* Spoiler section */}
            <div
              className="d-flex flex-column align-items-center p-3 m-0"
              style={{ ...STYLES.HSpoilerSec }}
            >
              <SpoilerSecComponent />
            </div>

            {/* Subscription section */}
            <div
              className="d-flex flex-column flex-sm-row align-items-center p-3 m-0"
              style={{ ...STYLES.HImageSec }}
            >
              <div
                className="mx-sm-5"
                style={{
                  flex: 1,
                  borderRadius: "20px",
                  border: `3px solid ${COLORS.black}`,
                }}
              >
                <div
                  style={{
                    width: isDesktopOrLaptop ? "600px" : "328px",
                    height: isDesktopOrLaptop ? "1010px" : "326px",
                  }}
                ></div>
              </div>
              <div
                className="mb-5 d-flex flex-column mx-sm-5"
                style={{ flex: 2 }}
              >
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: isDesktopOrLaptop ? "64px" : "48px",
                    textAlign: isDesktopOrLaptop ? "start" : "center",
                  }}
                >
                  THE CRAVIES SUBSCRIPTION. IT'S KIND OF GENIUS.
                </p>
                {SUBSCRIPTIONS.map((subscription) => (
                  <Subscription
                    id={subscription.id}
                    title={subscription.title}
                    color={subscription.color}
                    description={subscription.description}
                  />
                ))}
              </div>
            </div>

            {/* Childhood section */}
            <div
              className="d-flex flex-column flex-sm-row align-items-center p-3  m-0"
              style={{ ...STYLES.HChildhoodSec }}
            >
              {!isDesktopOrLaptop && (
                <div
                  style={{
                    flex: 1,
                    borderRadius: "20px",
                    border: `3px solid ${COLORS.black}`,
                  }}
                >
                  <div
                    style={{
                      width: isDesktopOrLaptop ? "600px" : "328px",
                      height: isDesktopOrLaptop ? "540px" : "328px",
                    }}
                  ></div>
                </div>
              )}
              <div
                className="mb-5 d-flex flex-column align-items-sm-start mx-sm-5"
                style={{ flex: 2 }}
              >
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "18px",
                    textAlign: isDesktopOrLaptop ? "start" : "center",
                  }}
                >
                  FOUNDER MSG
                </p>
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: isDesktopOrLaptop ? "64px" : "48px",
                    textAlign: isDesktopOrLaptop ? "start" : "center",
                  }}
                >
                  MISS YOUR CHILDHOOD CEREAL?
                </p>
                <p
                  style={{
                    fontWeight: 400,
                    fontSize: "18px",
                    textAlign: isDesktopOrLaptop ? "start" : "center",
                  }}
                >
                  Lorem ipsu
                  <span>--- ALEX, FOUNDER OF CRAVIES</span>
                </p>
                <div>
                  <Button
                    title={"BUILD YOUR BUNBLE"}
                    customStyle={{
                      border: `3px solid ${COLORS.black}`,
                      backgroundColor: COLORS.secondaryColor,
                      padding: "16px 32px",
                    }}
                  />
                </div>
              </div>
              {isDesktopOrLaptop && (
                <div
                  className="mx-sm-5"
                  style={{
                    flex: 1,
                    borderRadius: "20px",
                    border: `3px solid ${COLORS.black}`,
                  }}
                >
                  <div
                    style={{
                      width: isDesktopOrLaptop ? "600px" : "328px",
                      height: isDesktopOrLaptop ? "540px" : "328px",
                    }}
                  ></div>
                </div>
              )}
            </div>

            {/* Testimonial section */}
            <div
              className="d-flex flex-column p-3 m-0"
              style={{ ...STYLES.HTestimonialSec }}
            >
              <div className="d-flex justify-content-between mx-sm-5">
                <p
                  style={{
                    ...STYLES.HBunbleSec.title,
                    fontSize: isDesktopOrLaptop ? "64px" : "48px",
                    fontWeight: "bold",
                    color: COLORS.black,
                  }}
                >
                  CEREALS. FEELING. CHAOS
                </p>

                {isDesktopOrLaptop && (
                  <div>
                    <Button
                      title={"BUILD YOUR BUNBLE"}
                      customStyle={{
                        border: `3px solid ${COLORS.black}`,
                        backgroundColor: COLORS.primaryColor,
                        padding: "16px 32px",
                      }}
                    />
                  </div>
                )}
              </div>

              <div
                className="d-flex flex-row flex-nowrap overflow-auto px-3"
                style={{
                  gap: "16px",
                  WebkitOverflowScrolling: "touch",
                }}
              >
                {TESTIMONIALS.map((t, idx) => (
                  <Testimonial
                    id={idx}
                    author={t.author}
                    description={t.decription}
                    device={isDesktopOrLaptop}
                  />
                ))}
              </div>
              {!isDesktopOrLaptop && (
                <div>
                  <Button
                    title={"BUILD YOUR BUNBLE"}
                    customStyle={{
                      border: `3px solid ${COLORS.black}`,
                      backgroundColor: COLORS.primaryColor,
                      padding: "16px 32px",
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
