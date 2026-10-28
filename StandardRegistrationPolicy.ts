class StandardRegistrationPolicy extends BaseRegistrationPolicy {
    constructor() {
        super();
    }

    canRegister(
        student: Student,
        offering: CourseOffering,
        currentCourses: Course[]
    ): boolean {
        return true;
    }
}
