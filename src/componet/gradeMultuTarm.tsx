import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button"; // Import Button component
import { v4 as uuidv4 } from "uuid";
import GradeMultiCourses from "./gradeMultiCourses";
import { GradeMultiCourse } from "../interfacce";

interface GradeMultiTermsProps {
  addTermButtom: Number;
  term: Number;
  gpStatus: Number;
  subjects: String[][];
  getGradeMultiCourses: (gradeMultiCourses: GradeMultiCourse[]) => void;
}

export default function GradeMultiTerms(props: GradeMultiTermsProps) {
  const initialGradeMultiCourses: GradeMultiCourse[] = [];

  // Initialize gradeMultiCourses according to the number of terms
  for (let i = 1; i <= Number(props.term); i++) {
    const id = uuidv4();
    console.log(props.subjects[i - 1]);
    initialGradeMultiCourses.push({
      id: id,
      gpa: 0,
      gradePoint: 0,
      credit: 0,
      component: (
        <GradeMultiCourses
          id={id}
          key={id}
          gpStatus={props.gpStatus}
          term={i.toString()} // Set the term value as a string
          onDelete={(id) => deleteGradeMultiCourse(id)}
          getGPA_GradePoint={(gpa, gradePoint, credit, id) =>
            setGPA_GradePoint(gpa, gradePoint, credit, id)
          }
          subjects={props.subjects[i - 1]}
        />
      ),
    });
  }

  const [gradeMultiCourses, setGradeMultiCourses] = useState(
    initialGradeMultiCourses
  );

  const deleteGradeMultiCourse = (id: string) => {
    setGradeMultiCourses((prevGradeMultiCourses) =>
      prevGradeMultiCourses.filter((detail) => detail.id !== id)
    );
  };

  const addGradeMultiCourse = () => {
    const newGradeMultiCourseId = uuidv4();
    const newTermNumber = gradeMultiCourses.length + 1; // Get the next term number
    const newGradeMultiCourse: GradeMultiCourse = {
      id: newGradeMultiCourseId,
      gpa: 0,
      gradePoint: 0,
      credit: 0,
      component: (
        <GradeMultiCourses
          id={newGradeMultiCourseId}
          key={newGradeMultiCourseId}
          gpStatus={props.gpStatus}
          term={String(newTermNumber)} // Set the term as the next term number
          onDelete={(id) => deleteGradeMultiCourse(id)}
          getGPA_GradePoint={(gpa, gradePoiont, credit, id) =>
            setGPA_GradePoint(gpa, gradePoiont, credit, id)
          }
          subjects={[""]}
        />
      ),
    };

    setGradeMultiCourses((prevGradeMultiCourses) => [
      ...prevGradeMultiCourses,
      newGradeMultiCourse,
    ]);
  };

  const setGPA_GradePoint = (
    gpa: Number,
    gradePoiont: Number,
    credit: Number,
    id: string
  ) => {
    setGradeMultiCourses((prevGradeMultiCourses) => {
      const index = prevGradeMultiCourses.findIndex(
        (detail) => detail.id === id
      );
      if (index !== -1) {
        const updatedGradeMultiCourses = [...prevGradeMultiCourses];
        updatedGradeMultiCourses[index] = {
          ...updatedGradeMultiCourses[index],
          gpa: gpa,
          gradePoint: gradePoiont,
          credit: credit,
        };
        return updatedGradeMultiCourses;
      }
      return prevGradeMultiCourses;
    });
  };

  React.useEffect(() => {
    props.getGradeMultiCourses(gradeMultiCourses);
  }, [gradeMultiCourses]);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        "& > :not(style)": { m: 1 },
      }}
    >
      {gradeMultiCourses.map((gradeMultiCourses) => (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            "& > :not(style)": { m: 1 },
          }}
          key={gradeMultiCourses.id}
        >
          {gradeMultiCourses.component}
        </Box>
      ))}
      {props.addTermButtom == 1 ? (
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
            onClick={addGradeMultiCourse}
            sx={{
              width: 780,
              background: "#000",
              color: "#fff",
              ":hover": { color: "var(--dark-color)" },
            }}
          >
            เพิ่มภาคการศึกษา
          </Button>
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
}
