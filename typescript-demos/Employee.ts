interface Employee {
    employeeId: number;
    employeeName: string;
    employeeSalary: number;

    printEmployee();

}


class EmployeeImpl implements Employee {
    employeeId = 1452132546;
    employeeName = 'Harish';
    employeeSalary = 25000;
    printEmployee() {
        console.log(this);
    }
}

let emp1: Employee = {
    employeeId: 14521213,
    employeeName: 'Javed',
    employeeSalary: 54000,
    printEmployee() {
        console.log(this);
    }

}
let emp2:EmployeeImpl=new EmployeeImpl();
emp2.printEmployee()