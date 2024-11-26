import {IUser} from "./interfaces.ts";
import {BaseModal} from "./baseModal.ts";

export class User extends BaseModal implements IUser {
    public id: string;
    public name: string;
    public email: string;
    private password: string;

    constructor(name: string, email: string, password: string) {
        super();
        this.id = User.generateId();
        this.name = name;
        this.email = email;
        this.password = password;
        this.validate();
    }

    public set emailAddress(newEmail: string) {
        const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(newEmail)) {
            this.email = newEmail;
        } else {
            throw new Error("Invalid email. Please enter a valid email address.");
        }
    }

    public get info(): string {
        return `ID: [${this.id}], Name: [${this.name}], Email: [${this.email}]`;
    }

    private static generateId(): string {
        return Math.random().toString(36).substring(2, 9);
    }

    public changePassword(newPassword: string): void {
        if (!newPassword || newPassword.trim().length < 6) {
            throw new Error("Password must be at least 6 characters long.");
        } else if (this.validatePassword(newPassword)) {
            throw new Error("Please use new password.");
        }
        this.password = newPassword;
    }

    public validatePassword(inputPassword: string): boolean {
        return this.password === inputPassword;
    }
}

