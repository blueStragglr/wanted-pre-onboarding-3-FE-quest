const color = {
  point_blue: "#3885ff",
  placeholder: "#d9d9d9",
  disabled: "#aaa",
  border: "#e9e9e9",
  gray_text: "#bbb",
};

const mixin = {
  Flex: (
    direction = "row",
    justify = "center",
    align = "center",
    gap = "0"
  ) => `
  display: flex;
  flex-direction: ${direction};
  align-items:${align};
  justify-content:${justify};
  gap:${gap};
  `,
};

const Theme = {
  color,
  mixin,
};

export default Theme;
