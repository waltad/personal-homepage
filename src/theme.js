const colorNames = {
  antiFlashWhite: "F2F3F4",
  blueRuin: "#0366D6",
  chainGangGrey: "#6E7E91",
  coldMorning: "#E5E5E5",
  darkGrey: "rgba(54, 54, 54, 0.72)",
  nero: "#252525",
  poolWater: "#2188FF",
  saltyIce: "CDE0F7",
  scenicWater: "8CC2FF",
  sparklingFrost: "rgba(209, 213, 218, 0.3)", //#d1d5da
  washMe: "#FBFBFE",
  white: "#FFFFFF",
};

const common = {
  breakpoints: {
    mobileMax: 767,
    tabletVerticalMax: 991,
    tabletHorizontalMax: 1199,
  },

  boxShadow: "0px 16px 58px 0px rgba(9, 10, 51, 0.03), 0px -2px 50px 0px rgba(9, 10, 51, 0.02)",

  borderRadius: "4px",
};

export const themeLight = {
  ...common,
  colors: {
    primary: colorNames.blueRuin,
    textPrimary: colorNames.nero,
    site: {
      background: colorNames.washMe,
      text: colorNames.chainGangGrey,
    },
    buttonLink: {
      text: colorNames.white,
      bordre: colorNames.sparklingFrost,
      shadow: colorNames.scenicWater,
    },
    boxBackground: colorNames.white,
    headerline: colorNames.coldMorning,
    title: {
      border: colorNames.antiFlashWhite,
      borderHover: colorNames.saltyIce,
      header: colorNames.blueRuin,
    },
    themeSwitch: {
      background: colorNames.coldMorning,
      icon: colorNames.white,
    },
  },
};