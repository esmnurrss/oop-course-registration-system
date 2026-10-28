class RestrictedRegistrationPolicy extends BaseRegistrationPolicy {
    private readonly maxCredits: number;

    constructor(maxCredits: number) {
        super();

        if (!Number.isFinite(maxCredits) || maxCredits < 0) {
            throw new Error("Maximum credits must be non-negative.");
        }

        this.maxCredits = maxCredits;
    }

    canRegister(
        student: Student,
        offering: CourseOffering,
        currentCourses: Course[]
    ): boolean {
        const totalCredits = currentCourses.reduce(
            (total, course) => total + course.credits,
            0
        );

        return totalCredits + offering.course.credits <= this.maxCredits;
    }
}
