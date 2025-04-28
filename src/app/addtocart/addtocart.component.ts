import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addtocart',
  standalone: false,
  templateUrl: './addtocart.component.html',
  styleUrl: './addtocart.component.css'
})
export class AddtocartComponent {

  pizzas:any=[]

  item={pid:'',
  pname:'',
  price:'',
  offprice:'',
  img:'',
  des:''}
  qty=1
  total=0
  // {a:p.id ,b:p.name,c:p.oprice,d:p.offprice,e:p.img,f:p.description}
  constructor(public q:ActivatedRoute){

    q.queryParams.subscribe(data =>{
      this.item.pid=data['a'],
      this.item.pname=data['b'],
      this.item.price=data['c'],
      this.item.offprice=data['d']
      this.item.des=data['f'],
      this.item.img=data['e']

    })
    // this.pizzas.push(this.item)
    // this.pizzas.push({pid:'',sjd:''})
    // console.log(this.item.pid);
    // console.log(this.pizzas);
    // if(this.pizzas.includes(this.item)){
    //   this.qty+=1
    // }
    // else{
    //   this.pizzas.push(this.item)
    //   console.log(this.pizzas);
    // }
    

    // sessionStorage.setItem('data',JSON.stringify(this.pizzas))
  }
 
  


}
