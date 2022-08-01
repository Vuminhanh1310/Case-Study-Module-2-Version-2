"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelRoom = void 0;
class HotelRoom {
    constructor(type_of_room, price, room_number) {
        this._typeOfRoom = type_of_room;
        this._price = price;
        this._roomNumber = room_number;
        this.roomStatus = 'phòng trống';
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
    getRoomStatus() {
        return this.roomStatus;
    }
    setRoomStatus(value) {
        this.roomStatus = value;
    }
    makeSingleRoom(roomNumber) {
        this.setTypeOfRoom('single');
        this.setPrice(500);
        this.setRoomNumber(roomNumber);
    }
    makeDoubleRoom(roomNumber) {
        this.setTypeOfRoom('double');
        this.setPrice(800);
        this.setRoomNumber(roomNumber);
    }
    makeLuxuryRoom(roomNumber) {
        this.setTypeOfRoom('luxury');
        this.setPrice(1000);
        this.setRoomNumber(roomNumber);
    }
}
exports.HotelRoom = HotelRoom;
