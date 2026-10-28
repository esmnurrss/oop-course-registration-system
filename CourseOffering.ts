class CourseOffering {
    readonly id: string;
    readonly course: Course;
    readonly semester: string;
    private readonly capacity: number;
    private enrollments: Enrollment[] = [];

    constructor(id: string, course: Course, semester: string, capacity: number) {
        if (!id.trim() || !semester.trim()) {
            throw new Error("Offering ID and semester cannot be empty.");
        }

        if (!Number.isInteger(capacity) || capacity < 0) {
            throw new Error("Capacity must be a non-negative integer.");
        }

        this.id = id;
        this.course = course;
        this.semester = semester;
        this.capacity = capacity;
    }

    remainingSeats(): number {
        return this.capacity - this.enrollments.length;
    }

    hasStudent(student: Student): boolean {
        return this.enrollments.some(e => e.student.id === student.id);
    }

    addEnrollment(enrollment: Enrollment): boolean {
        if (enrollment.offering !== this) return false;
        if (this.remainingSeats() <= 0) return false;
        if (this.hasStudent(enrollment.student)) return false;

        this.enrollments.push(enrollment);
        return true;
    }

    removeEnrollment(student: Student): boolean {
        const index = this.enrollments.findIndex(e => e.student.id === student.id);

        if (index === -1) return false;

        this.enrollments.splice(index, 1);
        return true;
    }

    getEnrollments(): Enrollment[] {
        return [...this.enrollments];
    }
}
