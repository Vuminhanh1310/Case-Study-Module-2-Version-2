import {Person} from "./person";

export class Room{
    private _dayOfRents: number;
    private _typeOfRoom: string;
    private _price: number;
    private _roomNumber: number;
    private _person: Person;

    constructor(days_of_rent: number, type_of_room: string, price: number, room_number: number, person: Person) {
        this._dayOfRents = days_of_rent;
        this._typeOfRoom = type_of_room;
        this._price = price;
        this._roomNumber = room_number;
        this._person = person;
    }

    getDayOfRents(): number {
        return this._dayOfRents;
    }

    setDayOfRents(value: number) {
        this._dayOfRents = value;
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

    getPerson(): Person {
        return this._person;
    }

    setPerson(value: Person) {
        this._person = value;
    }
}