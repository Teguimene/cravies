import { useParams } from "react-router-dom";
import { NavBar } from "../../layouts/NavBar";
import { COLORS, STYLES } from "../../constants/GLOBAL_VARIABLES";
import { useMediaQuery } from "react-responsive";
import {
    BIG_FAQ_LIST,
  CHILHOODS,
  CIRCLE_INFOS,
  circleInfos,
  FAQ_LIST,
  FLAVOURS,
  GRVIES_TYPES,
  MOTIVATIONS,
  PACKS,
  PICK_FREQUENCIES,
} from "../../datas/HomeData";
import { Pack } from "../../components/Pack";
import { PackTitle } from "../../components/PackTitle";
import { Button } from "../../components/Button";
import { FAQItem } from "../../components/FAQItem";
import { IngredientCard } from "../../components/IngredientCard";
import SpoilerSecComponent from "../../components/SpoilerSecComponent";

export default function ProductDetailPage() {
  const { id } = useParams();
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  return (
    <div style={{ backgroundColor: COLORS.primaryColor }}>
      <NavBar textColor={COLORS.white} />

      <div className="wrapper">
        {/* Fisrt section */}
        <div
          className="d-flex flex-column flex-sm-row "
          style={{
            ...STYLES.pdp.pdpFirstSec,
            gap: "24px",
            padding: isDesktopOrLaptop ? "100px 80px" : "32px 16px",
          }}
        >
          <div className="col-12 col-sm-6">1</div>
          <div
            style={{
              border: `3px solid ${COLORS.black}`,
              padding: "20px",
              gap: "32px",
              borderRadius: "20px",
              backgroundColor: COLORS.white,
            }}
            className="col-12 col-sm-6"
          >
            <p>
              <span>stars</span>
              <span
                style={{
                  ...STYLES.pdp.pdpFirstSec.rateText,
                  fontSize: isDesktopOrLaptop ? "16px" : "14px",
                }}
              >
                RATED 4.9/5 BY 1,250 + HAPPY CUSTOMERS
              </span>
            </p>
            <p
              style={{
                ...STYLES.pdp.pdpFirstSec.title,
                fontSize: isDesktopOrLaptop ? "56px" : "40px",
              }}
            >
              Variety pack
            </p>
            <p style={{ fontSize: "18px", fontWeight: 400 }}>
              We take the cereals you loved as a kid and give them a health
              reboot - same great taste, none of the junk
            </p>
            <div className="d-flex flex-column">
              <PackTitle number={"1"} title={"Pick your pack"} />
              {PACKS.map((pack, idx) => (
                <Pack
                  key={idx}
                  backgroundColor={pack.backgroundColor}
                  leftDescription={pack.leftDescription}
                  leftTile={pack.leftTile}
                  promo={pack.promo}
                  price={pack.price}
                  percent={pack.percent}
                />
              ))}

              <PackTitle number={"2"} title={"Pick your flavours"} />
              {FLAVOURS.map((flavour, idx) => (
                <Pack
                  key={idx}
                  backgroundColor={flavour.backgroundColor}
                  leftTile={flavour.leftTile}
                  showBestSeller={flavour.showBestSeller}
                  isFlavour={true}
                />
              ))}

              <PackTitle number={"3"} title={"Pick your frequency"} />
              <div
                className="d-flex flex-column"
                style={{
                  gap: "16px",
                  padding: "20px",
                  borderRadius: "16px",
                  border: `solid 3px ${COLORS.black}`,
                }}
              >
                <div
                  style={{ gap: "16px" }}
                  className=" d-flex flex-column flex-sm-row align-item-sm-center"
                >
                  <div className="d-flex flex-column flex-sm-row w-100 justify-content-sm-between">
                    <div className="d-flex">
                      <input
                        style={{ width: "24px", height: "24px" }}
                        type="radio"
                        checked={true}
                      />
                      <span
                        style={{
                          fontSize: "18px",
                          fontWeight: 700,
                          textTransform: "uppercase",
                        }}
                        className="mx-2"
                      >
                        CRAVIES MEMBER
                      </span>
                    </div>

                    <div
                      className="d-flex align-items-center"
                      style={{ gap: "8px" }}
                    >
                      <span style={STYLES.pdp.pdpFirstSec.pack.promo}>
                        68,00€
                      </span>
                      <span
                        style={{
                          fontSize: "16px",
                          color: COLORS.secondaryColor,
                          fontWeight: "bold",
                          marginInline: "5px",
                        }}
                      >
                        49€
                      </span>
                      <span style={STYLES.pdp.pdpFirstSec.pack.percent}>
                        -20%
                      </span>
                    </div>
                  </div>
                </div>
                <select
                  style={{
                    borderRadius: "12px",
                    padding: "16px 20px",
                    gap: "12px",
                    border: `2px solid ${COLORS.black}`,
                    backgroundColor: COLORS.white,
                  }}
                >
                  <option>Every 14 days</option>
                </select>
                {/* options */}
                <div className="d-flex flex-column flex-sm-row justify-content-space-between">
                  {PICK_FREQUENCIES.map((p) => (
                    <p
                      className="d-flex align-items-center"
                      style={STYLES.pdp.pdpFirstSec.frequency}
                    >
                      <span
                        style={STYLES.pdp.pdpFirstSec.frequency.icon}
                      ></span>
                      <span>{p.name}</span>
                    </p>
                  ))}
                </div>
                {/* Non-member */}
                <div
                  style={{
                    borderRadius: "16px",
                    padding: "20px",
                    gap: "16px",
                    border: `3px solid ${COLORS.grey}`,
                  }}
                  className="d-flex  w-100 justify-content-between"
                >
                  <div className="d-flex">
                    <input
                      style={{ width: "24px", height: "24px" }}
                      type="radio"
                      checked={false}
                    />
                    <span
                      style={{
                        fontSize: isDesktopOrLaptop ? "18px" : "16px",
                        fontWeight: 700,
                        textTransform: "uppercase",
                      }}
                      className="mx-2"
                    >
                      NON-MEMBER
                    </span>
                  </div>

                  <div style={{ gap: "8px" }}>
                    <span
                      style={{
                        fontSize: "16px",
                        color: COLORS.black,
                        fontWeight: "bold",
                        marginInline: "5px",
                      }}
                    >
                      33€
                    </span>
                  </div>
                </div>
                {/* Btn-add to card */}
                <Button
                  title={"ADD TO CARD"}
                  cardCount={"$29,00"}
                  className={"d-flex justify-content-between"}
                  customStyle={{
                    border: `3px solid ${COLORS.black}`,
                    backgroundColor: COLORS.secondaryColor,
                    padding: "16px 20px",
                  }}
                />

                {/* Avatars */}
                <div className="d-flex">
                  {CIRCLE_INFOS.map((c) => (
                    <div className="col-4 d-flex flex-column align-items-center">
                      <p
                        style={{
                          borderRadius: "999px",
                          border: `3px solid ${COLORS.black}`,
                          height: "92px",
                          width: "92px",
                          padding: "6px",
                          gap: "10px",
                        }}
                      ></p>
                      <p style={{ fontSize: "14px", fontWeight: 400 }}>
                        {c.title}
                      </p>
                    </div>
                  ))}
                </div>

                {/* FAQ */}
                <div style={{ maxWidth: "520px" }}>
                  {FAQ_LIST.map((faq, idx) => (
                    <FAQItem
                      key={idx}
                      question={faq.question}
                      answer={faq.answer}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Favorite childhood section */}
        <div
          className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center"
          style={{
            backgroundColor: COLORS.pink,
            padding: isDesktopOrLaptop ? "100px 80px" : "72px 16px",
            gap: isDesktopOrLaptop ? "80px" : "32px",
            borderTop: `3px solid ${COLORS.black}`,
          }}
        >
          <div
            className={`${!isDesktopOrLaptop && "w-100"}`}
            style={{
              borderRadius: "14px",
              border: `3px solid ${COLORS.black}`,
              width: isDesktopOrLaptop ? "600px" : "328px",
              height: isDesktopOrLaptop ? "650px" : "328px",
            }}
          ></div>

          <div className="col-sm-6 d-flex flex-column ">
            <p
              style={{
                ...STYLES.pdp.pdpFirstSec.title,
                fontSize: isDesktopOrLaptop ? "50px" : "40px",
              }}
            >
              Your Favorite childhood cereal, all grown up
            </p>
            {CHILHOODS.map((childhood) => (
              <div
                className="w-100 my-1"
                style={{
                  padding: "12px",
                  gap: "8px",
                  border: `3px solid ${COLORS.black}`,
                  backgroundColor: "white",
                  borderRadius: "20px",
                }}
              >
                <p
                  style={{
                    fontSize: "32px",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    color: childhood.titleColor,
                  }}
                >
                  {childhood.title}
                </p>
                <p style={{ fontSize: "18px", fontWeight: 400 }}>
                  {childhood.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Quality section */}
        <div
          className="d-flex flex-column align-items-center"
          style={{
            backgroundColor: COLORS.yellow,
            padding: isDesktopOrLaptop ? "100px 80px" : "72px 16px",
            gap: isDesktopOrLaptop ? "80px" : "32px",
            borderTop: `3px solid ${COLORS.black}`,
          }}
        >
          <p
            style={{
              ...STYLES.pdp.pdpFirstSec.title,
              fontSize: isDesktopOrLaptop ? "50px" : "40px",
              color: COLORS.secondaryColor,
              textAlign: "center",
            }}
          >
            Made with high quality, natural ingredients
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
                // rotation={0}
                description={motivation.description}
              />
            ))}
          </div>
        </div>

        {/* Gravies section */}
        <div
          className="d-flex flex-column "
          style={{
            backgroundColor: COLORS.white,
            padding: isDesktopOrLaptop ? "100px 80px" : "72px 16px",
            gap: isDesktopOrLaptop ? "80px" : "32px",
            borderTop: `3px solid ${COLORS.black}`,
          }}
        >
          <p
            style={{
              ...STYLES.pdp.pdpFirstSec.title,
              fontSize: isDesktopOrLaptop ? "50px" : "40px",
              color: COLORS.black,
            }}
          >
            GRAVIES never makes the bowl without...
          </p>
          <div className="row d-flex">
            {GRVIES_TYPES.map((gravie, idx) => (
              <div
                key={idx}
                className="col-6 col-sm-2 mx-sm-3 d-flex flex-column align-items-center"
              >
                <p
                  className="mx-3"
                  style={{
                    borderRadius: "999px",
                    border: `3px solid ${COLORS.black}`,
                    height: "201px",
                    width: "201px",
                    padding: "6px",
                    gap: "10px",
                    backgroundColor: gravie.color,
                  }}
                ></p>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: 400,
                    textTransform: "uppercase",
                  }}
                >
                  {gravie.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Not the same */}
        <div
          className="d-flex flex-column "
          style={{
            backgroundColor: COLORS.primaryColor,
            padding: isDesktopOrLaptop ? "100px 80px" : "72px 16px",
            gap: isDesktopOrLaptop ? "80px" : "32px",
            borderTop: `3px solid ${COLORS.black}`,
          }}
        >
          <p
            style={{
              ...STYLES.pdp.pdpFirstSec.title,
              fontSize: isDesktopOrLaptop ? "50px" : "40px",
              color: COLORS.white,
            }}
          >
            WE're not the same as regular cereals...
          </p>
        </div>

        {/* Spoiler */}
        <div
          className="d-flex flex-column "
          style={{
            backgroundColor: COLORS.secondaryColor,
            padding: isDesktopOrLaptop ? "100px 80px" : "72px 16px",
            gap: isDesktopOrLaptop ? "80px" : "32px",
            borderTop: `3px solid ${COLORS.black}`,
          }}
        >
          <SpoilerSecComponent />
        </div>

        {/* FAQ */}
        <div
          className="row text-center text-sm-start"
          style={{
            backgroundColor: COLORS.pink,
            padding: isDesktopOrLaptop ? "100px 80px" : "72px 16px",
            gap: isDesktopOrLaptop ? "80px" : "32px",
            borderTop: `3px solid ${COLORS.black}`,
          }}
        >
          <div className="col-12 col-sm-5 mb-sm-0">
            <p
              style={{
                fontSize: "18px",
                fontWeight: 700,
                color: COLORS.primaryColor,
              }}
            >
              FREQUENTLY ASKED QUESTIONS
            </p>
            <p
              style={{
                ...STYLES.pdp.pdpFirstSec.title,
                fontSize: isDesktopOrLaptop ? "50px" : "40px",
                color: COLORS.primaryColor,
              }}
            >
              Questions?
              <br />
              We Answer!
            </p>
            <div
              style={{
                padding: "12px",
                borderRadius: "20px",
                gap: "8px",
                border: `3px solid ${COLORS.black}`,
                backgroundColor: COLORS.boldYellow,
              }}
            >
              <p
                style={{
                  fontSize: "32px",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                Need help?
              </p>
              <p style={{ fontSize: "18px", fontWeight: 400 }}>
                Consultez notre centre d’aide, ou sinon vous pouvez contacter
                notre Customer Care du lundi au vendredi 9h à 18h.
              </p>
            </div>
          </div>

          <div className="col-12 col-sm-6">
            <div
              style={{
                gap: "16px",
                padding: "20px",
                borderRadius: "16px",
                border: `solid 3px ${COLORS.black}`,
                backgroundColor: COLORS.white,
              }}
            >
              {BIG_FAQ_LIST.map((faq, idx) => (
                <FAQItem
                  key={idx}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
