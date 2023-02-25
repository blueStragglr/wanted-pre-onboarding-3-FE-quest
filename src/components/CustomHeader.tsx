const customStyle = {
  borderBottom: "1px solid black",
  height: "5rem",
  fontSize: "3rem",
  textAlign: "left" as const,
  paddingLeft: "30px",
  lineHeight: "5rem",
};

const CustomHeader = () => <header style={customStyle}>헤더</header>;

export default CustomHeader;
