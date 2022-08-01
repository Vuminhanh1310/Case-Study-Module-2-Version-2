export class User{
    private username:string;
    private password:string;
    private _role: string;

    constructor(username: string, password: string, role: string) {
        this.username = username;
        this.password = password;
        this._role = role;
    }

    getUserName(){
        return this.username;
    }

    setUserName(value: string){
        this.username = value;
    }

    getPassword(){
        return this.password;
    }

    setPassword(value: string){
        this.password = value;
    }

    getRole(): string {
        return this._role;
    }

    setRole(value: string) {
        this._role = value;
    }
}