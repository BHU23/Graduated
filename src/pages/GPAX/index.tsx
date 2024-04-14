import  { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { GradeMultiCourse } from "../../interfacce";
import { calculateGPAX } from "../../componet/calaculateFuntion";
import GradeMultiTerms from "../../componet/gradeMultuTarm";
import { Subjects } from "../GradePoint/dataGropSubject";

export default function GPAX() {
  const [gradeMultiCourses, setGradeMultiCourses] =
    useState<GradeMultiCourse[]>();
  // console.log(gradeMultiCourses);
  const gpax = calculateGPAX(gradeMultiCourses);

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
            GPAX
          </Typography>
        </Box>
        <Box sx={{ width: 200 }}></Box>
        <Box sx={{ width: 100 }}></Box>
        <Box sx={{ width: 100 }}></Box>
        <Box sx={{ width: 20 }}></Box>
      </Box>
      <GradeMultiTerms
        getGradeMultiCourses={(gradeMultiCourse) =>
          setGradeMultiCourses(gradeMultiCourse)
        }
        addTermButtom={1}
        term={1}
        subjects={Subjects[8]}
        gpStatus={0}
      ></GradeMultiTerms>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "& > :not(style)": { m: 1 },
        }}
      >
        <Box
          sx={{
            width: 780,
            textAlign: "center",
            border: "1px solid var(--primary-color)",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3>GPAX ของคุณคือ : </h3>
          <Typography
            variant="h6"
            component="h2"
            sx={{
              margin: 0,
              p: 0,
              fontWeight: 600,
              color: "var(--primary-color)",
              padding: 1,
            }}
          >
            {isNaN(gpax) ? 0 : gpax}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
