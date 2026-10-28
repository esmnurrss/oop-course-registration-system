class RegistrationService {
    private readonly policy: RegistrationPolicy;
    private offerings: CourseOffering[] = [];

    constructor(policy: RegistrationPolicy) {
        this.policy = policy;
    }

    register(student: Student, offering: CourseOffering): boolean {
        if (offering.hasStudent(student)) {
            return false;
        }

        if (offering.remainingSeats() <= 0) {
            return false;
        }

        const currentCourses = this.coursesOf(student);

        if (!this.policy.canRegister(student, offering, currentCourses)) {
            return false;
        }

        const enrollment = new Enrollment(student, offering);

        const success = offering.addEnrollment(enrollment);

        if (success && !this.offerings.includes(offering)) {
            this.offerings.push(offering);
        }

        return success;
    }

    cancel(student: Student, offering: CourseOffering): boolean {
        return offering.removeEnrollment(student);
    }

    coursesOf(student: Student): Course[] {
        const courses: Course[] = [];

        for (const offering of this.offerings) {
            if (offering.hasStudent(student)) {
                courses.push(offering.course);
            }
        }

        return courses;
    }
}
