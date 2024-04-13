import React, { useState, useEffect } from "react";
import GradeDetailInput from "./gradeDetailInput";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button"; // Import Button component
import { v4 as uuidv4 } from "uuid";
import { GradeDetail } from "../interfacce";
import { calculateGPA } from "./calaculateFuntion";

interface GradeMultiCoursesProps {
  id: string;
  term: string;
  gpStatus: Number;
  onDelete: (id: string) => void;
  getGPA_GradePoint: (
    gpa: Number,
    gradePoint: Number,
    credit: Number,
    id: string
  ) => void;
  subjects: String[] | null;
}

export default function GradeMultiCourses(props: GradeMultiCoursesProps) {
  const [gradeDetails, setGradeDetails] = useState<GradeDetail[]>([]);

  // Populate gradeDetails state based on subjects
  useEffect(() => {
    if (props.subjects) {
      const initialGradeDetails: GradeDetail[] = props.subjects.map(
        (code) => {
          console.log(code);
          console.log("code");
          const id = uuidv4();
          return {
            id: id,
            credit: 0,
            graded: 0,
            component: (
              <GradeDetailInput
                key={id}
                id={id}
                onDelete={(id) => deleteGradeDetail(id)}
                getCreditGraded={(credit, graded, id) =>
                  setCredittGrade(credit, graded, id)
                }
                subjects={code} // Pass the subjects array to GradeDetailInput
              />
            ),
          };
        }
      );
      setGradeDetails(initialGradeDetails);
    } else {
      const initialDetailId = uuidv4();
      const initialGradeDetails: GradeDetail[] = [
        {
          id: initialDetailId,
          credit: 0,
          graded: 0,
          component: (
            <GradeDetailInput
              id={initialDetailId}
              key={initialDetailId}
              onDelete={(id) => deleteGradeDetail(id)}
              getCreditGraded={(credit, graded, id) =>
                setCredittGrade(credit, graded, id)
              }
              subjects={""}
            />
          ),
        },
      ];
      setGradeDetails(initialGradeDetails);
    }
  }, [props.subjects]);

  const deleteGradeDetail = (id: string) => {
    setGradeDetails((prevDetails) =>
      prevDetails.filter((detail) => detail.id !== id)
    );
  };

  const addGradeDetail = () => {
    const newGradeDetailId = uuidv4();
    const newGradeDetail: GradeDetail = {
      id: newGradeDetailId,
      credit: 0,
      graded: 0,
      component: (
        <GradeDetailInput
          id={newGradeDetailId}
          key={newGradeDetailId}
          onDelete={(id) => deleteGradeDetail(id)}
          getCreditGraded={(credit, graded, id) =>
            setCredittGrade(credit, graded, id)
          }
          subjects={""}
        />
      ),
    };

    setGradeDetails((prevDetails) => [...prevDetails, newGradeDetail]);
  };

  const setCredittGrade = (credit: Number, graded: Number, id: string) => {
    setGradeDetails((prevDetails) => {
      const index = prevDetails.findIndex((detail) => detail.id === id);
      if (index !== -1) {
        const updatedDetails = [...prevDetails];
        updatedDetails[index] = {
          ...updatedDetails[index],
          credit: credit,
          graded: graded,
        };
        return updatedDetails;
      }
      return prevDetails;
    });
  };

  const sumValue = calculateGPA(gradeDetails);
  React.useEffect(() => {
    // console.log(sumValue);
    props.getGPA_GradePoint(sumValue[0], sumValue[1], sumValue[2], props.id);
  }, [sumValue[0], sumValue[1], sumValue[2]]);
  return (
    <>
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
          <h3>ภาคการเรียนที่ {props.term}</h3>
        </Box>
        <Box sx={{ width: 50 }}></Box>
        <Box sx={{ width: 50 }}></Box>
        <Box sx={{ width: 50 }}></Box>
        <Box sx={{ width: 20 }}></Box>
      </Box>
      {gradeDetails.map((detail) => (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          key={detail.id}
        >
          {detail.component}
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
        {props.gpStatus == 0 ? (
          <>
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
              <h3>{isNaN(sumValue[0]) ? 0 : sumValue[0]}</h3>
            </Box>
          </>
        ) : (
          <>
            <Box sx={{ width: 200 }}></Box>
            <Box sx={{ width: 200, textAlign: "center" }}>
              <h3>GradePoint : ภาค</h3>
            </Box>
            <Box
              sx={{
                width: 100,
                textAlign: "center",
                border: "1px solid var(--primary-color)",
                borderRadius: "5px",
              }}
            >
              <h3>{isNaN(sumValue[1]) ? 0 : sumValue[1]}</h3>
            </Box>
          </>
        )}
        <Box sx={{ width: 20 }}></Box>
      </Box>
    </>
  );
}
