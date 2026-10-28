class Student {
    readonly id: string;
    readonly name: string;

    constructor(id: string, name: string) {
        if (!id.trim() || !name.trim()) {
            throw new Error("Student ID and name cannot be empty.");
        }

        this.id = id;
        this.name = name;
    }
}
