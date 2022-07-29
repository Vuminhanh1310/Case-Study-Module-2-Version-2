"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(name, date_of_birth, identity) {
        this._name = name;
        this._dateOfBirth = date_of_birth;
        this._identity = identity;
    }
    getName() {
        return this._name;
    }
    setName(value) {
        this._name = value;
    }
    getDateOfBirth() {
        return this._dateOfBirth;
    }
    setDateOfBirth(value) {
        this._dateOfBirth = value;
    }
    getIdentity() {
        return this._identity;
    }
    setIdentity(value) {
        this._identity = value;
    }
}
exports.Person = Person;
