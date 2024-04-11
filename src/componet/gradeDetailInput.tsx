import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";


interface GradeDetailInputProps {
  id: string; // Add id prop
  onDelete: (id: string) => void; // Update onDelete to accept id
}

interface GradeDetail {
  code: string;
  name: string;
  credit: string;
  suggested?: boolean;
}

const courses: readonly GradeDetail[] = [
  { code: "", name: "อื่นๆ", credit: "0" },
  { code: "AD", name: "Andorra", credit: "4" },
];

export default function GradeDetailInput(props: GradeDetailInputProps) {
  const [credit, setCredit] = React.useState<string | null>(null);
  const [graded, setGraded] = React.useState<string | null>(null);
  const [name, setName] = React.useState<string | null>(null);

  const handleCourseChange = (
    event: React.ChangeEvent<{}>,
    value: GradeDetail | null
  ) => {
    if (value) {
      setCredit(value.credit);
      setName(value.name);
    }
  };

  const handleCreditChange = (event: SelectChangeEvent) => {
    setCredit(event.target.value as string);
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

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "& > :not(style)": { m: 1 },
      }}
    >
      <Autocomplete
        id="country-select-demo"
        sx={{ width: 200 }}
        onChange={handleCourseChange}
        options={courses}
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
            label="เลือกรายวิชา"
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
          value={credit || ""}
          onChange={handleCreditChange}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
            <MenuItem key={value} value={value}>
              {value}
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
          {["F", "D", "D+", "C", "C+", "B", "B+", "S", "A"].map((value) => (
            <MenuItem key={value} value={value}>
              {value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <DeleteForeverIcon
        sx={{ width: 20 }}
        onClick={handleDelete}
      ></DeleteForeverIcon>
    </Box>
  );
}
