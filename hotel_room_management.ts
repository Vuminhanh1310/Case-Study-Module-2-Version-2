import {HotelRoom} from "./hotel_room";

export class HotelRoomManagement {

    private List0fHotelRoom: HotelRoom[] = [];

    public getListOfRoomInHotel() {
        return this.List0fHotelRoom;
    }

    public createHotelRoom(hotelRoom: HotelRoom){
        this.List0fHotelRoom.push(hotelRoom);
    }

    public findIndexOfHotelRoom(roomNumber: number):number {
        let indexRoom = -1
        for (let i = 0; i < this.List0fHotelRoom.length; i++) {
            if (this.List0fHotelRoom[i].getRoomNumber() === roomNumber) {
                indexRoom = i;
            }
        }
        return indexRoom
    }

    public updateHotelRoom(index_room: number, newRoom: HotelRoom){
        this.List0fHotelRoom[index_room] = newRoom;
    }

    public removeHotelRoom(index_room: number){
        this.List0fHotelRoom.splice(index_room,1);
    }

    public updateStatusOfRoomHaveGuest(index_room: number){
        this.List0fHotelRoom[index_room].setRoomStatus('phòng có khách thuê')
    }

    public updateRoomStatusRoomEmpty(index_room: number){
        this.List0fHotelRoom[index_room].setRoomStatus('phòng trống')
    }

    public getRoomInHotel (roomNumber: number){
        let indexRoom = this.findIndexOfHotelRoom(roomNumber);
        return this.List0fHotelRoom[indexRoom]
    }

    public getHotelRoomNumberList(){
        let listOfRoomNumberInHotel = [];
        for (let i = 0; i < this.List0fHotelRoom.length; i++) {
            listOfRoomNumberInHotel.push(this.List0fHotelRoom[i].getRoomNumber());
        }
        return listOfRoomNumberInHotel
    }
}