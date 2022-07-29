import {Room} from "./room";

export class HotelManagement {
   private listOfRooms: Room[] = [];

   public getListOfRooms(): Room[] {
       return this.listOfRooms
   }

   public createRoomForRent(room: Room){
       this.listOfRooms.push(room);
   }

   public findIndexRoomInList(room_number: number):number {
       let indexRoom = -1
       for (let i = 0; i < this.listOfRooms.length; i++) {
           if (this.listOfRooms[i].getRoomNumber() === room_number) {
               indexRoom = i;
           }
       }
       return indexRoom
   }

   public updateRoom(index_room: number, new_room: Room){
       this.listOfRooms[index_room] = new_room;
   }

   public removeRoom(index_room: number){
       this.listOfRooms.splice(index_room,1);
   }
   public checkOut(index_room: number){
      let price = this.listOfRooms[index_room].getPrice();
      let day = this.listOfRooms[index_room].getDayOfRents();
      return price * day
   }



}
