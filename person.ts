export class Person{
    private _name: string;
    private _dateOfBirth: string;
    private _identity: string


    constructor(name: string, date_of_birth: string, identity: string) {
        this._name = name;
        this._dateOfBirth = date_of_birth;
        this._identity = identity;
    }


    getName(): string {
        return this._name;
    }

    setName(value: string) {
        this._name = value;
    }

    getDateOfBirth(): string {
        return this._dateOfBirth;
    }

    setDateOfBirth(value: string) {
        this._dateOfBirth = value;
    }

    getIdentity(): string {
        return this._identity;
    }

    setIdentity(value: string) {
        this._identity = value;
    }
}