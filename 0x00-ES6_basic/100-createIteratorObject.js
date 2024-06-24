export default function iterateThroughObject(reportWithIterator) {
  let employeeNames = "";

  for (const department of reportWithIterator) {
    const employees = department.allEmployees;

    if (employees) {
      for (const employee of employees) {
        employeeNames += employee + (employeeNames.length > 0 ? " | " : "");
      }
    }
  }

  return employeeNames;
}
