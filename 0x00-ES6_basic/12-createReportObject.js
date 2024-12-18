export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    getNumberOfDepartments(employees = this.allEmployees) { return Object.keys(employees).length; },
  };
}
