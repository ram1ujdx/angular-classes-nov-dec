var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student = /** @class */ (function () {
    function Student(id, studentName, email) {
        this.id = id;
        this.studentName = studentName;
        this.email = email;
        console.log("Student Created..");
    }
    // public setStudentData(id:number,studentName:string,email:string){
    //     this.id=id;
    //     this.email=email;
    //     this.studentName=studentName;
    // }
    Student.prototype.printStudent = function () {
        console.log(this.id);
        console.log(this.studentName);
        console.log(this.email);
    };
    return Student;
}());
var CSStudent = /** @class */ (function (_super) {
    __extends(CSStudent, _super);
    function CSStudent(id, studentName, email) {
        var _this = _super.call(this, id, studentName, email) || this;
        _this.programmingLanguages = [];
        return _this;
    }
    CSStudent.prototype.printStudent = function () {
        console.log(this.id);
        console.log(this.studentName);
        console.log(this.email);
        console.log(this.programmingLanguages);
    };
    return CSStudent;
}(Student));
var student = new CSStudent(200021, 'Mohit', 'mohit@yahoo.com');
student.programmingLanguages.push('Java');
student.programmingLanguages.push('TypeScript');
student.programmingLanguages.push('Python');
//console.log(student);
student.printStudent();
// let student1:Student=new Student(200021,'Mohit','mohit@yahoo.com');
// //student1.setStudentData(200021,'Mohit','mohit@yahoo.com');
// student1.printStudent();
// let student2:Student=new Student(100022,'Praveen','praveen@yahoo.com');
// // student2.id=100022;
// // student2.studentName='Praveen';
// // student2.email='praveen@yahoo.com';
// student2.printStudent();
