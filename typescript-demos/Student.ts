class Student{
   
    constructor(protected id:number,protected studentName:string,protected email:string){
        console.log("Student Created..");
    }

    // public setStudentData(id:number,studentName:string,email:string){
    //     this.id=id;
    //     this.email=email;
    //     this.studentName=studentName;
    // }

    public printStudent():void{
        console.log(this.id);
        console.log(this.studentName);
        console.log(this.email);
    }

}

class CSStudent extends Student{
    constructor(id:number,studentName:string,email:string){
        super(id,studentName,email);
    }
    programmingLanguages:Array<string>=[];

    public printStudent():void{
        console.log(this.id);
        console.log(this.studentName);
        console.log(this.email);
        console.log(this.programmingLanguages);
    }

}

let student:CSStudent=new CSStudent(200021,'Mohit','mohit@yahoo.com');
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


