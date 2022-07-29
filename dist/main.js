"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const rl = __importStar(require("readline-sync"));
const hotel_management_1 = require("./hotel_management");
const person_1 = require("./person");
const room_1 = require("./room");
let choice = -1;
let hotelManagement = new hotel_management_1.HotelManagement();
let person1 = new person_1.Person('A', '01/01/2000', '001');
let room101 = new room_1.Room(1, 'single', 300, 101, person1);
hotelManagement.createRoomForRent(room101);
let person2 = new person_1.Person('B', '02/01/2000', '002');
let room102 = new room_1.Room(2, 'double', 600, 102, person2);
hotelManagement.createRoomForRent(room102);
let person3 = new person_1.Person('C', '03/01/2000', '003');
let room103 = new room_1.Room(3, 'luxury', 900, 103, person3);
hotelManagement.createRoomForRent(room103);
function inputPerson() {
    let name = rl.question('Nhập tên khách trọ: ');
    let dateOfBirth = rl.question('Nhập ngày sinh: ');
    let identity = rl.question('Nhập CMND: ');
    return new person_1.Person(name, dateOfBirth, identity);
}
function inputRoom() {
    let person = inputPerson();
    let dayOfRents = +rl.question('Nhập số ngày thuê: ');
    let typeOfRoom = rl.question('Nhập loại phòng: ');
    let price = +rl.question('Nhập giá phòng: ');
    let roomNumber = +rl.question('Nhập số phòng: ');
    return new room_1.Room(dayOfRents, typeOfRoom, price, roomNumber, person);
}
function inputCustomer() {
    console.log('Nhập thông tin khách trọ');
    let room = inputRoom();
    hotelManagement.createRoomForRent(room);
}
function showListOfCustomer() {
    console.log('Hiển thị danh sách khách trọ');
    let listOfRooms = hotelManagement.getListOfRooms();
    let listOfCustomer = [];
    let dataOfRoom;
    for (let i = 0; i < listOfRooms.length; i++) {
        dataOfRoom = {
            roomNumber: listOfRooms[i].getRoomNumber(),
            typeOfRoom: listOfRooms[i].getTypeOfRoom(),
            price: listOfRooms[i].getPrice(),
            dayOfRents: listOfRooms[i].getDayOfRents(),
            nameOfCustomer: listOfRooms[i].getPerson().getName(),
            dateOfBirth: listOfRooms[i].getPerson().getDateOfBirth(),
            identity: listOfRooms[i].getPerson().getIdentity(),
        };
        listOfCustomer.push(dataOfRoom);
    }
    console.table(listOfCustomer);
}
function updateCustomer() {
    console.log('Chỉnh sửa thông tin khách trọ');
    let roomNumber = +rl.question('Nhập số phòng thuê: ');
    let indexRoom = hotelManagement.findIndexRoomInList(roomNumber);
    let newRoom = inputRoom();
    hotelManagement.updateRoom(indexRoom, newRoom);
}
function removeCustomer() {
    console.log('Xoá thông tin khách trọ');
    let roomNumber = +rl.question('Nhập số phòng thuê: ');
    let indexRoom = hotelManagement.findIndexRoomInList(roomNumber);
    hotelManagement.removeRoom(indexRoom);
}
do {
    console.log('---Quản lý khách sạn---');
    console.log('1.Nhập thông tin khách trọ');
    console.log('2.Hiển thị danh sách khách trọ');
    console.log('3.Chỉnh sửa thông tin khách trọ');
    console.log('4.Xoá thông tin khách trọ');
    console.log('5.Trả phòng');
    console.log('0.Thoát chương trình');
    choice = +rl.question('Nhập lựa chọn của bạn: ');
    switch (choice) {
        case 1: {
            inputCustomer();
            break;
        }
        case 2: {
            showListOfCustomer();
            break;
        }
        case 3: {
            updateCustomer();
            break;
        }
        case 4: {
            removeCustomer();
            break;
        }
        case 5: {
            console.log('Trả phòng');
            let roomNumber = +rl.question('Nhập số phòng thuê: ');
            let indexRoom = hotelManagement.findIndexRoomInList(roomNumber);
            console.log(`Số tiền cần thanh toán: ${hotelManagement.checkOut(indexRoom)}`);
            break;
        }
    }
} while (choice != 0);
