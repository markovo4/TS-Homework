import {IUser} from "../interfaces/interfaces.ts";
import {BaseModal} from "./BaseModal.ts";

export class User extends BaseModal implements IUser {
    public name: string;
    readonly id: string;
    private email: string;
    private password: string;

    constructor(name: string, email: string, password: string) {
        super();
        this.id = User.generateId();
        this.name = name;
        this.email = email;
        this.password = password;
        this.validate();
    }

    get emailAddress(): string {
        return this.email;
    }

    protected set emailAddress(newEmail: string) {
        const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(newEmail)) throw new Error("Invalid email. Please enter a valid email address.");
        this.email = newEmail;
    }

    get userId() {
        return this.id;
    }

    protected set changePassword(newPassword: string) {
        if (!newPassword || newPassword.trim().length < 6) throw new Error("Password must be at least 6 characters.");
        if (!(this.pass === newPassword)) this.password = newPassword;
    }

    protected get pass(): string {
        return this.password;
    }

    protected get info(): string {
        return `"ID: [${this.id}], Name: [${this.name}], Email: [${this.email}]"`;
    }

    private static generateId(): string {
        return Math.random().toString(36).substring(2, 9);
    }

    validate(): boolean {
        return (this.name.trim() !== '' && this.email.trim() !== '' && this.password !== '');
    }
}



