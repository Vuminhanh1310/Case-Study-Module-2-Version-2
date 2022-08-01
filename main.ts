import * as rl from 'readline-sync'
import {Person} from "./person";
import {CustomerRoom} from "./customer_room";
import {Menu} from "./DislayScreen";
import {HotelRoom} from "./hotel_room";
import {InitializationData} from "./InitializationData";

let data = new InitializationData();
data.initHotelRoom();
data.initCustomerRoom();
data.initStaff();
data.initManager();
data.initAdmin();

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

enum MenuOfManager {
    Take_Customer_Into_Room = 1,
    Show_Data_Table_Of_Customer = 2,
    Update_Info_Of_Customer = 3,
    Remove_Info_Of_Customer = 4,
    Check_Out = 5,
    Show_Data_Table_Of_Hotel_Room = 6,
    Revenue_Management = 7,
    Add_Staff_Account = 8,
    Show_List_Of_Staff_Account = 9,
    Update_Staff_Account = 10,
    Delete_Staff_Account = 11,
    Exit = 0,
}

function accessTaskOfManager() {
    do {
        menu.menuOfManager()
        choice = +rl.question('Nhập lựa chọn của bạn: ')
        switch (choice) {
            case MenuOfManager.Take_Customer_Into_Room: {
                takeCustomerIntoRoom();
                break;
            }
            case MenuOfManager.Show_Data_Table_Of_Customer: {
                showDataTableOfCustomer();
                break;
            }
            case MenuOfManager.Update_Info_Of_Customer: {
                updateInfoOfCustomer();
                break;
            }
            case MenuOfManager.Remove_Info_Of_Customer: {
                removeInfoOfCustomer();
                break;
            }
            case MenuOfManager.Check_Out: {
                checkOut();
                break;
            }
            case MenuOfManager.Show_Data_Table_Of_Hotel_Room: {
                console.log('Hiển thị danh sách phòng');
                showDataTableOfHotelRoom();
                break;
            }
            case MenuOfManager.Revenue_Management:{
                console.log('Đang phát triển');
                break;
            }
            case MenuOfManager.Add_Staff_Account:{
                console.log('Đang phát triển');
                break;
            }
            case MenuOfManager.Show_List_Of_Staff_Account:{
                console.log('Đang phát triển');
                break;
            }
            case MenuOfManager.Update_Staff_Account:{
                console.log('Đang phát triển');
                break;
            }
            case MenuOfManager.Delete_Staff_Account:{
                console.log('Đang phát triển');
                break;
            }
        }
    } while (choice != MenuOfManager.Exit);
}

enum MenuOfAdmin {
    Take_Customer_Into_Room = 1,
    Show_Data_Table_Of_Customer = 2,
    Update_Info_Of_Customer = 3,
    Remove_Info_Of_Customer = 4,
    Check_Out = 5,
    Show_Data_Table_Of_Hotel_Room = 6,
    Revenue_Management = 7,
    Add_Staff_Account = 8,
    Show_List_Of_Staff_Account = 9,
    Update_Staff_Account = 10,
    Delete_Staff_Account = 11,
    Add_Manager_Account = 12,
    Show_List_Of_Manager_Account = 13,
    Update_Manager_Account = 14,
    Delete_Manager_Account = 15,
    Exit = 0,
}

function accessTaskOfAdmin() {
    do {
        menu.menuOfAdmin()
        choice = +rl.question('Nhập lựa chọn của bạn: ')
        switch (choice) {
            case MenuOfAdmin.Take_Customer_Into_Room: {
                takeCustomerIntoRoom();
                break;
            }
            case MenuOfAdmin.Show_Data_Table_Of_Customer: {
                showDataTableOfCustomer();
                break;
            }
            case MenuOfAdmin.Update_Info_Of_Customer: {
                updateInfoOfCustomer();
                break;
            }
            case MenuOfAdmin.Remove_Info_Of_Customer: {
                removeInfoOfCustomer();
                break;
            }
            case MenuOfAdmin.Check_Out: {
                checkOut();
                break;
            }
            case MenuOfAdmin.Show_Data_Table_Of_Hotel_Room: {
                console.log('Hiển thị danh sách phòng');
                showDataTableOfHotelRoom();
                break;
            }
            case MenuOfAdmin.Revenue_Management: {
                console.log('Đang phát triển');
                break;
            }
            case MenuOfAdmin.Add_Staff_Account: {
                console.log('Đang phát triển');
                break;
            }
            case MenuOfAdmin.Show_List_Of_Staff_Account: {
                console.log('Đang phát triển');
                break;
            }
            case MenuOfAdmin.Update_Staff_Account: {
                console.log('Đang phát triển');
                break;
            }
            case MenuOfAdmin.Delete_Staff_Account: {
                console.log('Đang phát triển');
                break;
            }
            case MenuOfAdmin.Add_Manager_Account: {
                console.log('Đang phát triển');
                break;
            }
            case MenuOfAdmin.Show_List_Of_Manager_Account: {
                console.log('Đang phát triển');
                break;
            }
            case MenuOfAdmin.Update_Manager_Account: {
                console.log('Đang phát triển');
                break;
            }
            case MenuOfAdmin.Delete_Manager_Account: {
                console.log('Đang phát triển');
                break;
            }
        }
    }
        while (choice != MenuOfAdmin.Exit)
}




function checkInputStaffAccount() {
    let userName = rl.question('Nhập Username: ')
    let password = rl.question('Nhập Password: ')
    return data.userManagement.checkStaff(userName, password)
}

function checkInputManagerAccount() {
    let userName = rl.question('Nhập Username: ')
    let password = rl.question('Nhập Password: ')
    return data.userManagement.checkManager(userName, password)
}

function checkInputAdminAccount() {
    let userName = rl.question('Nhập Username: ')
    let password = rl.question('Nhập Password: ')
    return data.userManagement.checkAdmin(userName, password)
}

enum MenuOfLogin {
    Login_By_StaffAccount = 1,
    Login_By_ManagerAccount = 2,
    Login_By_AdminAccount = 3,
    Exit = 0,
}

do {
    menu.menuOfLogin()
    choice = +rl.question('Nhập chức danh của bạn: ')
    switch (choice) {
        case MenuOfLogin.Login_By_StaffAccount: {
            let check = checkInputStaffAccount();
            if (check) {
                accessTaskOfStaff();
            } else {
                console.log('Liên hệ với quản lý để đăng nhập')
                checkInputStaffAccount()
            }
            break;
        }
        case MenuOfLogin.Login_By_ManagerAccount: {
            let check = checkInputManagerAccount();
            if (check) {
                accessTaskOfManager();
            } else {
                console.log('Liên hệ với admin để đăng nhập')
                checkInputManagerAccount()
            }
            break;
        }
        case MenuOfLogin.Login_By_AdminAccount: {
            let check = checkInputAdminAccount();
            if (check) {
                accessTaskOfAdmin();
            } else {
                console.log('Liên hệ với kỹ thuật để đăng nhập')
                checkInputAdminAccount();
            }
            break;
        }
    }
} while (choice != MenuOfLogin.Exit)

