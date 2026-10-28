abstract class BaseRegistrationPolicy implements RegistrationPolicy {
    abstract canRegister(
        student: Student,
        offering: CourseOffering,
        currentCourses: Course[]
    ): boolean;
}
