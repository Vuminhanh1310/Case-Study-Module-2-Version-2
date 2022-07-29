import * as rl from 'readline-sync'
import {HotelManagement} from "./hotel_management";
import {Person} from "./person";
import {Room} from "./room";

let choice = -1;
let hotelManagement = new HotelManagement();

let person1 = new Person( 'A', '01/01/2000', '001')
let room101 = new Room (1,'single',300,101, person1)
hotelManagement.createRoomForRent(room101);
let person2 = new Person( 'B', '02/01/2000', '002')
let room102 = new Room (2,'double',600,102, person2)
hotelManagement.createRoomForRent(room102);

let person3 = new Person( 'C', '03/01/2000', '003')
let room103 = new Room (3,'luxury',900,103,person3)
hotelManagement.createRoomForRent(room103);

function inputPerson() {
    let name = rl.question('Nhập tên khách trọ: ');
    let dateOfBirth = rl.question('Nhập ngày sinh: ');
    let identity = rl.question('Nhập CMND: ');
    return new Person(name, dateOfBirth, identity);
}

function inputRoom() {
    let person = inputPerson();
    let dayOfRents = +rl.question('Nhập số ngày thuê: ');
    let typeOfRoom = rl.question('Nhập loại phòng: ');
    let price = +rl.question('Nhập giá phòng: ');
    let roomNumber = +rl.question('Nhập số phòng: ');
    return new Room(dayOfRents, typeOfRoom, price, roomNumber, person);
}

function inputCustomer() {
    console.log('Nhập thông tin khách trọ');
    let room = inputRoom();
    hotelManagement.createRoomForRent(room);
}

function showListOfCustomer() {
    console.log('Hiển thị danh sách khách trọ');
    let listOfRooms = hotelManagement.getListOfRooms()
    let listOfCustomer = []
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
        }
        listOfCustomer.push(dataOfRoom);
    }
    console.table(listOfCustomer);
}

function updateCustomer() {
    console.log('Chỉnh sửa thông tin khách trọ');
    let roomNumber = +rl.question('Nhập số phòng thuê: ');
    let indexRoom = hotelManagement.findIndexRoomInList(roomNumber);
    let newRoom = inputRoom();
    hotelManagement.updateRoom(indexRoom, newRoom)
}

function removeCustomer() {
    console.log('Xoá thông tin khách trọ');
    let roomNumber = +rl.question('Nhập số phòng thuê: ');
    let indexRoom = hotelManagement.findIndexRoomInList(roomNumber);
    hotelManagement.removeRoom(indexRoom);
}

do{
    console.log('---Quản lý khách sạn---')
    console.log('1.Nhập thông tin khách trọ')
    console.log('2.Hiển thị danh sách khách trọ')
    console.log('3.Chỉnh sửa thông tin khách trọ')
    console.log('4.Xoá thông tin khách trọ')
    console.log('5.Trả phòng')
    console.log('0.Thoát chương trình')
    choice = +rl.question('Nhập lựa chọn của bạn: ')
    switch (choice) {
        case 1:{
            inputCustomer();
            break;
        }
        case 2:{
            showListOfCustomer();
            break;
        }
        case 3:{
            updateCustomer();
            break;
        }
        case 4:{
            removeCustomer();
            break;
        }
        case 5:{
            console.log('Trả phòng');
            let roomNumber = +rl.question('Nhập số phòng thuê: ');
            let indexRoom = hotelManagement.findIndexRoomInList(roomNumber);
            console.log(`Số tiền cần thanh toán: ${hotelManagement.checkOut(indexRoom)}`);
            break;
        }
    }
}while(choice!=0);