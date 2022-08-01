"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserManagement = void 0;
class UserManagement {
    constructor() {
        this.listOfStaff = [];
        this.listOfManager = [];
        this.listOfAdmin = [];
    }
    getListOfStaff() {
        return this.listOfStaff;
    }
    getListOfManager() {
        return this.listOfManager;
    }
    getListOfAdmin() {
        return this.listOfAdmin;
    }
    takeStaffIntoListOfStaff(user) {
        this.listOfStaff.push(user);
    }
    takeManagerIntoListOfManager(user) {
        this.listOfManager.push(user);
    }
    takeAdminIntoListOfAdmin(user) {
        this.listOfAdmin.push(user);
    }
    checkStaff(username, password) {
        let check = false;
        for (let i = 0; i < this.listOfStaff.length; i++) {
            if (username == this.listOfStaff[i].getUserName() && password == this.listOfStaff[i].getPassword()) {
                check = true;
            }
        }
        return check;
    }
    checkManager(username, password) {
        let check = false;
        for (let i = 0; i < this.listOfManager.length; i++) {
            if (username == this.listOfManager[i].getUserName() && password == this.listOfManager[i].getPassword()) {
                check = true;
            }
        }
        return check;
    }
    checkAdmin(username, password) {
        let check = false;
        for (let i = 0; i < this.listOfAdmin.length; i++) {
            if (username == this.listOfAdmin[i].getUserName() && password == this.listOfAdmin[i].getPassword()) {
                check = true;
            }
        }
        return check;
    }
}
exports.UserManagement = UserManagement;
