export interface CoffeeInterface {
    id: number,
    roaster_id: number,
    weight:number,
    price:number,
    description:string
}

export interface OrderInterface {
    user_id: number,
    roaster_id:number,
    order: [OrderItemInterface],
    sent_to: string,
    is_paid: boolean
}

export interface OrderItemInterface {
    coffee_id:number,
    amount:number
}

export interface RoasterInterface {
    id: number,
    name: string,
    address:string;
}

export interface UserInterface { 
    id: number,
    name: string,
    address: string,
    document: string;
}


