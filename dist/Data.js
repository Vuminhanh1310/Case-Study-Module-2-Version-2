"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Data = void 0;
const hotel_room_management_1 = require("./hotel_room_management");
const customer_room_management_1 = require("./customer_room_management");
const hotel_room_1 = require("./hotel_room");
const person_1 = require("./person");
class Data {
    constructor() {
        this.hotelRoomManagement = new hotel_room_management_1.HotelRoomManagement();
        this.customerRoomManagement = new customer_room_management_1.CustomerRoomManagement();
        // initCustomerRoom(){
        //     let customerRoom1 = new CustomerRoom(1,hotelRoom101,person1)
        //     let customerRoom2 = new CustomerRoom(2,hotelRoom201,person2)
        //     let customerRoom3 = new CustomerRoom(3,hotelRoom301,person3)
        //     let customerRoom4 = new CustomerRoom(4,hotelRoom102,person4)
        //     let customerRoom5 = new CustomerRoom(5,hotelRoom202,person5)
        // }
    }
    initHotelRoom() {
        let numberOfRoomInFloor = 6;
        let numberOfFloor = 6;
        for (let i = 1; i <= numberOfFloor; i++) {
            if (i <= 2) {
                for (let j = 1; j <= numberOfRoomInFloor; j++) {
                    let roomNumber = 100 * i + j;
                    let hotelRoom = new hotel_room_1.HotelRoom(' ', 0, 0);
                    hotelRoom.makeSingleRoom(roomNumber);
                    this.hotelRoomManagement.createHotelRoom(hotelRoom);
                }
            }
            else if (i > 2 || i <= 4) {
                for (let j = 1; j <= numberOfRoomInFloor; j++) {
                    let roomNumber = 100 * i + j;
                    let hotelRoom = new hotel_room_1.HotelRoom(' ', 0, 0);
                    hotelRoom.makeDoubleRoom(roomNumber);
                    this.hotelRoomManagement.createHotelRoom(hotelRoom);
                }
            }
            else {
                for (let j = 1; j <= numberOfRoomInFloor; j++) {
                    let roomNumber = 100 * i + j;
                    let hotelRoom = new hotel_room_1.HotelRoom(' ', 0, 0);
                    hotelRoom.makeLuxuryRoom(roomNumber);
                    this.hotelRoomManagement.createHotelRoom(hotelRoom);
                }
            }
        }
    }
    initPerson() {
        let person1 = new person_1.Person('A', '01/01/2000', '100200301');
        let person2 = new person_1.Person('B', '01/01/2000', '100200302');
        let person3 = new person_1.Person('C', '01/01/2000', '100200303');
        let person4 = new person_1.Person('D', '01/01/2000', '100200304');
        let person5 = new person_1.Person('E', '01/01/2000', '100200305');
    }
}
exports.Data = Data;
