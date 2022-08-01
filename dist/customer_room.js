"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerRoom = void 0;
class CustomerRoom {
    constructor(dayOfRents, room, person) {
        this._dayOfRents = dayOfRents;
        this._room = room;
        this._person = person;
    }
    getDayOfRents() {
        return this._dayOfRents;
    }
    setDayOfRents(value) {
        this._dayOfRents = value;
    }
    getRoom() {
        return this._room;
    }
    setRoom(value) {
        this._room = value;
    }
    getPerson() {
        return this._person;
    }
    setPerson(value) {
        this._person = value;
    }
    getTypeOfCustomerRoom() {
        return this._room.getTypeOfRoom();
    }
    setTypeOfCustomerRoom(value) {
        this._room.setTypeOfRoom(value);
    }
    getPrice() {
        return this._room.getPrice();
    }
    setPrice(value) {
        this._room.setPrice(value);
    }
    getCustomerRoomNumber() {
        return this._room.getRoomNumber();
    }
    setCustomerRoomNumber(value) {
        this._room.setRoomNumber(value);
    }
    getCustomerName() {
        return this._person.getName();
    }
    setCustomerName(value) {
        this._person.setName(value);
    }
}
exports.CustomerRoom = CustomerRoom;
