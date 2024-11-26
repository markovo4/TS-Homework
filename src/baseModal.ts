export abstract class BaseModal {
    public createdAt: Date;

    constructor() {
        this.createdAt = new Date;
    }

    abstract validate(): boolean;
}