export class User{
    private username:string;
    private password:string;
    private _rule: string;

    constructor(username: string, password: string, rule: string) {
        this.username = username;
        this.password = password;
        this._rule = rule;
    }

    getUserName(){
        return this.username;
    }

    setUserName(username:string){
        this.username=username;
    }

    getPassword(){
        return this.password;
    }

    setPassword(password:string){
        this.password=password;
    }

    getRule(): string {
        return this._rule;
    }

    setRule(value: string) {
        this._rule = value;
    }
}