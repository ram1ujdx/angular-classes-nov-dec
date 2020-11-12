var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.setStudentData = function (id, studentName, email) {
        this.id = id;
        this.email = email;
        this.studentName = studentName;
    };
    Student.prototype.printStudent = function () {
        console.log(this.id);
        console.log(this.studentName);
        console.log(this.email);
    };
    return Student;
}());
var student1 = new Student();
student1.setStudentData(200021, 'Mohit', 'mohit@yahoo.com');
student1.printStudent();
var student2 = new Student();
// student2.id=100022;
// student2.studentName='Praveen';
// student2.email='praveen@yahoo.com';
student2.printStudent();
