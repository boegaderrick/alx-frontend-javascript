export default function createIteratorObject(report) {
  const employees = [];
  for (const value of Object.values(report.allEmployees)) {
    employees.push(...value);
  }
  return employees;
}
