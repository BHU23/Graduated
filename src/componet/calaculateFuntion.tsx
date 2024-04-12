import { GradeDetail } from "../interfacce";
import { GradeMultiCourse } from "../interfacce";

export const calculateGPA = (gradeDetails: GradeDetail[]): number[] => {
  let sumCreditGrade = 0;
  let sumCredits = 0;

  for (let i = 0; i < gradeDetails.length; i++) {
    sumCreditGrade +=
      Number(gradeDetails[i].graded) * Number(gradeDetails[i].credit);
    sumCredits += Number(gradeDetails[i].credit);
  }

  const gpa = sumCreditGrade / sumCredits;

  return [Math.round(gpa * 100) / 100, sumCreditGrade, sumCredits];
};
export const calculateGPAX = (
  gradeMultiCourses: GradeMultiCourse[] | undefined
): number => {
  let sumGradePoint = 0;
  let sumCredits = 0;
  if (gradeMultiCourses != null) {
    for (let i = 0; i < gradeMultiCourses.length; i++) {
      sumGradePoint += Number(gradeMultiCourses[i].gradePoint);
      sumCredits += Number(gradeMultiCourses[i].credit);
    }
    const gpax = sumGradePoint / sumCredits;
    return Math.round(gpax * 100) / 100;
  }
  return 0;
};
export const calculateGradePoint = (
  gradeMultiCourses: GradeMultiCourse[] | undefined
): number[] => {
  let sumGradePoint = 0;
  let sumCredits = 0;
  if (gradeMultiCourses != null) {
    for (let i = 0; i < gradeMultiCourses.length; i++) {
      sumGradePoint += Number(gradeMultiCourses[i].gradePoint);
      sumCredits += Number(gradeMultiCourses[i].credit);
    }
    const gpax = sumGradePoint / sumCredits;
    return [sumGradePoint, Math.round(gpax * 100) / 100, sumCredits];
  }
  return [0,0,0];
};
