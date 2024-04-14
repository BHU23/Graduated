// import React, { useState, useEffect } from "react";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import Autocomplete from "@mui/material/Autocomplete";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select, { SelectChangeEvent } from "@mui/material/Select";
// import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import { useTheme } from "@mui/material/styles";
// interface GradeDetailInputProps {
//   id: string; // Add id prop
//   onDelete: (id: string) => void; // Update onDelete to accept id
//   getCreditGraded: (credit: Number, graded: Number, id: string) => void;
//   subjects: String;
// }

// export default function GradeDetailInput(props: GradeDetailInputProps) {
//   const [credit, setCredit] = React.useState<Number>(0);
//   const [graded, setGraded] = React.useState<string | null>(null);
//   const [name, setName] = React.useState<string | null>(null);
//   const [selectedSubject, setSelectedSubject] = useState<String | null>(null);

//   useEffect(() => {
//     if (props.subjects) {
//       setSelectedSubject(props.subjects);
//       const setAuto = props.subjects
//         ? courses.find((course) => course.code === props.subjects)
//         : null;
//       if (setAuto) {
//         setCredit(Number(setAuto.credit));
//         setName(setAuto.name);
//       }
//     }
//   }, [props.subjects]);


//   const handleCourseChange = (
//     event: React.ChangeEvent<{}>,
//     value: GradeDetail | null
//   ) => {
//     if (value) {
//       setCredit(Number(value.credit));
//       setName(value.name);
//       setSelectedSubject(value.code);
//     }
//   };

//   const handleCreditChange = (event: SelectChangeEvent) => {
//     setCredit(Number(event.target.value));
//   };

//   const handleGradedChange = (event: SelectChangeEvent) => {
//     setGraded(event.target.value as string);
//   };
//   const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setName(event.target.value);
//   };

//   const handleDelete = () => {
//     props.onDelete(props.id);
//   };
//   const mapGradedToNumber = (graded: string | null): number => {
//     switch (graded) {
//       case "F":
//         return 0;
//       case "D":
//         return 1;
//       case "D+":
//         return 1.5;
//       case "C":
//         return 2;
//       case "C+":
//         return 2.5;
//       case "B":
//         return 3;
//       case "B+":
//         return 3.5;
//       case "S":
//         return 4;
//       case "A":
//         return 4;
//       default:
//         return 0;
//     }
//   };
//   const theme = useTheme();
//   const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

//   React.useEffect(() => {
//     const numericValue = mapGradedToNumber(graded);
//     props.getCreditGraded(credit, numericValue, props.id);
//   }, [credit, graded]);

//   return (
//     <Box
//       sx={{
//         width: "100%",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         flexWrap: isSmallScreen ? "wrap" : "nowrap",
//       }}
//     >
//       {/* First Row */}
//       <Box
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           "& > :not(style)": { m: 1 },
//         }}
//       >
//         <Autocomplete
//           id="country-select-demo"
//           sx={{
//             width :200
//             // width: isSmallScreen ? "100%" : 200,
//             // "& .MuiInputLabel-root": {
//             //   fontSize: isSmallScreen ? "0.5rem" : "inherit",
//             // },
//             // "& .MuiInputBase-input": {
//             //   fontSize: isSmallScreen ? "0.5rem" : "inherit",
//             // },
//           }}
//           onChange={handleCourseChange}
//           options={courses}
//           value={
//             selectedSubject
//               ? courses.find((course) => course.code === selectedSubject)
//               : null
//           }
//           autoHighlight
//           getOptionLabel={(option) => option.code}
//           renderOption={(props, option) => (
//             <Box
//               component="li"
//               sx={{
//                 "& > img": { mr: 1, width: 16, height: 16, flexShrink: 0 },
//                 fontSize: "0.8rem",
//               }}
//               {...props}
//             >
//               {option.code} ({option.name}){" "}
//               {option.credit === "0" ? "" : option.credit}
//             </Box>
//           )}
//           renderInput={(params) => (
//             <TextField
//               {...params}
//               label="เลือกรหัสรายวิชา"
//               inputProps={{
//                 ...params.inputProps,
//                 autoComplete: "new-password",
//               }}
//             />
//           )}
//         />

