import { borderRight } from "@mui/system";
import Box from "./box";

const Color = () => {
  return (
    <div style={{ display: "flex", justifyContent: "flex-start" }}>
      <div style={{ lineHeight: "20px" }}>Less</div>

      <Box>
        <div style={{ opacity: "0.1", backgroundColor: "green" }} />
      </Box>
      <Box>
        <div style={{ opacity: "0.3" }} />
      </Box>
      <Box>
        <div style={{ opacity: "0.6" }} />
      </Box>
      <Box>
        <div style={{ opacity: "0.8" }} />
      </Box>
      <Box>
        <div style={{ opacity: "1.0", backgroundColor: "green" }} />
      </Box>

      <div>More</div>
    </div>
  );
};

export default Color;
