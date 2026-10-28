interface RegistrationPolicy {
    canRegister(
        student: Student,
        offering: CourseOffering,
        currentCourses: Course[]
    ): boolean;
}
