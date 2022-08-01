import {User} from "./user";

export class UserManagement{
    private listOfStaff:User[] = [];
    private listOfManager:User[] = [];
    private listOfAdmin:User[] = [];

    getListOfStaff(){
        return this.listOfStaff
    }

    getListOfManager(){
        return this.listOfManager
    }

    getListOfAdmin(){
        return this.listOfAdmin
    }

    takeStaffIntoListOfStaff(user:User){
        this.listOfStaff.push(user);
    }

    takeManagerIntoListOfManager(user:User){
        this.listOfManager.push(user);
    }

    takeAdminIntoListOfAdmin(user:User){
        this.listOfAdmin.push(user);
    }

    checkStaff(username:string,password:string){
        let check = false;
        for(let i = 0; i < this.listOfStaff.length; i++){
            if(username == this.listOfStaff[i].getUserName() && password == this.listOfStaff[i].getPassword()){
                check = true;
            }
        }
        return check
    }

    checkManager(username:string,password:string){
        let check = false;
        for(let i = 0; i < this.listOfManager.length; i++){
            if(username == this.listOfManager[i].getUserName() && password == this.listOfManager[i].getPassword()){
                check = true;
            }
        }
        return check
    }

    checkAdmin(username:string,password:string){
        let check = false;
        for(let i = 0; i < this.listOfAdmin.length; i++){
            if(username == this.listOfAdmin[i].getUserName() && password == this.listOfAdmin[i].getPassword()){
                check = true;
            }
        }
        return check
    }




}