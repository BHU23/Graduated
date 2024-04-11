import React, { useState } from "react";
import GradeDetailInput from "../../componet/gradeDetailInput";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button"; // Import Button component
import { v4 as uuidv4 } from "uuid";

interface GPAProps {}

interface GradeDetail {
  id: string;
  component: JSX.Element;
  credit: Number;
  graded: Number;
}

export default function GPA(props: GPAProps) {
  const initialDetailId = uuidv4();
  const initialGradeDetails: GradeDetail[] = [
    {
      id: initialDetailId, // Include the id property
      credit: 0,
      graded: 0,
      component: (
        <GradeDetailInput
          id={initialDetailId}
          key={initialDetailId}
          onDelete={(id) => deleteGradeDetail(id)}
          getCreditGraded={(credit, graded, id) =>
            setCredittGrade(credit,graded, id)
          }
        />
      ),
    },
  ];

  const [gradeDetails, setGradeDetails] = useState(initialGradeDetails);

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
        />
      ),
    };

    setGradeDetails((prevDetails) => [...prevDetails, newGradeDetail]);
  };
  console.log(gradeDetails);
//  const setCredittGrade = (credit: Number, graded: Number, id: string) => {
//    console.log("credit");
//    console.log(credit);
//    console.log("index");

//    const index = gradeDetails.findIndex((detail) => detail.id === id);
//    console.log(id);
   
//    console.log(index);
//   console.log("index");
//    if (index !== -1) {
//      const updatedGradeDetails = [...gradeDetails];
//      updatedGradeDetails[index] = {
//        ...updatedGradeDetails[index],
//        credit: credit,
//        graded: graded, // Update both credit and graded here
//      };
//      setGradeDetails(updatedGradeDetails); // Set the updated array once
//    }console.log(gradeDetails);
//   };
  const setCredittGrade = (credit: Number, graded: Number, id: string) => {
    console.log("credit:", credit);
    console.log("id:", id);

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


  const calculateGPA = (gradeDetails: GradeDetail[]): number => {
    let sumCreditGrade = 0;
    let sumCredits = 0;

    for (let i = 0; i < gradeDetails.length; i++) {
      sumCreditGrade +=
        Number(gradeDetails[i].graded) * Number(gradeDetails[i].credit);
      sumCredits += Number(gradeDetails[i].credit);
    }

    const gpa = sumCreditGrade / sumCredits;

    return Math.round(gpa * 100) / 100;
  };

  const gpa = calculateGPA(gradeDetails);
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
          <h3>{isNaN(gpa) ? 0 : gpa}</h3>
        </Box>
        <Box sx={{ width: 20 }}></Box>
      </Box>
    </Box>
  );
}
