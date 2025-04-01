# Advance_js

function sumFilteredSalaries(employees, minSalary = 0, maxSalary = Infinity) {
  return employees
    .filter(employee => employee.salary >= minSalary && employee.salary <= maxSalary)
    .reduce((sum, employee) => sum + employee.salary, 0);
}

// Example dataset
const employees = [
  { name: "Alice", salary: 50000 },
  { name: "Bob", salary: 70000 },
  { name: "Charlie", salary: 60000 },
  { name: "David", salary: 80000 },
  { name: "Eve", salary: 90000 }
];

// Usage examples
console.log(sumFilteredSalaries(employees, 60000)); // Sum of salaries >= 60000
console.log(sumFilteredSalaries(employees, 60000, 80000)); // Sum of salaries between 60000 and 80000
console.log(sumFilteredSalaries(employees, 80000, 100000)); 

sumFilteredSalaries(employees, 60000)
70000 + 60000 + 80000 + 90000 = 300000
Output: 300000

2️⃣ sumFilteredSalaries(employees, 60000, 80000)
70000 + 60000 + 80000 = 210000
Output: 210000

3️⃣ sumFilteredSalaries(employees, 80000, 100000)
80000 + 90000 = 170000
Output: 170000