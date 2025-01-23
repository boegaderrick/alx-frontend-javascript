import getStudentsByLocation from './2-get_students_by_loc';

export default function updateStudentGradeByCity(students, city, grades) {
  return getStudentsByLocation(students, city).map((student) => {
    const [{ grade } = { grade: 'N/A' }] = grades.filter((val) => val.studentId === student.id);
    return { ...student, grade };
  });
}
