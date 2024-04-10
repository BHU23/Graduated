import React from "react";
import Header from "./componet/header";
import { Box, Toolbar } from "@mui/material";
import {
  MemoryRouter,
  Route,
  Routes,
  BrowserRouter,
  matchPath,
  useLocation,
} from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import GradePoint from "./pages/GradePoint";
import GPA from "./pages/GPA";
import GPAX from "./pages/GPAX";
function Router(props: { children?: React.ReactNode }) {
  const { children } = props;
  if (typeof window === "undefined") {
    return <StaticRouter location="/Grade-Point">{children}</StaticRouter>;
  }

  return (
    <MemoryRouter initialEntries={["/Grade-Point"]} initialIndex={0}>
      {children}
    </MemoryRouter>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Box sx={{ width: "100%" }}>
        <Header></Header>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
          <Routes>
            <Route path="/Grade-Point" element={<GradePoint />} />
            <Route path="/GPA" element={<GPA />} />
            <Route path="/GPAX" element={<GPAX />} />
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
}
