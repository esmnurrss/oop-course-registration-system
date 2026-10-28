class Enrollment {
    static count: number = 0;

    readonly student: Student;
    readonly offering: CourseOffering;

    constructor(student: Student, offering: CourseOffering) {
        this.student = student;
        this.offering = offering;
        Enrollment.count++;
    }
}
