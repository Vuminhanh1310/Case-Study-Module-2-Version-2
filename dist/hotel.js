"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hotel = void 0;
class Hotel {
    constructor(days_of_rent, type_of_room, price, person) {
        this._days_of_rent = days_of_rent;
        this._type_of_room = type_of_room;
        this._price = price;
        this._person = person;
    }
    get days_of_rent() {
        return this._days_of_rent;
    }
    set days_of_rent(value) {
        this._days_of_rent = value;
    }
    get type_of_room() {
        return this._type_of_room;
    }
    set type_of_room(value) {
        this._type_of_room = value;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
    get person() {
        return this._person;
    }
    set person(value) {
        this._person = value;
    }
}
exports.Hotel = Hotel;
