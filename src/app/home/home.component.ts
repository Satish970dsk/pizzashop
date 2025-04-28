import { Component } from '@angular/core';
import { PizzaserviceService } from '../pizzaservice.service';


@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // ------- products data-----------
  pizzadetails:Iprod[]=[
    {
      id:'p001',
      name:'AussiePizza',
      oprice:250,
      offprice:225,
      description:'Gourmet trio of , and a refreshing 250ml drink',
      img:'assets/AussiePizza.jpg'
    },
    {
      id:'p002',
      name:'Capriccio',
      oprice:250,
      offprice:225,
      description:'Gourmet trio of , and a refreshing 250ml drink',
      img:'assets/capricciosa.jpg'
    },
    {
      id:'p003',
      name:'CheeseNCornPizza',
      oprice:290,
      offprice:265,
      description:'Gourmet trio of , and a refreshing 250ml drink',
      img:'assets/CheeseNCornPizza.jpg'
    },
    {
      id:'p004',
      name:'ChickenPizza.jpg',
      oprice:590,
      offprice:565,
      description:'Gourmet trio, and a refreshing 250ml drink',
      img:'assets/ChickenPizza.jpg'
    },

  //   {id:'p005', name:'MacnCheese Pizza', oprice:260, offprice:456, description:'Extra toppings with chese and corn', img:'/assets/MacnCheesePizza.jpg'},
  
  //  {id:'p006', name:'Farmhouse Pizza', oprice:300, offprice:456,  description:'Hand Tossed Farm House Pizza', img:'/assets/farmhouse.jpg'},
  //  {id:'p007', name:'Spring Pizza', oprice:280, offprice:456,  description:'Spring pizza with chese and onion', img:'/assets/SpringPizza.jpg'},
  // {id:'p008', name:'Paneer Pizza', oprice:350, offprice:456,  description:'Indian style Paneer Makhni Pizza', img:'/assets/PaneerPizza.jpg'},
  //  {id:'p009', name:'Mexican Green Wave Pizza', offprice:456,  oprice:500,description:'Mexican Green Sauce', img:'/assets/MexicanGreenWavePizza.jpg'},
  //  {id:'p013', name:'hawaiian Pizza', oprice:500, offprice:456, description:'hawaiian Sauce newly added', img:'/assets/hawaiian.jpg'},
  //  {id:'p010', name:'Paneer Makhni Pizza', oprice:500, offprice:456, description:'Paneer  and extra toppings ', img:'/assets/PaneerMakhniPizza.jpg'},
  //  {id:'p011', name:'Kale and Sausage Pizza', oprice:500, offprice:456, description:'Classic Sausage Pizza ', img:'/assets/KaleAndSausagePizza.jpg'},
  //  {id:'p012', name:'Veggie Deluxe Pizza', oprice:500, offprice:456, description:'crust Pizza ', img:'/assets/veggiedeluxepizza.jpg'},

  ]
  constructor(private ob: PizzaserviceService){

  }

    displayallpizzas(){
      this.ob.getpizza().subscribe(res=>console.log(res)
      )
      
    }


 
    
}

export interface Iprod{
  id:string
  name:string,
  oprice:number,
  offprice:number,
  description:string
  img:string

}