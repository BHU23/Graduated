

export interface GradeDetail {
  id: string;
  component: JSX.Element;
  credit: Number;
  graded: Number;
}

export interface GradeMultiCourse {
  id: string;
  component: JSX.Element;
  gpa: Number;
  credit: Number;
  gradePoint: Number;
}
