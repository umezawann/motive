import * as React from "react";
import Box from '@mui/material/Box'

export default function AuthLayout({ children }: { children: any }) {
  return (
    <Box sx={{ display: "flex" }}>
      {children}
    </Box>
  );
}
