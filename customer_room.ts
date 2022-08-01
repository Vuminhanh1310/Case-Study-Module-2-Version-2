import {Person} from "./person";
import {HotelRoom} from "./hotel_room";

export class CustomerRoom {
    private _dayOfRents: number;
    private _room: HotelRoom;
    private _person: Person;

    constructor(dayOfRents: number, room: HotelRoom, person: Person) {
        this._dayOfRents = dayOfRents;
        this._room = room;
        this._person = person;
    }

    getDayOfRents(): number {
        return this._dayOfRents;
    }

    setDayOfRents(value: number) {
        this._dayOfRents = value;
    }

    getRoom(): HotelRoom {
        return this._room;
    }

    setRoom(value: HotelRoom) {
        this._room = value;
    }
    getPerson(): Person {
        return this._person;
    }

    setPerson(value: Person) {
        this._person = value;
    }


    getTypeOfCustomerRoom(): string {
        return this._room.getTypeOfRoom();
    }

    setTypeOfCustomerRoom(value: string) {
        this._room.setTypeOfRoom(value);
    }

    getPrice(): number {
        return this._room.getPrice();
    }

    setPrice(value: number) {
        this._room.setPrice(value);
    }

    getCustomerRoomNumber(): number {
        return this._room.getRoomNumber();
    }

    setCustomerRoomNumber(value: number) {
        this._room.setRoomNumber(value);
    }

    getCustomerName() {
        return this._person.getName();
    }

    setCustomerName(value: string) {
        this._person.setName(value);
    }
}