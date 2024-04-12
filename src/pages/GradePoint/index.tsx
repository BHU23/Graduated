import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { GradeMultiCourse } from "../../interfacce";
import { calculateGradePoint } from "../../componet/calaculateFuntion";
import GradeMultiTerms from "../../componet/gradeMultuTarm";
interface GradePointProps {}

export default function GradePoint(props: GradePointProps) {
  const [gradeMultiCourses, setGradeMultiCourses] =
    useState<GradeMultiCourse[]>();
  // console.log(gradeMultiCourses);
  const graded = calculateGradePoint(gradeMultiCourses);

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
            Grade Point
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
        addTermButtom={0}
        term={3}
        subjects={[
          ["SCI02 1111-1", "SCI02 1111-1", "SCI02 1111-1", "bdb"],
          ["IST30 1102-1", "bdb"],
          ["vd", "SCI02 1111-1"],
        ]}
        gpStatus={1}
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
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: 2,
          }}
        >
          <Box
            sx={{
              borderRadius: "5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h3>Grade Point รวมของคุณคือ : </h3>
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
              {isNaN(graded[0]) ? 0 : graded[0]}
            </Typography>
          </Box>
          <Typography>
            GPAX : <b>{isNaN(graded[1]) ? 0 : graded[1]}</b> จาก{" "}
            <b>{isNaN(graded[2]) ? 0 : graded[2]}</b> หน่วยกิต
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
