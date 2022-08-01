import * as rl from 'readline-sync'
import {CustomerRoomManagement} from "./customer_room_management";
import {Person} from "./person";
import {CustomerRoom} from "./customer_room";
import {Menu} from "./DislayScreen";
import {HotelRoom} from "./hotel_room";
import {HotelRoomManagement} from "./hotel_room_management";
import {InitializationData} from "./InitializationData";

let data = new InitializationData();
data.initHotelRoom();
data.initCustomerRoom();

let choice = -1;
let menu = new Menu();


function getInfoOfCustomer() {
    let name = rl.question('Nhập tên khách trọ: ');
    let dateOfBirth = rl.question('Nhập ngày sinh: ');
    let identity = rl.question('Nhập CMND: ');
    return new Person(name, dateOfBirth, identity);
}

function checkRoomInHotel(listOfRoomNumberInHotel: any[], roomNumber: number) {
    let count = 0
    for (let i = 0; i < listOfRoomNumberInHotel.length; i++) {
        if (roomNumber == listOfRoomNumberInHotel[i]) {
            count++;
        }
    }
    if (count == 0) {
        let status = 'Phòng bạn chọn không tồn tại - Hãy chọn lại phòng';
        console.log(status);
        selectRoomInHotel();
    }
}

function checkRoomHaveGuest(listOfCustomerRoomNumber: any[], roomNumber: number) {
    for (let i = 0; i < listOfCustomerRoomNumber.length; i++) {
        let count = 0;
        if (roomNumber == listOfCustomerRoomNumber[i]) {
            count++;
        }
        if (count !== 0) {
            let status = 'Phòng bạn chọn đã có khách trọ - Hãy chọn lại phòng';
            console.log(status);
            selectRoomInHotel();
        }
    }
}

function selectRoomInHotel() {
    showDataTableOfHotelRoom();
    let roomNumber = +rl.question('Nhập số phòng: ');
    let listOfRoomNumberInHotel = data.hotelRoomManagement.getHotelRoomNumberList();
    let listOfCustomerRoomNumber = data.customerManagement.getCustomerRoomNumberList();
    checkRoomInHotel(listOfRoomNumberInHotel, roomNumber);
    checkRoomHaveGuest(listOfCustomerRoomNumber, roomNumber);
    return data.hotelRoomManagement.getRoomInHotel(roomNumber)
}

function prepareCustomerRoom() {
    let person = getInfoOfCustomer();
    let hotelRoom = selectRoomInHotel()
    let dayOfRents = +rl.question('Nhập số ngày thuê: ');
    return new CustomerRoom( dayOfRents, hotelRoom, person);
}

function takeCustomerIntoRoom() {
    console.log('Nhập thông tin khách trọ');
    let CustomerRoom = prepareCustomerRoom();
    data.customerManagement.pushCustomerRoomIntoListOfCustomerRoom(CustomerRoom);
}

function showDataTableOfCustomer() {
    console.log('Hiển thị danh sách khách trọ');
    let listOfCustomerRooms = data.customerManagement.getListOfCustomerRooms()
    let DataTableOfCustomer = []
    let dataOfEachCustomerRoom;
    for (let i = 0; i < listOfCustomerRooms.length; i++) {
        dataOfEachCustomerRoom = {
            roomNumber: listOfCustomerRooms[i].getRoom().getRoomNumber(),
            typeOfRoom: listOfCustomerRooms[i].getRoom().getTypeOfRoom(),
            price: listOfCustomerRooms[i].getRoom().getPrice(),
            dayOfRents: listOfCustomerRooms[i].getDayOfRents(),
            nameOfCustomer: listOfCustomerRooms[i].getPerson().getName(),
            dateOfBirth: listOfCustomerRooms[i].getPerson().getDateOfBirth(),
            identity: listOfCustomerRooms[i].getPerson().getIdentity(),
        }
        DataTableOfCustomer.push(dataOfEachCustomerRoom);
    }
    console.table(DataTableOfCustomer);
}

function updateInfoOfCustomer() {
    console.log('Chỉnh sửa thông tin khách trọ');
    removeInfoOfCustomer();
    takeCustomerIntoRoom();
}

