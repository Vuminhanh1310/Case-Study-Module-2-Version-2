export class HotelRoom {
    private _typeOfRoom: string;
    private _price: number;
    private _roomNumber: number;
    private roomStatus: string;

    constructor(type_of_room: string, price: number, room_number: number) {
        this._typeOfRoom = type_of_room;
        this._price = price;
        this._roomNumber = room_number;
        this.roomStatus = 'phòng trống';
    }

    getTypeOfRoom(): string {
        return this._typeOfRoom;
    }

    setTypeOfRoom(value: string) {
        this._typeOfRoom = value;
    }

    getPrice(): number {
        return this._price;
    }

    setPrice(value: number) {
        this._price = value;
    }

    getRoomNumber(): number {
        return this._roomNumber;
    }

    setRoomNumber(value: number) {
        this._roomNumber = value;
    }

    getRoomStatus(): string {
        return this.roomStatus;
    }

    setRoomStatus(value:string){
        this.roomStatus = value;
    }

    makeSingleRoom(roomNumber: number){
        this.setTypeOfRoom('single');
        this.setPrice(500);
        this.setRoomNumber(roomNumber);
    }

    makeDoubleRoom(roomNumber: number){
        this.setTypeOfRoom('double');
        this.setPrice(800);
        this.setRoomNumber(roomNumber);
    }

    makeLuxuryRoom(roomNumber:number){
        this.setTypeOfRoom('luxury');
        this.setPrice(1000);
        this.setRoomNumber(roomNumber)
    }
}