//         <TextField
//           id="course-input"
//           label="รายวิชา"
//           value={name}
//           sx={{
//             width: 300,
//             // ...(isSmallScreen && {
//             //   width: "150px",
//             //   "& .MuiInputLabel-root": { fontSize: "0.5rem" },
//             //   "& .MuiInputBase-input": { fontSize: "0.5rem" },
//             // }),
//           }}
//           onChange={handleNameChange}
//           InputLabelProps={{
//             shrink: Boolean(name),
//           }}
//         />
//       </Box>

//       {/* Second Row */}
//       <Box
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           "& > :not(style)": { m: 1 },
//         }}
//       >
//         {/* <FormControl sx={{ width: isSmallScreen ? "50%" : 100 }}> */}
//         <FormControl sx={{ width:  100 }}>
//           <InputLabel
//             id="credit-label"
//             shrink={Boolean(credit)}
//             // sx={{ fontSize: isSmallScreen ? "0.5rem" : "inherit" }}
//           >
//             หน่วยกิต
//           </InputLabel>
//           <Select
//             labelId="credit-label"
//             id="credit-select"
//             autoWidth
//             label="หน่วยกิต"
//             value={String(credit || 0)}
//             onChange={handleCreditChange}
//             // sx={{ fontSize: isSmallScreen ? "0.5rem" : "inherit" }}
//           >
//             {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
//               <MenuItem key={value} value={value}>
//                 {value === 0 ? "" : value}
//               </MenuItem>
//             ))}
//           </Select>
//         </FormControl>
//         {/* <FormControl sx={{ width: isSmallScreen ? "50%" : 100 }}> */}
//         <FormControl sx={{ width: 100 }}>
//           <InputLabel
//             id="graded-label"
//             shrink={Boolean(graded)}
//             // sx={{ fontSize: isSmallScreen ? "0.5rem" : "inherit" }}
//           >
//             เกรดที่ได้รับ
//           </InputLabel>
//           <Select
//             labelId="graded-label"
//             id="graded-select"
//             autoWidth
//             label="เกรดที่ได้รับ"
//             value={graded || ""}
//             onChange={handleGradedChange}
//             // sx={{ fontSize: isSmallScreen ? "0.5rem" : "inherit" }}
//           >
//             {["F", "D", "D+", "C", "C+", "B", "B+", "A", "S"].map((value) => (
//               <MenuItem key={value} value={value}>
//                 {value}
//               </MenuItem>
//             ))}
//           </Select>
//         </FormControl>
//         <DeleteForeverIcon
//           sx={{ width: 20, cursor: "pointer" }}
//           onClick={handleDelete}
//         />
//       </Box>
//     </Box>
//   );
// }

import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

interface GradeDetailInputProps {
  id: string; // Add id prop
  onDelete: (id: string) => void; // Update onDelete to accept id
  getCreditGraded: (credit: Number, graded: Number, id: string) => void;
  subjects: String;
}

