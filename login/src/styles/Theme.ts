const color = {
  disabled: "#aaa",
  border: "#e9e9e9",
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
