import React from "react";
import Header from "./componet/header";
import Footer from "./componet/footer";
import { Box, Toolbar } from "@mui/material";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import GradePoint from "./pages/GradePoint";
import GPA from "./pages/GPA";
import GPAX from "./pages/GPAX";

export default function App() {
  return (
    <BrowserRouter>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          minHeight: "100vh", // Set minimum height to full viewport height
        }}
      >
        <Header></Header>
        <Box component="main" sx={{ flexGrow: 1, p: 3, width: "90%" }}>
          <Toolbar />
          <Routes>
            <Route path="/" element={<GradePoint />} />
            <Route path="/GPA" element={<GPA />} />
            <Route path="/GPAX" element={<GPAX />} />
          </Routes>
        </Box>
        
      </Box><Footer />
    </BrowserRouter>
  );
}
