"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelManagement = void 0;
class HotelManagement {
    constructor() {
        this.TotalRoomInHotel = [];
        this.listOfCustomerRooms = [];
    }
    getListOfCustomerRooms() {
        return this.listOfCustomerRooms;
    }
    createRoomForRent(room) {
        this.listOfCustomerRooms.push(room);
    }
    findIndexOfCustomerRoomInList(room_number) {
        let indexRoom = -1;
        for (let i = 0; i < this.listOfCustomerRooms.length; i++) {
            if (this.listOfCustomerRooms[i].getRoomNumber() === room_number) {
                indexRoom = i;
            }
        }
        return indexRoom;
    }
    updateRoom(index_room, new_room) {
        this.listOfCustomerRooms[index_room] = new_room;
    }
    removeRoom(index_room) {
        this.listOfCustomerRooms.splice(index_room, 1);
    }
    checkOut(index_room) {
        let price = this.listOfCustomerRooms[index_room].getPrice();
        let day = this.listOfCustomerRooms[index_room].getDayOfRents();
        return price * day;
    }
}
exports.HotelManagement = HotelManagement;
