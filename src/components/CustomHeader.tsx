const customStyle = {
  borderBottom: "1px solid black",
  height: "7vh",
  fontSize: "3rem",
  textAlign: "left" as const,
  paddingLeft: "30px",
  lineHeight: "5rem",
};

const CustomHeader = () => (
  <header style={customStyle}>Wanted Pre-onboarding course</header>
);

export default CustomHeader;
