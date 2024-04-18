import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { GradeMultiCourse } from "../../interfacce";
import { calculateGradePoint } from "../../componet/calaculateFuntion";
import GradeMultiTerms from "../../componet/gradeMultuTarm";
import TableGradePointHis from "./gradePiontHis";
import Button from "@mui/material/Button";
import { Subjects } from "./dataGropSubject";

export default function GradePoint() {
  const [gradeMultiCourses, setGradeMultiCourses] =
    useState<GradeMultiCourse[]>();

  const [gropEdIndex, setGropEd] = useState<number>(0);

  const handleButtonClick = (index: number) => {
    setGropEd(index);
  };

  const graded = calculateGradePoint(gradeMultiCourses);
  useEffect(() => {
    setGradeMultiCourses(undefined);
  }, [gropEdIndex]);
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
        <Box sx={{ width: 550 }}>
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
        <Box sx={{ width: 50 }}></Box>
        <Box sx={{ width: 50 }}></Box>
        <Box sx={{ width: 50 }}></Box>
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
        <Box sx={{ width: 780 }}>
          <h3>เลือกแผนการเรียน</h3>
        </Box>
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
        <Box
          sx={{
            width: 780,
            marginLeft: 0,
            "& > :not(style)": { mr: 2, mb: 2 },
          }}
        >
          {["a", "b", "c", "d", "e", "f", "x1", "x2","อื่นๆ"].map((label, index) => (
            <Button
              key={index}
              onClick={() => handleButtonClick(index)}
              variant={gropEdIndex === index ? "contained" : "outlined"}
              sx={{
                color:
                  gropEdIndex === index
                    ? "var(--white-color)"
                    : "var(--dark-color)",
                backgroundColor:
                  gropEdIndex === index
                    ? "var(--primary-color)"
                    : "transparent",
                border: "1px solid var(--gray-color)",
                "&:hover": {
                  backgroundColor:
                    gropEdIndex === index
                      ? "var(--primary-color)"
                      : "var(--gray-color)",
                  border: "none",
                },
                "&:active": {
                  backgroundColor:
                    gropEdIndex === index
                      ? "var(--primary-color)"
                      : "var(--primary-color)",
                  border: "none",
                },
              }}
            >
              {label}
            </Button>
          ))}
        </Box>
      </Box>
      <GradeMultiTerms
        getGradeMultiCourses={(gradeMultiCourse) =>
          setGradeMultiCourses(gradeMultiCourse)
        }
        addTermButtom={0}
        term={3}
        subjects={Subjects[gropEdIndex]}
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
            <h3>Grade Point รวม : </h3>
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
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "& > :not(style)": { m: 1 },
          // paddingTop:5
        }}
      >
        <Box sx={{ width: 780 }}>
          <h3>สถิติเกรดพ้อยย้อนหลัง 4 ปี (พ.ศ. 2562-2565)</h3>
        </Box>
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
        <TableGradePointHis gradePoint={isNaN(graded[0]) ? 0 : graded[0]} />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "& > :not(style)": { m: 1 },
          // paddingTop:5
        }}
      >
        <Box sx={{ width: 780 }}>
          <h5>
            หมายเหตุ :
            ข้อมูลทั้งหมดได้มาจากการสืบค้นโดยผู้จัดทำเองหากผิดพลาดประการใดจึงขออภัยไว้
            ณ ที่นี้
          </h5>
        </Box>
      </Box>
    </Box>
  );
}
