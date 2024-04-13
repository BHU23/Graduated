import * as React from "react";
import Table from "@mui/joy/Table";
interface GradePointHisProps {
  gradePoint: number;
}

function createDataGradePointHis(
  name: string,
  y2562: number,
  y2563: number,
  y2564: number,
  y2565: number
) {
  return { name, y2562, y2563, y2564, y2565 };
}

const rows = [
  createDataGradePointHis("วิศวกรรมปิโตรเลียมและเทคโนโลยีธรณี", 120.5,125, 6.0, 24),
  createDataGradePointHis("วิศวกรรมการผลิตอัตโนมัติและหุ่นยน", 111.5, 9.0, 37, 4.3),
  createDataGradePointHis("วิศวกรรมเกษตรและอาหาร", 84,80, 24, 6.0),
  createDataGradePointHis("วิศวกรรมขนส่งและโลจิสติกส์", 116.5, 113.5, 67, 4.3),
  createDataGradePointHis("วิศวกรรมคอมพิวเตอร์", 132, 139.5, 49, 3.9),
  createDataGradePointHis("วิศวกรรมเคมี", 80, 80, 24, 4.0),
  createDataGradePointHis("วิศวกรรมเครื่องกล", 139.5, 135.5, 37, 4.3),
  createDataGradePointHis("วิศวกรรมเซรามิก", 80, 80, 24, 6.0),
  createDataGradePointHis("วิศวกรรมโทรคมนาคม", 107.5, 110, 67, 4.3),
  createDataGradePointHis("วิศวกรรมพอลิเมอร์", 80, 80, 49, 3.9),
  createDataGradePointHis("วิศวกรรมไฟฟ้า", 149.5, 154.5, 24, 4.0),
  createDataGradePointHis("วิศวกรรมโยธา", 143, 140.5, 37, 4.3),
  createDataGradePointHis("วิศวกรรมโลหการ", 97.5, 86.5, 24, 6.0),
  createDataGradePointHis("วิศวกรรมสิ่งแวดล้อม", 92.5, 91, 67, 4.3),
  createDataGradePointHis("วิศวกรรมอิเล็กทรอนิกส์", 92.5, 93.5, 49, 3.9),
  createDataGradePointHis("วิศวกรรมอุตสาหการ", 126.5, 125, 49, 3.9),
  createDataGradePointHis("วิศวกรรมธรณี", 81.5, 93.50, 49, 3.9),
];

export default function TableGradePointHis(props: GradePointHisProps) {
  return (
    <Table
      hoverRow
      sx={{
        width: 780,
      }}
    >
      <thead>
        <tr>
          <th rowSpan={2} style={{ width: "40%", textAlign: "center" }}>
            สาขาวิชา
          </th>
          <th colSpan={4} style={{ textAlign: "center" }}>
            Grade point ต่ำสุด
          </th>
        </tr>
        <tr>
          <th style={{ textAlign: "center" }}>2562</th>
          <th style={{ textAlign: "center" }}>2563</th>
          <th style={{ textAlign: "center" }}>2564</th>
          <th style={{ textAlign: "center" }}>2565</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.name}>
            <td>{row.name}</td>
            <td
              style={{
                textAlign: "center",
                color: props.gradePoint > row.y2562 ? "#25DB22" : "black",
                fontWeight: props.gradePoint > row.y2562 ? "600" : "400",
              }}
            >
              {row.y2562}
            </td>
            <td
              style={{
                textAlign: "center",
                color: props.gradePoint > row.y2563 ? "#25DB22" : "black",
                fontWeight: props.gradePoint > row.y2563 ? "600" : "400",
              }}
            >
              {row.y2563}
            </td>
            <td
              style={{
                textAlign: "center",
                color: props.gradePoint > row.y2564 ? "#25DB22" : "black",
                fontWeight: props.gradePoint > row.y2564 ? "600" : "400",
              }}
            >
              {row.y2564}
            </td>
            <td
              style={{
                textAlign: "center",
                color: props.gradePoint > row.y2565 ? "#25DB22" : "black",
                fontWeight: props.gradePoint > row.y2565 ? "600" : "400",
              }}
            >
              {row.y2565}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