function removeInfoOfCustomer() {
    console.log('Xoá thông tin khách trọ');
    let roomNumber = +rl.question('Nhập số phòng thuê: ');
    let indexRoomInCustomerRoomList = data.customerManagement.findIndexOfCustomerRoom(roomNumber);
    data.customerManagement.takeCustomerOutOfRoom(indexRoomInCustomerRoomList);
    let indexRoomInHotelRoomList = data.hotelRoomManagement.findIndexOfHotelRoom(roomNumber);
    data.hotelRoomManagement.updateRoomStatusRoomEmpty(indexRoomInHotelRoomList)
}

function checkOut() {
    console.log('Trả phòng');
    let roomNumber = +rl.question('Nhập số phòng thuê: ');
    let indexRoom = data.customerManagement.findIndexOfCustomerRoom(roomNumber);
    console.log(`Số tiền cần thanh toán: ${data.customerManagement.checkOut(indexRoom)}`);
}

function updateRoomHaveGuestInHotel(listOfRoomNumberInHotel: any[], listOfCustomerRoomNumber: any[]) {
    for (let i = 0; i < listOfRoomNumberInHotel.length; i++) {
        for (let j = 0; j < listOfCustomerRoomNumber.length; j++) {
            if (listOfRoomNumberInHotel[i] == listOfCustomerRoomNumber[j]) {
                let roomIndex = data.hotelRoomManagement
                    .findIndexOfHotelRoom(listOfRoomNumberInHotel[i]);
                data.hotelRoomManagement.updateStatusOfRoomHaveGuest(roomIndex)
            }
        }
    }
}

function getDataTableOfHotelRoom(listOfRoomInHotel: HotelRoom[]) {
    let DataTableOfHotelRoom = [];
    let dataOfEachHotelRoom;
    for (let i = 0; i < listOfRoomInHotel.length; i++) {
        dataOfEachHotelRoom = {
            roomNumber: listOfRoomInHotel[i].getRoomNumber(),
            typeOfRoom: listOfRoomInHotel[i].getTypeOfRoom(),
            price: listOfRoomInHotel[i].getPrice(),
            roomStatus: listOfRoomInHotel[i].getRoomStatus(),
        }
        DataTableOfHotelRoom.push(dataOfEachHotelRoom);
    }
    return DataTableOfHotelRoom;
}

function showDataTableOfHotelRoom() {
    let listOfRoomInHotel = data.hotelRoomManagement.getListOfRoomInHotel()
    let HotelRoomNumberList = data.hotelRoomManagement.getHotelRoomNumberList();
    let CustomerRoomNumberList = data.customerManagement.getCustomerRoomNumberList();
    updateRoomHaveGuestInHotel(HotelRoomNumberList, CustomerRoomNumberList);
    let dataTableOfHotelRoom = getDataTableOfHotelRoom(listOfRoomInHotel);
    console.table(dataTableOfHotelRoom)
}

enum MenuOfStaff {
    Take_Customer_Into_Room = 1,
    Show_Data_Table_Of_Customer = 2,
    Update_Info_Of_Customer = 3,
    Remove_Info_Of_Customer = 4,
    Check_Out = 5,
    Show_Data_Table_Of_Hotel_Room = 6,
    Exit = 0,
}

function accessTaskOfStaff() {
    do {
        menu.menuOfStaff()
        choice = +rl.question('Nhập lựa chọn của bạn: ')
        switch (choice) {
            case MenuOfStaff.Take_Customer_Into_Room: {
                takeCustomerIntoRoom();
                break;
            }
            case MenuOfStaff.Show_Data_Table_Of_Customer: {
                showDataTableOfCustomer();
                break;
            }
            case MenuOfStaff.Update_Info_Of_Customer: {
                updateInfoOfCustomer();
                break;
            }
            case MenuOfStaff.Remove_Info_Of_Customer: {
                removeInfoOfCustomer();
                break;
            }
            case MenuOfStaff.Check_Out: {
                checkOut();
                break;
            }
            case MenuOfStaff.Show_Data_Table_Of_Hotel_Room: {
                console.log('Hiển thị danh sách phòng');
                showDataTableOfHotelRoom();
                break;
            }
        }
    } while (choice != MenuOfStaff.Exit);
}

do {
    menu.menuOfLogin()
    choice = +rl.question('Nhập chức danh của bạn: ')
    switch (choice) {
        case 1: {
            accessTaskOfStaff();
            break;
        }
        case 2: {

            break;
        }
        case 3: {

            break;
        }
        case 4: {

            break;
        }
        case 5: {

            break;
        }
    }
}
while (choice != 0)

