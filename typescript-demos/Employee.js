var EmployeeImpl = /** @class */ (function () {
    function EmployeeImpl() {
        this.employeeId = 1452132546;
        this.employeeName = 'Harish';
        this.employeeSalary = 25000;
    }
    EmployeeImpl.prototype.printEmployee = function () {
        console.log(this);
    };
    return EmployeeImpl;
}());
var emp1 = {
    employeeId: 14521213,
    employeeName: 'Javed',
    employeeSalary: 54000,
    printEmployee: function () {
        console.log(this);
    }
};
var emp2 = new EmployeeImpl();
emp2.printEmployee();
