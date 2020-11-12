class Student{
    private id:number;
    private studentName:string;
    private email:string;

    public setStudentData(id:number,studentName:string,email:string){
        this.id=id;
        this.email=email;
        this.studentName=studentName;
    }

    public printStudent():void{
        console.log(this.id);
        console.log(this.studentName);
        console.log(this.email);
    }

}

let student1:Student=new Student();

student1.setStudentData(200021,'Mohit','mohit@yahoo.com');
student1.printStudent();
let student2:Student=new Student();

// student2.id=100022;
// student2.studentName='Praveen';
// student2.email='praveen@yahoo.com';

student2.printStudent();