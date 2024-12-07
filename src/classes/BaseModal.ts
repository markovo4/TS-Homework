export abstract class BaseModal {
    public createdAt: Date;

    protected constructor() {
        this.createdAt = new Date;
    }

    protected abstract validate(): boolean;
}