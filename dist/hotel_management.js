"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelManagement = void 0;
class HotelManagement {
    constructor() {
        this.listOfRooms = [];
    }
    getListOfRooms() {
        return this.listOfRooms;
    }
    createRoomForRent(room) {
        this.listOfRooms.push(room);
    }
    findIndexRoomInList(room_number) {
        let indexRoom = -1;
        for (let i = 0; i < this.listOfRooms.length; i++) {
            if (this.listOfRooms[i].getRoomNumber() === room_number) {
                indexRoom = i;
            }
        }
        return indexRoom;
    }
    updateRoom(index_room, new_room) {
        this.listOfRooms[index_room] = new_room;
    }
    removeRoom(index_room) {
        this.listOfRooms.splice(index_room, 1);
    }
    checkOut(index_room) {
        let price = this.listOfRooms[index_room].getPrice();
        let day = this.listOfRooms[index_room].getDayOfRents();
        return price * day;
    }
}
exports.HotelManagement = HotelManagement;
