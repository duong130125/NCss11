class Person {
    protected name: string; // thuộc tính protected
    private age: number; // thuộc tính private
    
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    
    // phương thức protected
    protected displayAge() {
        console.log("Tuổi: " + this.age);
    }
    
    // phương thức private
    private displayDetails() {
        console.log("Tên: " + this.name);
        console.log("Tuổi: " + this.age);
    }
}

class Student extends Person {
    private studentID: number;
    
    constructor(name: string, age: number, studentID: number) {
        super(name, age);
        this.studentID = studentID;
    }
    
    public displayStudentInfo() {
        console.log("Tên: " + this.name); // OK, thuộc tính protected có thể truy cập từ lớp con
        // console.log("Tuổi: " + this.age); // Lỗi! age là thuộc tính private trong lớp cha
        this.displayAge(); // OK, phương thức protected có thể truy cập từ lớp con
        // this.displayDetails(); // Lỗi! displayDetails() là phương thức private trong lớp cha
        console.log("Mã số sinh viên: " + this.studentID);
    }
}

let student = new Student("John", 20, 12345);
student.displayStudentInfo();
