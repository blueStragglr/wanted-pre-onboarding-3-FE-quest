const colors = {
  black: "#000000",
  darkGray: "#7c7c7c",
  gray: "#bfbfbf",
  white: "#ffffff",
  red: "#e36675",
  blue: "#4a90e2",
};

const font = {
  header: `
      font-family: 'pretendard-bold';
      font-size: 32px;
    `,
};

const flex = {
  flexCenter: `
      display: flex;
      justify-content: center;
      align-items: center;
    `,
  flexCenterColumn: `
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `,
};

const theme = {
  colors,
  font,
  flex,
};

export default theme;
