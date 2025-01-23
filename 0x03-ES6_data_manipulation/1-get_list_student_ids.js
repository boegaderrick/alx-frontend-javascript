export default function getListStudentIds(students) {
  try {
    return students.map((student) => student.id);
  } catch (error) {
    return [];
  }
}
