import {IUser} from "../interfaces/interfaces.ts";
import {BaseModal} from "./BaseModal.ts";

export class User extends BaseModal implements IUser {
    private static currentId: number = 1;
    name: string;
    readonly id: number;
    private userEmail: string;
    private userPassword: string;

    constructor(name: string, email: string, password: string) {
        super();
        this.id = User.generateId();
        this.name = name;
        this.userEmail = email;
        this.userPassword = password;
        this.validate();
    }

    get email(): string {
        return this.userEmail;
    }

    set email(newEmail: string) {
        const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(newEmail)) throw new Error("Invalid email. Please enter a valid email address.");
        this.userEmail = newEmail;
    }

    get password(): string {
        return this.userPassword;
    }

    set password(newPassword: string) {
        if (!newPassword || newPassword.trim().length < 6) throw new Error("Password must be at least 6 characters.");
        if (!(this.password === newPassword)) this.userPassword = newPassword;
    }

    get info(): string {
        return `"ID: [${this.id}], Name: [${this.name}], Email: [${this.email}]"`;
    }

    private static generateId(): number {
        return User.currentId++;
    }

    validate(): boolean {
        return (this.name.trim() !== '' && this.email.trim() !== '' && this.userPassword !== '');
    }
}



