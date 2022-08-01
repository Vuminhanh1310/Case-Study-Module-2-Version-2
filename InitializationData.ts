import {Person} from "./person";
import {HotelRoom} from "./hotel_room";
import {CustomerRoom} from "./customer_room";
import {CustomerRoomManagement} from "./customer_room_management";
import {HotelRoomManagement} from "./hotel_room_management";
import {User} from "./user";

export class InitializationData {
    customerManagement = new CustomerRoomManagement();
    hotelRoomManagement = new HotelRoomManagement();

    initHotelRoom() {
        let numberOfFloor = 6;
        let numberOfRoomInFloor = 6;
        for (let i = 1; i <= numberOfFloor; i++) {
            if (i <= 2) {
                for (let j = 1; j <= numberOfRoomInFloor; j++) {
                    let roomNumber = 100 * i + j;
                    let hotelRoom = new HotelRoom(' ', 0, 0)
                    hotelRoom.makeSingleRoom(roomNumber)
                    this.hotelRoomManagement.createHotelRoom(hotelRoom);
                }
            } else if (i > 2 && i <= 4) {
                for (let j = 1; j <= numberOfRoomInFloor; j++) {
                    let roomNumber = 100 * i + j;
                    let hotelRoom = new HotelRoom(' ', 0, 0)
                    hotelRoom.makeDoubleRoom(roomNumber)
                    this.hotelRoomManagement.createHotelRoom(hotelRoom);

                }
            } else {
                for (let j = 1; j <= numberOfRoomInFloor; j++) {
                    let roomNumber = 100 * i + j;
                    let hotelRoom = new HotelRoom(' ', 0, 0)
                    hotelRoom.makeLuxuryRoom(roomNumber)
                    this.hotelRoomManagement.createHotelRoom(hotelRoom);
                }

            }
        }
    }

    initCustomerRoom(){
        let person1 = new Person('Nguyễn Văn A','01/01/2000','100200301')
        let person2 = new Person('Nguyễn Văn B','02/01/2000','100200302')
        let person3 = new Person('Nguyễn Văn C','03/01/2000','100200303')
        let person4 = new Person('Nguyễn Văn D','04/01/2000','100200304')
        let person5 = new Person('Nguyễn Văn E','05/01/2000','100200305')
        let person6 = new Person('Nguyễn Văn F','05/01/2000','100200305')
        let room101 = new HotelRoom('single',500,101)
        let room102 = new HotelRoom('single',500,102)
        let room103 = new HotelRoom('single',500,103)
        let room301 = new HotelRoom('double',800,301)
        let room302 = new HotelRoom('double',800,302)
        let room303 = new HotelRoom('double',800,303)
        let customerRoom1 = new CustomerRoom(1,room101,person1)
        let customerRoom2 = new CustomerRoom(2,room102,person2)
        let customerRoom3 = new CustomerRoom(3,room103,person3)
        let customerRoom4 = new CustomerRoom(4,room301,person4)
        let customerRoom5 = new CustomerRoom(5,room302,person5)
        let customerRoom6 = new CustomerRoom(2,room303,person6)
        this.customerManagement.pushCustomerRoomIntoListOfCustomerRoom(customerRoom1)
        this.customerManagement.pushCustomerRoomIntoListOfCustomerRoom(customerRoom2)
        this.customerManagement.pushCustomerRoomIntoListOfCustomerRoom(customerRoom3)
        this.customerManagement.pushCustomerRoomIntoListOfCustomerRoom(customerRoom4)
        this.customerManagement.pushCustomerRoomIntoListOfCustomerRoom(customerRoom5)
        this.customerManagement.pushCustomerRoomIntoListOfCustomerRoom(customerRoom6)
    }

    initStaff() {
        let staff1 = new User('staff1', '001','staff')
        let staff2 = new User('staff2', '002','staff')
        let staff3 = new User('staff3', '003','staff')
        let staff4 = new User('staff4', '004','staff')
    }

}