"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Room = void 0;
class Room {
    constructor(days_of_rent, type_of_room, price, room_number, person) {
        this._dayOfRents = days_of_rent;
        this._typeOfRoom = type_of_room;
        this._price = price;
        this._roomNumber = room_number;
        this._person = person;
    }
    getDayOfRents() {
        return this._dayOfRents;
    }
    setDayOfRents(value) {
        this._dayOfRents = value;
    }
    getTypeOfRoom() {
        return this._typeOfRoom;
    }
    setTypeOfRoom(value) {
        this._typeOfRoom = value;
    }
    getPrice() {
        return this._price;
    }
    setPrice(value) {
        this._price = value;
    }
    getRoomNumber() {
        return this._roomNumber;
    }
    setRoomNumber(value) {
        this._roomNumber = value;
    }
    getPerson() {
        return this._person;
    }
    setPerson(value) {
        this._person = value;
    }
}
exports.Room = Room;
