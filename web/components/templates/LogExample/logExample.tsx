import { borderRight } from "@mui/system";

const Box = ({ children, ...props }: { children?: any; props?: any }) => {
  console.log("box props", props);
  const { style } = props;
  return (
    <div
      style={{
        width: "18px",
        height: "18px",
        borderRadius: "2px",
        margin: "2.5px",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

const gray = "#ebedf0";
const paleGreen = "#9be9a8";
const lightgreen = "#40c463";
const green = "#30a14e";
const darkGreen = "#216e39";
const colors = [gray, paleGreen, lightgreen, green, darkGreen];

const Color = () => {
  return (
    <div style={{ display: "flex", justifyContent: "flex-start" }}>
      <div style={{ marginRight: "2.5px" }}>Less</div>
      {colors.map((color) => (
        <Box style={{ background: color }} />
      ))}
      <div style={{ marginLeft: "2.5px" }}>More</div>
    </div>
  );
};

export default Color;
