class Course {
    readonly code: string;
    readonly title: string;
    readonly credits: number;

    constructor(code: string, title: string, credits: number) {
        if (!code.trim() || !title.trim()) {
            throw new Error("Course code and title cannot be empty.");
        }

        if (!Number.isFinite(credits) || credits < 0) {
            throw new Error("Credits must be a non-negative number.");
        }

        this.code = code;
        this.title = title;
        this.credits = credits;
    }
}
