"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitializationData = void 0;
const person_1 = require("./person");
const hotel_room_1 = require("./hotel_room");
const customer_room_1 = require("./customer_room");
const customer_room_management_1 = require("./customer_room_management");
const hotel_room_management_1 = require("./hotel_room_management");
class InitializationData {
    constructor() {
        this.customerManagement = new customer_room_management_1.CustomerRoomManagement();
        this.hotelRoomManagement = new hotel_room_management_1.HotelRoomManagement();
    }
    initHotelRoom() {
        let numberOfFloor = 6;
        let numberOfRoomInFloor = 6;
        for (let i = 1; i <= numberOfFloor; i++) {
            if (i <= 2) {
                for (let j = 1; j <= numberOfRoomInFloor; j++) {
                    let roomNumber = 100 * i + j;
                    let hotelRoom = new hotel_room_1.HotelRoom(' ', 0, 0);
                    hotelRoom.makeSingleRoom(roomNumber);
                    this.hotelRoomManagement.createHotelRoom(hotelRoom);
                }
            }
            else if (i > 2 && i <= 4) {
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
    initCustomerRoom() {
        let person1 = new person_1.Person('Nguyễn Văn A', '01/01/2000', '100200301');
        let person2 = new person_1.Person('Nguyễn Văn B', '02/01/2000', '100200302');
        let person3 = new person_1.Person('Nguyễn Văn C', '03/01/2000', '100200303');
        let person4 = new person_1.Person('Nguyễn Văn D', '04/01/2000', '100200304');
        let person5 = new person_1.Person('Nguyễn Văn E', '05/01/2000', '100200305');
        let person6 = new person_1.Person('Nguyễn Văn F', '05/01/2000', '100200305');
        let room101 = new hotel_room_1.HotelRoom('single', 500, 101);
        let room102 = new hotel_room_1.HotelRoom('single', 500, 102);
        let room103 = new hotel_room_1.HotelRoom('single', 500, 103);
        let room301 = new hotel_room_1.HotelRoom('double', 800, 301);
        let room302 = new hotel_room_1.HotelRoom('double', 800, 302);
        let room303 = new hotel_room_1.HotelRoom('double', 800, 303);
        let customerRoom1 = new customer_room_1.CustomerRoom(1, room101, person1);
        let customerRoom2 = new customer_room_1.CustomerRoom(2, room102, person2);
        let customerRoom3 = new customer_room_1.CustomerRoom(3, room103, person3);
        let customerRoom4 = new customer_room_1.CustomerRoom(4, room301, person4);
        let customerRoom5 = new customer_room_1.CustomerRoom(5, room302, person5);
        let customerRoom6 = new customer_room_1.CustomerRoom(2, room303, person6);
        this.customerManagement.pushCustomerRoomIntoListOfCustomerRoom(customerRoom1);
        this.customerManagement.pushCustomerRoomIntoListOfCustomerRoom(customerRoom2);
        this.customerManagement.pushCustomerRoomIntoListOfCustomerRoom(customerRoom3);
        this.customerManagement.pushCustomerRoomIntoListOfCustomerRoom(customerRoom4);
        this.customerManagement.pushCustomerRoomIntoListOfCustomerRoom(customerRoom5);
        this.customerManagement.pushCustomerRoomIntoListOfCustomerRoom(customerRoom6);
    }
}
exports.InitializationData = InitializationData;
