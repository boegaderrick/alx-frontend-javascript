export default function getStudentIdsSum(students) {
  try {
    return students.reduce((accumulator, student) => accumulator + student.id, 0);
  } catch (error) {
    return 0;
  }
}
