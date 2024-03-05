export default function createIteratorObject(report) {
  const arr = [];

  for (const [key, value] of Object.entries(report.allEmployees)) {
    arr.push(...value);
  }

  return arr;
}
