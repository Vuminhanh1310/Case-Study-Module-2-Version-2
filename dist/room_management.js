"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Room_management = void 0;
class Room_management {
    constructor() {
        this.listOfRoomInHotel = [];
    }
    getListOfRoomInHotel() {
        return this.listOfRoomInHotel;
    }
    createRoom(roomNumber) {
        this.listOfRoomInHotel.push(roomNumber);
    }
    findIndexRoom(room_number) {
        let indexRoom = -1;
        for (let i = 0; i < this.listOfRoomInHotel.length; i++) {
            if (this.listOfRoomInHotel[i] === room_number) {
                indexRoom = i;
            }
        }
        return indexRoom;
    }
    updateRoom(index_room, newRoom) {
        this.listOfRoomInHotel[index_room] = newRoom;
    }
    removeRoom(index_room) {
        this.listOfRoomInHotel.splice(index_room, 1);
    }
}
exports.Room_management = Room_management;
