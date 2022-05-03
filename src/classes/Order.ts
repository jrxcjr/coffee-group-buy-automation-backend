import {OrderItemInterface} from "../interfaces/interfaces";

export class Order {
    user_id: number;
    roaster_id:number;
    order: [OrderItemInterface];
    sent_to: string;
    is_paid: boolean;

    constructor (user_id:number, roaster_id:number, order:[OrderItemInterface], sent_to:string, is_paid:boolean) {
        this.user_id = user_id,
        this.roaster_id = roaster_id,
        this.order = order,
        this.sent_to = sent_to,
        this.is_paid = is_paid
    }
}

export class OrderItem {
    coffee_id:number;
    amount:number;

    constructor(coffee_id: number, amount:number) {
        this.coffee_id = coffee_id,
        this.amount = amount
    }
}