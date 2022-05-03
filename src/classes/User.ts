export class User {
    id: number;
    name: string;
    address: string;
    document: string;

    constructor(id:number, name:string, address:string , document:string) {
        this.id = id,
        this.name = name,
        this.address = address,
        this.document = document
    }

}