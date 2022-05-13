let userArray = [
    {
      id: 1,
      name: "Admin",
      address: "Rua 1234, Numero 340",
      document: "108.121.615-09"
    },
    {
      id: 2,
      name: "João",
      address: "Rua 12345, Numero 350",
      document: "000.000.000.00"
    }
]

let roasterArray = [
  {
    id:1,
    name: "Kaffe",
    address:"Av. Conselheiro aguiar 1234"
  }
]

let coffeeArray = [
  {
    id: 1,
    roaster_id: 1,
    coffee_name: "Café da Tristeza",
    weight: 250,
    price: 25,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
  },
  {
    id: 2,
    roaster_id: 1,
    coffee_name: "Café da Alegria",
    weight: 250,
    price: 30,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
  }
]

let ordersObject = [
  {
    user_id: 2,
    roaster_id: 1,
    order: [
      {
        coffee_id: 1,
        amount: 1
      },
      {
        coffee_id: 2,
        amount: 1
      }
    ],
    sent_to: userArray[0].address,
  }
]

import { CoffeeClass } from "./classes/Coffee"
import { User } from "./classes/User"
import { Roaster } from "./classes/Roaster"

function createCoffee(id:number, roaster_id:number, name:string, weight:number, price:number, description:string) {
    const createdCoffee = new CoffeeClass(id, roaster_id, name, weight, price, description);

    return console.log(createdCoffee)
}

function createUser(id:number, name:string, address:string, document:string) {
  const createdUser = new User(id, name, address,document);

  return console.log(createdUser)
}

function createRoastery(id:number, name:string, address:string) {
  const createdRoaster = new Roaster(id, name, address)

  return console.log(createdRoaster)
}
  
  function findCoffee(coffeeId:number) {
    let foundCoffee = coffeeArray.find(coffee => coffee.id === coffeeId)
  
    return foundCoffee
  }
  
  function totalPrice(ordersObject) {
    let price = 0
    
    ordersObject.forEach(function(singleOrder) {
      price += findCoffee(singleOrder.coffee_id).price * singleOrder.amount
    })
  
      return price
  }
  
  function totalWeight(ordersObject) {
    let weight = 0
  
    ordersObject.forEach(function(singleOrder){
      weight += findCoffee(singleOrder.coffee_id).weight * singleOrder.amount
    })
  
    return weight
  }
  

createUser(1, "Paulo", "Rua do nada, Nº 0", "100.200.300-99")
createCoffee(1, 1, "café da pedra do tempo", 250, 22, "Esse é um café legal" )
createRoastery(1, "Kaffe", "Av. Conselheiro aguiar 1234")