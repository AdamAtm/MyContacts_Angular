export class Contact {
    name!: string;
    email!: string;
    pseudo!: string;

    constructor(name: string, email: string, pseudo: string) {
        this.name = name;
        this.email = email;
        this.pseudo = pseudo;
    }
}