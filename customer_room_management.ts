import {CustomerRoom} from "./customer_room";

export class CustomerRoomManagement {
   private listOfCustomerRooms: CustomerRoom[] = [];

   public getListOfCustomerRooms(): CustomerRoom[] {
       return this.listOfCustomerRooms
   }

   public pushCustomerRoomIntoListOfCustomerRoom(room: CustomerRoom){
       this.listOfCustomerRooms.push(room);
   }

   public findIndexOfCustomerRoom(room_number: number):number {
       let indexRoom = -1
       for (let i = 0; i < this.listOfCustomerRooms.length; i++) {
           if (this.listOfCustomerRooms[i].getCustomerRoomNumber() === room_number) {
               indexRoom = i;
           }
       }
       return indexRoom
   }

   public updateCustomerRoom(index_room: number, new_room: CustomerRoom){
       this.listOfCustomerRooms[index_room] = new_room;
   }

   public takeCustomerOutOfRoom(index_room: number){
       this.listOfCustomerRooms.splice(index_room,1);
   }
   public checkOut(index_room: number){
      let price = this.listOfCustomerRooms[index_room].getPrice();
      let day = this.listOfCustomerRooms[index_room].getDayOfRents();
      return price * day
   }

   public getCustomerRoomNumberList(){
       let listOfCustomerRoomNumber = [];
       for (let i = 0; i < this.listOfCustomerRooms.length; i++) {
           listOfCustomerRoomNumber.push(this.listOfCustomerRooms[i].getRoom().getRoomNumber());
       }
       return listOfCustomerRoomNumber
   }



}
