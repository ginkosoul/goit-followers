export const theme = Object.freeze({
  colors: {
    white: "#fff",
    gray: "#9e9e9e",
    light: "#f2f2f2",
    dark: "#373737",
    primary: "#ebd8ff",
    accent: "#5cd3a8",
    cardBackground: [
      "linear-gradient(142deg, #471ca9 0%, #5736a3 69.1%, #4b2a99 100%)",
      "linear-gradient(0deg,rgba(83, 61, 186, 0.7) 0%,rgba(80, 48, 154, 0.9) 36%,rgba(106, 70, 165, 0.9) 61%,rgba(133, 93, 175, 0.9) 100%)",
    ],
  },
  fontSizes: {
    small: "14px",
    medium: "18px",
    large: "22px",
    xl: "30px",
  },
  spacing: (value) => `${4 * value}px`,
  shadows: {
    card: "-2.5776965618133545px 6.873857021331787px 20.621572494506836px 0px rgba(0, 0, 0, 0.23)",
    splitter: `0px 3.4369285106658936px 2.5776965618133545px 0px #fbf8ff inset,
      0px 3.4369285106658936px 3.4369285106658936px 0px rgba(0, 0, 0, 0.06),
      0px -1.7184642553329468px 3.4369285106658936px 0px #ae7be3 inset`,
    button:
      "0px 3.4369285106658936px 3.4369285106658936px 0px rgba(0, 0, 0, 0.25)",
  },
  animation: {
    cubicBezier: "0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98)",
  },
});
