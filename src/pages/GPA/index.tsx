import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import GradeMultiCourses from "../../componet/gradeMultiCourses";

export default function GPA() {
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
      <GradeMultiCourses
        term={"X"}
        id={"1"}
        gpStatus={0}
        key={1}
        onDelete={() => {}}
        getGPA_GradePoint={() => {}}
        subjects={[""]}
      />
    </Box>
  );
}
