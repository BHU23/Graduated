import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { GradeMultiCourse } from "../../interfacce";
import { calculateGradePoint } from "../../componet/calaculateFuntion";
import GradeMultiTerms from "../../componet/gradeMultuTarm";
import TableGradePointHis from "./gradePiontHis";

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
      <GradeMultiTerms
        getGradeMultiCourses={(gradeMultiCourse) =>
          setGradeMultiCourses(gradeMultiCourse)
        }
        addTermButtom={0}
        term={3}
        subjects={subjects[4]}
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

const subjects = [
  [
    [
      //A
      "IST20 1001-1", //digital
      "IST20 1002-1", //useOfApp
      "IST20 1003-1", //lifeSkill
      "SCI03 1001-1", //cal1
      "SCI05 1001-1", //phy1
      "SCI05 1191-1", //Lphy1
    ],
    [
      "ENG25 1010-1", //eng Grap
      "IST30 1101-1", //eng1
      "SCI02 1111-1", //ch
      "SCI02 1112-1", //lch
      "SCI03 1002-1", //cal2
      "SCI05 1002-1", //phy2
      "SCI05 1192-1", //Lphy2
    ],
    [
      "ENG20 1010-1", //intro
      "ENG23 1001-1", //compro1
      "ENG31 1001-1", //eng mat
      "IST20 1007-1", //citizen
      "IST30 1102-1", //eng1
      "SCI03 1005-1", //cal3
    ],
  ], //B
  [
    [
      "ENG25 1010-1", //eng Grap
      "IST20 1001-1", //digital
      "IST20 1002-1", //useOfApp
      "SCI03 1001-1", //cal1
      "SCI05 1001-1", //phy1
      "SCI05 1191-1", //Lphy1
    ],
    [
      "IST20 1003-1", //lifeSkill
      "IST30 1101-1", //eng1
      "SCI02 1111-1", //ch
      "SCI02 1112-1", //lch
      "SCI03 1002-1", //cal2
      "SCI05 1002-1", //phy2
      "SCI05 1192-1", //Lphy2
    ],
    [
      "ENG20 1010-1", //intro
      "ENG23 1001-1", //compro1
      "ENG31 1001-1", //eng mat
      "IST20 1007-1", //citizen
      "IST30 1102-1", //eng2
      "SCI03 1005-1", //cal3
    ],
  ],
  //C
  [
    [
      "ENG25 1010-1", //eng Grap
      "IST20 1001-1", //digital
      "IST20 1002-1", //useOfApp
      "SCI03 1001-1", //cal1
      "SCI05 1001-1", //phy1
      "SCI05 1191-1", //Lphy1
    ],
    [
      "ENG23 1001-1", //compro1
      "IST20 1003-1", //lifeSkill
      "IST30 1101-1", //eng1
      "SCI03 1002-1", //cal2
      "SCI05 1002-1", //phy2
      "SCI05 1192-1", //Lphy2
    ],
    [
      "ENG20 1010-1", //intro
      "ENG31 1001-1", //eng mat
      "IST20 1007-1", //citizen
      "IST30 1102-1", //eng2
      "SCI02 1111-1", //ch
      "SCI02 1112-1", //Lch
      "SCI03 1005-1", //cal3
    ],
  ],
  //D
  [
    [
      "IST20 1003-1", //lifeSkill
      "IST20 1001-1", //digital
      "IST20 1002-1", //useOfApp
      "SCI03 1001-1", //cal1
      "SCI05 1001-1", //phy1
      "SCI05 1191-1", //Lphy1
    ],
    [
      "IST30 1101-1", //eng1
      "ENG25 1010-1", //eng Grap
      "SCI03 1002-1", //cal2
      "SCI02 1111-1", //ch
      "SCI02 1112-1", //Lch
      "SCI05 1002-1", //phy2
      "SCI05 1192-1", //Lphy2
    ],
    [
      "ENG20 1010-1", //intro
      "ENG23 1001-1", //compro1
      "ENG31 1001-1", //eng mat
      "IST20 1007-1", //citizen
      "IST30 1102-1", //eng2
      "SCI03 1005-1", //cal3
    ],
  ],
  //E
  [
    [
      "ENG25 1010-1", //eng Grap
      "IST20 1001-1", //digital
      "IST20 1002-1", //useOfApp
      "SCI03 1001-1", //cal1
      "SCI05 1001-1", //phy1
      "SCI05 1191-1", //Lphy1
    ],
    [
      "ENG20 1010-1", //intro
      "ENG23 1001-1", //compro1
      "IST20 1003-1", //lifeSkill
      "IST30 1101-1", //eng1
      "SCI03 1002-1", //cal2
      "SCI05 1002-1", //phy2
      "SCI05 1192-1", //Lphy2
    ],
    [
      "ENG31 1001-1", //eng mat
      "IST20 1007-1", //citizen
      "IST30 1102-1", //eng2
      "SCI02 1111-1", //ch
      "SCI02 1112-1", //Lch
      "SCI03 1005-1", //cal3
    ],
  ], //F
  [
    [
      "IST20 1001-1", //digital
      "IST20 1002-1", //useOfApp
      "IST20 1003-1", //lifeSkill
      "SCI03 1001-1", //cal1
      "SCI05 1001-1", //phy1
      "SCI05 1191-1", //Lphy1
    ],
    [
      "ENG20 1010-1", //intro
      "ENG25 1010-1", //eng Grap
      "ENG31 1001-1", //eng mat
      "IST30 1101-1", //eng1
      "SCI03 1002-1", //cal2
      "SCI05 1002-1", //phy2
      "SCI05 1192-1", //Lphy2
    ],
    [
      "ENG23 1001-1", //compro1
      "IST20 1007-1", //citizen
      "IST30 1102-1", //eng2
      "SCI02 1111-1", //ch
      "SCI02 1112-1", //Lch
      "SCI03 1005-1", //cal3
    ],
  ],
  //x1
  [
    [
      "IST20 1001-1", //digital
      "IST20 1002-1", //useOfApp
      "IST20 1007-1", //citizen
      "IST30 1101-1", //eng1
      "SCI02 1111-1", //ch
      "SCI02 1112-1", //Lch
      "SCI03 1001-1", //cal1
    ],
    [
      "ENG20 1010-1", //intro
      "ENG23 1001-1", //compro1
      "IST30 1102-1", //eng2
      "SCI05 1001-1", //phy1
      "SCI05 1191-1", //Lphy1
      "SCI03 1002-1", //cal2
    ],
    [
      "ENG25 1010-1", //eng Grap
      "ENG31 1001-1", //eng mat
      "IST20 1003-1", //lifeSkill
      "SCI03 1005-1", //cal3
      "SCI05 1002-1", //phy2
      "SCI05 1192-1", //Lphy2
    ],
  ], //x2
  [
    [
      "IST20 1001-1", //digital
      "IST20 1002-1", //useOfApp
      "IST20 1007-1", //citizen
      "IST30 1101-1", //eng1
      "SCI02 1111-1", //ch
      "SCI02 1112-1", //Lch
      "SCI03 1001-1", //cal1
    ],
    [
      "ENG20 1010-1", //intro
      "ENG31 1001-1", //eng mat
      "IST30 1102-1", //eng2
      "SCI05 1001-1", //phy1
      "SCI05 1191-1", //Lphy1
      "SCI03 1002-1", //cal2
    ],
    [
      "ENG23 1001-1", //compro1
      "ENG25 1010-1", //eng Grap
      "IST20 1003-1", //lifeSkill
      "SCI03 1005-1", //cal3
      "SCI05 1002-1", //phy2
      "SCI05 1192-1", //Lphy2
    ],
  ],
];
