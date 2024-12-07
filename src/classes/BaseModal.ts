export abstract class BaseModal {
    public createdAt: Date;

    protected constructor() {
        this.createdAt = new Date;
    }

    abstract validate(): boolean;
}