export default function GradeDetailInput(props: GradeDetailInputProps) {
  const [credit, setCredit] = React.useState<Number>(0);
  const [graded, setGraded] = React.useState<string | null>(null);
  const [name, setName] = React.useState<string | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<String | null>(null);

  useEffect(() => {
    if (props.subjects) {
      setSelectedSubject(props.subjects);
      const setAuto = props.subjects
        ? courses.find((course) => course.code === props.subjects)
        : null;
      if (setAuto) {
        setCredit(Number(setAuto.credit));
        setName(setAuto.name);
      }
    }
  }, [props.subjects]);

  const handleCourseChange = (
    event: React.ChangeEvent<{}>,
    value: GradeDetail | null
  ) => {
    if (value) {
      setCredit(Number(value.credit));
      setName(value.name);
      setSelectedSubject(value.code);
    }
  };

  const handleCreditChange = (event: SelectChangeEvent) => {
    setCredit(Number(event.target.value));
  };

  const handleGradedChange = (event: SelectChangeEvent) => {
    setGraded(event.target.value as string);
  };
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleDelete = () => {
    props.onDelete(props.id);
  };
  const mapGradedToNumber = (graded: string | null): number => {
    switch (graded) {
      case "F":
        return 0;
      case "D":
        return 1;
      case "D+":
        return 1.5;
      case "C":
        return 2;
      case "C+":
        return 2.5;
      case "B":
        return 3;
      case "B+":
        return 3.5;
      case "S":
        return 4;
      case "A":
        return 4;
      default:
        return 0;
    }
  };
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  React.useEffect(() => {
    const numericValue = mapGradedToNumber(graded);
    props.getCreditGraded(credit, numericValue, props.id);
  }, [credit, graded]);

  return (
    <Box
      sx={{
        width: isSmallScreen ? "840" : "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "& > :not(style)": { m: 1 },
      }}
    >
      {!isSmallScreen ? (
        <>
          <Autocomplete
            id="country-select-demo"
            sx={{ width: 200 }}
            onChange={handleCourseChange}
            options={courses}
            value={
              selectedSubject
                ? courses.find((course) => course.code === selectedSubject)
                : null
            }
            autoHighlight
            getOptionLabel={(option) => option.code}
            renderOption={(props, option) => (
              <Box
                component="li"
                sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                {...props}
              >
                {option.code} ({option.name}){" "}
                {option.credit == "0" ? "" : option.credit}
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label="เลือกรหัสรายวิชา"
                inputProps={{
                  ...params.inputProps,
                  autoComplete: "new-password",
                }}
              />
            )}
          />
          <TextField
            id="course-inpu"
            label="รายวิชา"
            value={name}
            sx={{ width: 300 }}
            onChange={handleNameChange}
            InputLabelProps={{
              shrink: Boolean(name),
            }}
          />
          <FormControl sx={{ width: 100 }}>
            <InputLabel
              id="demo-simple-select-autowidth-label"
              shrink={Boolean(credit)}
            >
              หน่วยกิต
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              autoWidth
              label="หน่วยกิต"
              value={String(credit || 0)}
              onChange={handleCreditChange}
            >
              {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
                <MenuItem key={value} value={value}>
                  {value == 0 ? "" : value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ width: 100 }}>
            <InputLabel
              id="demo-simple-select-autowidth-label"
              shrink={Boolean(graded)}
            >
              เกรดที่ได้รับ
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              autoWidth
              label="เกรดที่ได้รับ"
              value={graded || ""}
              onChange={handleGradedChange}
            >
              {["F", "D", "D+", "C", "C+", "B", "B+", "A", "S"].map((value) => (
                <MenuItem key={value} value={value}>
                  {value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <DeleteForeverIcon
            sx={{ width: 20, cursor: "pointer" }}
            onClick={handleDelete}
          ></DeleteForeverIcon>
        </>
      ) : (
        <Box>
          <Grid container spacing={2}>
            {/* First Row */}
            <Grid item xs={12} sm={6}>
              <Autocomplete
                id="course-select-demo"
                sx={{ width: "100%" }}
                onChange={handleCourseChange}
                options={courses}
                value={
                  selectedSubject
                    ? courses.find((course) => course.code === selectedSubject)
                    : null
                }
                autoHighlight
                getOptionLabel={(option) => option.code}
                renderOption={(props, option) => (
                  <Box
                    component="li"
                    sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                    {...props}
                  >
                    {option.code} ({option.name}){" "}
                    {option.credit == "0" ? "" : option.credit}
                  </Box>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="เลือกรหัสรายวิชา"
                    inputProps={{
                      ...params.inputProps,
                      autoComplete: "new-password",
                    }}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="course-input"
                label="รายวิชา"
                value={name}
                sx={{ width: "100%" }}
                onChange={handleNameChange}
                InputLabelProps={{
                  shrink: Boolean(name),
                }}
              />
            </Grid>

            {/* Second Row */}
            <Grid item xs={6} sm={3}>
              <FormControl sx={{ width: "100%" }}>
                <InputLabel
                  id="demo-simple-select-autowidth-label"
                  shrink={Boolean(credit)}
                >
                  หน่วยกิต
                </InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  autoWidth
                  label="หน่วยกิต"
                  value={String(credit || 0)}
                  onChange={handleCreditChange}
                >
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
                    <MenuItem key={value} value={value}>
                      {value == 0 ? "" : value}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} sm={3}>
              <FormControl sx={{ width: "100%" }}>
                <InputLabel
                  id="demo-simple-select-autowidth-label"
                  shrink={Boolean(graded)}
                >
                  เกรดที่ได้รับ
                </InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  autoWidth
                  label="เกรดที่ได้รับ"
                  value={graded || ""}
                  onChange={handleGradedChange}
                >
                  {["F", "D", "D+", "C", "C+", "B", "B+", "A", "S"].map(
                    (value) => (
                      <MenuItem key={value} value={value}>
                        {value}
                      </MenuItem>
                    )
                  )}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} sm={3}>
              <DeleteForeverIcon
                sx={{ width: 20, cursor: "pointer" }}
                onClick={handleDelete}
              />
            </Grid>
          </Grid>
        </Box>
      )}
    </Box>
  );
}
interface GradeDetail {
  code: string;
  name: string;
  credit: string;
  suggested?: boolean;
}

const courses: readonly GradeDetail[] = [
  { code: "", name: "อื่นๆ", credit: "0" },
  { code: "ENG25 1010-1", name: "ENGINEERING GRAPHICS I", credit: "2" },
  { code: "IST20 1001-1", name: "DIGITAL LITERACY", credit: "2" },
  {
    code: "IST20 1002-1",
    name: "USE OF APPLICATION PROGRAMS FOR LEARNING",
    credit: "1",
  },
  { code: "SCI03 1001-1", name: "CALCULUS I", credit: "4" },
  { code: "SCI05 1001-1", name: "PHYSICS I", credit: "4" },
  { code: "SCI05 1191-1", name: "PHYSICS LABORATORY I", credit: "1" },

  {
    code: "ENG20 1010-1",
    name: "INTRODUCTION TO ENGINEERING PROFESSION",
    credit: "1",
  },
  { code: "ENG23 1001-1", name: "COMPUTER PROGRAMMING I", credit: "2" },
  {
    code: "IST20 1003-1",
    name: "LIFE SKILLS",
    credit: "3",
  },
  { code: "IST30 1101-1", name: "ENGLISH FOR COMMUNICATION 1", credit: "3" },
  { code: "SCI03 1002-1", name: "CALCULUS II", credit: "4" },
  { code: "SCI05 1002-1", name: "PHYSICS II", credit: "4" },
  { code: "SCI05 1192-1", name: "PHYSICS LABORATORY II", credit: "1" },

  {
    code: "ENG31 1001-1",
    name: "ENGINEERING MATERIALS",
    credit: "4",
  },
  {
    code: "IST20 1007-1",
    name: "CITIZENSHIP AND GLOBAL CITIZENS",
    credit: "3",
  },
  { code: "IST30 1102-1", name: "ENGLISH FOR COMMUNICATION 2", credit: "3" },
  { code: "SCI02 1111-1", name: "FUNDAMENTAL CHEMISTRY I", credit: "4" },
  {
    code: "SCI02 1112-1",
    name: "FUNDAMENTAL CHEMISTRY LABORATORY I",
    credit: "1",
  },
  { code: "SCI03 1005-1", name: "CALCULUS III", credit: "4" },

  { code: "", name: "อื่นๆ", credit: "0" },
];
