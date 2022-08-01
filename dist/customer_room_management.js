"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerRoomManagement = void 0;
class CustomerRoomManagement {
    constructor() {
        this.listOfCustomerRooms = [];
    }
    getListOfCustomerRooms() {
        return this.listOfCustomerRooms;
    }
    pushCustomerRoomIntoListOfCustomerRoom(room) {
        this.listOfCustomerRooms.push(room);
    }
    findIndexOfCustomerRoom(room_number) {
        let indexRoom = -1;
        for (let i = 0; i < this.listOfCustomerRooms.length; i++) {
            if (this.listOfCustomerRooms[i].getCustomerRoomNumber() === room_number) {
                indexRoom = i;
            }
        }
        return indexRoom;
    }
    updateCustomerRoom(index_room, new_room) {
        this.listOfCustomerRooms[index_room] = new_room;
    }
    takeCustomerOutOfRoom(index_room) {
        this.listOfCustomerRooms.splice(index_room, 1);
    }
    checkOut(index_room) {
        let price = this.listOfCustomerRooms[index_room].getPrice();
        let day = this.listOfCustomerRooms[index_room].getDayOfRents();
        return price * day;
    }
    getCustomerRoomNumberList() {
        let listOfCustomerRoomNumber = [];
        for (let i = 0; i < this.listOfCustomerRooms.length; i++) {
            listOfCustomerRoomNumber.push(this.listOfCustomerRooms[i].getRoom().getRoomNumber());
        }
        return listOfCustomerRoomNumber;
    }
}
exports.CustomerRoomManagement = CustomerRoomManagement;
