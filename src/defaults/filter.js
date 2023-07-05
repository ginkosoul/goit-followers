import { theme } from "../styles/theme";

export const FILTER = Object.freeze({
  ALL: "all",
  FOLLOW: "followed",
  UNFOLLOW: "unfollowed",
});

export const options = [
  { label: "Show All", value: FILTER.ALL },
  { label: "Follow", value: FILTER.FOLLOW },
  { label: "Following", value: FILTER.UNFOLLOW },
];

export const customStyles = {
  option: (provided) => {
    return {
      ...provided,
      background: "transparent",
      outline: "none",
      color: "#FBFBFB",
      fontSize: "18px",
      fontWeight: "400",
      backgroundColor: "transparent",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        color: "#FF868D",
        fontWeight: "400",
      },
      textAlign: "left",
    };
  },
  control: (styles) => ({
    ...styles,
    border: "1px solid rgba(255, 255, 255, 0.4)",
    borderRadius: 8,
    boxShadow: theme.shadows.card,
    background: theme.colors.cardBackground[1],
    height: "50px",
    width: "240px",
    cursor: "pointer",
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return {
      ...provided,
      opacity,
      transition,
      right: 5,
      color: "#FBFBFB",
      padding: "8px 20px",
    };
  },
  menu: (provided) => {
    return {
      ...provided,
      background: theme.colors.cardBackground[1],
      borderRadius: "8px",
      blur: "5px",
      width: "240px",
    };
  },
  menuList: (base) => ({
    ...base,
    "::-webkit-scrollbar": {
      display: "none",
    },
  }),
  placeholder: () => {
    return {
      color: "rgba(255, 255, 255, 0.5)",
      position: "absolute",
      left: 10,
      padding: "8px 20px",
    };
  },
  indicatorSeparator: () => ({}),

  indicators: () => {
    return {
      cursor: "pointer",
    };
  },
  dropdownIndicator: (provided) => {
    return {
      ...provided,
      color: "rgba(255, 255, 255, 0.4)",
      "&:hover": {
        color: "#fbfbfb",
      },
    };
  },
  input: (provided) => {
    return {
      ...provided,
      margin: "0px",
      color: "#FBFBFB",
      padding: "8px 20px",
      maxWidth: "100%",
    };
  },
};
