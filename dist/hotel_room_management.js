"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelRoomManagement = void 0;
class HotelRoomManagement {
    constructor() {
        this.List0fHotelRoom = [];
    }
    getListOfRoomInHotel() {
        return this.List0fHotelRoom;
    }
    createHotelRoom(hotelRoom) {
        this.List0fHotelRoom.push(hotelRoom);
    }
    findIndexOfHotelRoom(roomNumber) {
        let indexRoom = -1;
        for (let i = 0; i < this.List0fHotelRoom.length; i++) {
            if (this.List0fHotelRoom[i].getRoomNumber() === roomNumber) {
                indexRoom = i;
            }
        }
        return indexRoom;
    }
    updateHotelRoom(index_room, newRoom) {
        this.List0fHotelRoom[index_room] = newRoom;
    }
    removeHotelRoom(index_room) {
        this.List0fHotelRoom.splice(index_room, 1);
    }
    updateStatusOfRoomHaveGuest(index_room) {
        this.List0fHotelRoom[index_room].setRoomStatus('phòng có khách thuê');
    }
    updateRoomStatusRoomEmpty(index_room) {
        this.List0fHotelRoom[index_room].setRoomStatus('phòng trống');
    }
    getRoomInHotel(roomNumber) {
        let indexRoom = this.findIndexOfHotelRoom(roomNumber);
        return this.List0fHotelRoom[indexRoom];
    }
    getHotelRoomNumberList() {
        let listOfRoomNumberInHotel = [];
        for (let i = 0; i < this.List0fHotelRoom.length; i++) {
            listOfRoomNumberInHotel.push(this.List0fHotelRoom[i].getRoomNumber());
        }
        return listOfRoomNumberInHotel;
    }
}
exports.HotelRoomManagement = HotelRoomManagement;
