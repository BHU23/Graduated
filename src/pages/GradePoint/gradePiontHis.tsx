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
  createDataGradePointHis("วิศวกรรมปิโตรเลียมและเทคโนโลยีธรณี", 120.5,125, 112.5, 120.5),
  createDataGradePointHis("วิศวกรรมการผลิตอัตโนมัติและหุ่นยน", 111.5, 113.5, 106, 107.5),
  createDataGradePointHis("วิศวกรรมเกษตรและอาหาร", 84,80, 80, 80),
  createDataGradePointHis("วิศวกรรมขนส่งและโลจิสติกส์", 116.5, 113.5, 105, 106),
  createDataGradePointHis("วิศวกรรมคอมพิวเตอร์", 132, 139.5, 135.5, 155.5),
  createDataGradePointHis("วิศวกรรมเคมี", 95, 84, 81.5, 80.5),
  createDataGradePointHis("วิศวกรรมเครื่องกล", 139.5, 135.5, 122.5, 122.5),
  createDataGradePointHis("วิศวกรรมเซรามิก", 80, 80, 81, 80),
  createDataGradePointHis("วิศวกรรมโทรคมนาคม", 107.5, 110, 92, 99.5),
  createDataGradePointHis("วิศวกรรมพอลิเมอร์", 80, 80, 80, 80),
  createDataGradePointHis("วิศวกรรมไฟฟ้า", 149.5, 154.5, 132, 143.5),
  createDataGradePointHis("วิศวกรรมโยธา", 143, 140.5, 136.5, 140),
  createDataGradePointHis("วิศวกรรมโลหการ", 97.5, 86.5, 80, 81),
  createDataGradePointHis("วิศวกรรมสิ่งแวดล้อม", 92.5, 91, 83.5, 82),
  createDataGradePointHis("วิศวกรรมอิเล็กทรอนิกส์", 92.5, 93.5, 91, 109),
  createDataGradePointHis("วิศวกรรมอุตสาหการ", 126.5, 125, 116.5, 116),
  createDataGradePointHis("วิศวกรรมธรณี", 81.5, 93.50, 83.5, 93),
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
