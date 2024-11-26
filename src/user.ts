import {IUser} from "./interfaces.ts";
import {BaseModal} from "./baseModal.ts";

export class User extends BaseModal implements IUser {
    public name: string;
    public email: string;
    private id: string;
    private password: string;

    constructor(name: string, email: string, password: string) {
        super();
        this.id = User.generateId();
        this.name = name;
        this.email = email;
        this.password = password;
        this.validate();
    }

    set emailAddress(newEmail: string) {
        const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(newEmail)) throw new Error("Invalid email. Please enter a valid email address.");
        this.email = newEmail;
    }

    get info(): string {
        return `"ID: [${this.id}], Name: [${this.name}], Email: [${this.email}]"`;
    }

    get userId() {
        return this.id;
    }

    private static generateId(): string {
        return Math.random().toString(36).substring(2, 9);
    }

    changePassword(newPassword: string): void {
        if (!newPassword || newPassword.trim().length < 6) throw new Error("Password must be at least 6 characters.");
        if (!(this.password === newPassword)) this.password = newPassword;
    }

    validate(): boolean {
        return (this.name.trim() !== '' && this.email.trim() !== '' && this.password !== '');
    }
}



