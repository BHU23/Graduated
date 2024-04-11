import React, { useState } from "react";
import GradeDetailInput from "../../componet/gradeDetailInput";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button"; // Import Button component
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { v4 as uuidv4 } from "uuid";

interface GPAProps {}

interface GradeDetail {
  id: string;
  component: JSX.Element;
}

export default function GPA(props: GPAProps) {
  const initialDetailId = uuidv4();
  const initialGradeDetails: GradeDetail[] = [
    {
      id: initialDetailId, // Include the id property
      component: (
        <GradeDetailInput
          id={initialDetailId}
          key={initialDetailId}
          onDelete={(id) => deleteGradeDetail(id)}
        />
      ),
    },
  ];

  const [gradeDetails, setGradeDetails] = useState(initialGradeDetails);

  const deleteGradeDetail = (id: string) => {
    console.log(id);
    console.log("id");
    setGradeDetails((prevDetails) =>
      prevDetails.filter((detail) => detail.id !== id)
    );
  };

  const addGradeDetail = () => {
    const newGradeDetailId = uuidv4();
    const newGradeDetail: GradeDetail = {
      id: newGradeDetailId,
      component: (
        <GradeDetailInput
          id={newGradeDetailId}
          key={newGradeDetailId}
          onDelete={(id) => deleteGradeDetail(id)}
        />
      ),
    };

    setGradeDetails((prevDetails) => [...prevDetails, newGradeDetail]);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "& > :not(style)": { m: 1 },
        }}
      >
        <Box sx={{ width: 300 }}>
          <Typography
            variant="h5"
            component="h2"
            sx={{
              margin: 0,
              p: 0,
              fontWeight: 600,
            }}
          >
            GPA
          </Typography>
        </Box>
        <Box sx={{ width: 200 }}></Box>
        <Box sx={{ width: 100 }}></Box>
        <Box sx={{ width: 100 }}></Box>
        <Box sx={{ width: 20 }}></Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "& > :not(style)": { m: 1 },
        }}
      >
        <Box sx={{ width: 400 }}>
          <h3>ภาคการเรียนที่ X</h3>
        </Box>
        <Box sx={{ width: 100 }}></Box>
        <Box sx={{ width: 100 }}></Box>
        <Box sx={{ width: 100 }}></Box>
        <Box sx={{ width: 20 }}></Box>
      </Box>
      {gradeDetails.map((detail) => (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "& > :not(style)": { m: 1 },
          }}
          key={detail.id}
        >
          {detail.component}
          {/* <DeleteForeverIcon
            sx={{ width: 20 }}
            onClick={() => deleteGradeDetail(detail.id)}
          /> */}
        </Box>
      ))}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "& > :not(style)": { m: 1 },
        }}
      >
        <Button
          onClick={addGradeDetail}
          sx={{
            width: 200,
            background: "#000",
            color: "#fff",
            ":hover": { color: "var(--dark-color)" },
          }}
        >
          เพิ่มรายวิชา
        </Button>
        <Box sx={{ width: 300 }}></Box>
        <Box sx={{ width: 100, textAlign: "center" }}>
          <h3>GPA</h3>
        </Box>
        <Box
          sx={{
            width: 100,
            textAlign: "center",
            border: "1px solid var(--primary-color)",
            borderRadius: "5px",
          }}
        >
          <h3>4.00</h3>
        </Box>
        <Box sx={{ width: 20 }}></Box>
      </Box>
    </Box>
  );
}
