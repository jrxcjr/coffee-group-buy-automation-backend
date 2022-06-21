export class CoffeeClass {
    id: number;
    roaster_id: number;
    name:string;
    weight:number;
    price:number;
    description:string;

    constructor (id:number, roaster_id:number, name:string, weight:number, price:number,description:string) {
        this.id = id,
        this.roaster_id = roaster_id,
        this.name = name,
        this.weight = weight,
        this.price = price,
        this.description = description
    }
}
