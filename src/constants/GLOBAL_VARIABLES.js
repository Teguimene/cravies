export const COLORS = {
  primaryColor: "#E56924",
  secondaryColor: "#019C45",
  yellow: "#F8F400",
  boldYellow: "#F8CF00",
  black: "#2E2E2E",
  white: "#FFFFFF",
  brown: "#B48756",
  pink: "#F8B3CF",
  peach: "#FBF3E4",
  clearBrown: "#FBA474",
  grey: "#D1D1D1",
};

export const STYLES = {
  //  logo
  logo: {
    // color: COLORS.primaryColor,
    fontSize: "32px",
    fontWeight: "bold",
    textTransform: "uppercaseu",
    textDecoration: "None",
  },
  /** ********************* Navbar **********************/
  // nav-items
  navItemUnderline: (isActive, color) => ({
    display: "block",
    height: "3px",
    backgroundColor: isActive ? color : "transparent",
    transition: "all 0.3s ease",
  }),

  items: {
    // color: COLORS.black,
    fontFamily: "Space Grotesk",
    margin: 3,
    fontWeight: 700,
    fontSize: "bold",
    fontSize: "16px",
    lineHeight: "20px",
    verticalAlign: "middle",
  },

  // nav-buttons
  navButtons: {
    padding: "3px 10px",
    color: COLORS.white,
    borderRadius: "12px",
    boxShadow: "-4px 4px 0px 0px rgb(46, 46, 46, 1)",
  },

  buttonTitle: {
    fontFamily: '"Wosker Demo, sans-serif"',
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    textTransform: "uppercase",
    lineHeight: "20px",
    leadingTrim: "cap-heigh",
  },

  buttonCardTitle: {
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    textTransform: "uppercase",
    lineHeight: "20px",
  },

  buttonCounter: {
    position: "absolute",
    top: "-10px",
    right: "-10px",
    backgroundColor: COLORS.black,
    color: COLORS.white,
    borderRadius: "99px",
    padding: "2px 6px",
    gap: "7.2px",
    fontWeight: "bold",
    lineHeight: 1,
  },

  /** ********************* Body **********************/
  HFirstSec: {
    gap: "48px",
    subSec: {
      gap: "32px",
      textAlign: "center",
      boxTitle: {
        // padding: "16px",
        gap: "10px",
        boxShadow: "0.5px 0.5px 0.5px 0.5px rgb(0,0,0,0.1)",
        backgroundColor: COLORS.white,
        title: {
          textTransform: "uppercase",
          color: COLORS.primaryColor,
          fontFamily: "Wosker Demo",
          fontWeight: 400,
          fontStyle: "normal",
          //   lineHeight: "120px",
          letterSpacing: "0%",
        },
      },
    },
    buttonSec: {
      gap: "24px",
    },
    proteins: {
      color: COLORS.black,
      fontSize: "18px",
      fontWeight: 500,
      icon: {
        width: "20px",
        height: "20px",
        marginInline: "5px",
        borderRadius: "15px",
        backgroundColor: COLORS.black,
      },
    },
    rateText: {
      fontWeight: 700,
      marginLeft: "3px",
      fontSize: "16px",
      textTransform: "uppercase",
    },
  },
  HImageSec: {
    marginTop: "3px",
    paddingInline: "80px",
    gap: "48px",
  },
  HBunbleSec: {
    padding: "50px 40px",
    gap: "48px",
    title: {
      gap: "32px",
      fontWeight: 400,
      wordWrap: "break-word",
      textTransform: "uppercase",
    },
    content: {
      gap: "24px",
      display: "grid",
      gridGap: "10px",
    },
    item: {
      textAlign: "center",
      borderRadius: "20px",
      border: `3px solid ${COLORS.black}`,
      padding: "24px",
      gap: "16px",
    },
  },
  HMotivationSec: {
    padding: "50px 40px",
    gap: "48px",
    backgroundColor: COLORS.primaryColor,
    content: {
      textAlign: "center",
      marginInline: "20px",
      borderRadius: "20px",
      border: `3px solid ${COLORS.black}`,
    },
    item: {
      gap: "8px",
      backgroundColor: COLORS.white,
      padding: "24px",
      flex: 1,
      title: { fontWeight: 400, fontSize: "32px" },
    },
  },

  HSpoilerSec: {
    padding: "50px 40px",
    gap: "48px",
    backgroundColor: COLORS.secondaryColor,
    content: {
      textAlign: "center",
      marginInline: "20px",
      borderRadius: "20px",
      border: `3px solid ${COLORS.black}`,
    },
    item: {
      fontWeight: 700,
      fontSize: "16px",
      color: COLORS.white,
    },
  },

  HChildhoodSec: {
    padding: "50px 40px",
    gap: "48px",
    backgroundColor: COLORS.pink,
  },

  HTestimonialSec: {
    padding: "50px 40px",
    gap: "48px",
    backgroundColor: COLORS.white,
    testimonialList: {
      padding: "24px",
      gap: "24px",
      borderRadius: "20px",
      border: `3px solid ${COLORS.black}`,
      flex: "0 0 auto",
      card: {
        border: `3px solid ${COLORS.black}`,
        width: "240px",
        height: "280px",
        flex: "0 0 auto",
        author: {
          fontWeight: "bold",
          fontSize: "32px",
          textTransform: "uppercase",
        },
        description: {
          fontWeight: 500,
          fontSize: "18px",
        },
      },
    },
  },

  /** ********************* Footer **********************/
  footer: {
    title: {
      fontSize: "32px",
      fontWeight: "bold",
      textTransform: "uppercase",
    },
    content: {
      fontWeight: 400,
      fontSize: "16px",
      marginTop: "5px",
      color: COLORS.black,
    },
  },

  /** ********************* PDP **********************/
  pdp: {
    pdpFirstSec: {
      gap: "48px",
      title: {
        fontWeight: "bold",
        textTransform: "uppercase",
      },
      subTitle: {
        fontWeight: "bold",
        textTransform: "uppercase",
      },
      bunble: {
        width: "30px",
        height: "30px",
        marginInline: "5px",
        borderRadius: "15px",
        textAlign: "center",
        backgroundColor: COLORS.black,
      },
      rateText: {
        fontWeight: 700,
        marginLeft: "3px",
        fontSize: "16px",
        textTransform: "uppercase",
      },
      pack: {
        borderRadius: "16px",
        border: `3px solid ${COLORS.black}`,
        gap: "16px",
        percent: {
          padding: "4px 6px",
          gap: "8px",
          backgroundColor: COLORS.secondaryColor,
          fontSize: "12px",
          fontWeight: 700,
          borderRadius: "4px",
          color: COLORS.white,
        },
        promo: {
          fontSize: "16px",
          fontWeight: 400,
          textDecoration: "line-through",
        },
      },

      frequency: {
        color: COLORS.black,
        fontSize: "14px",
        fontWeight: 500,
        gap: "8px",
        icon: {
          width: "10px",
          height: "10px",
          marginInline: "5px",
          borderRadius: "15px",
          backgroundColor: COLORS.black,
        },
      },
    },
  },
};

export const NAV_ITEMS = [
  {
    title: "Shop",
    targetPath: "#shop",
  },

  {
    title: "Build your bunble",
    targetPath: "#byb",
  },

  {
    title: "About us",
    targetPath: "#about",
  },
];
