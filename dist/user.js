"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(username, password, role) {
        this.username = username;
        this.password = password;
        this._role = role;
    }
    getUserName() {
        return this.username;
    }
    setUserName(value) {
        this.username = value;
    }
    getPassword() {
        return this.password;
    }
    setPassword(value) {
        this.password = value;
    }
    getRole() {
        return this._role;
    }
    setRole(value) {
        this._role = value;
    }
}
exports.User = User;
