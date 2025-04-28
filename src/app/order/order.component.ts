import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order',
  standalone: false,
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {

  pid:any
  pname:any
  price:any
  offprice:any
  img:any
  des:any
  qty=1
  total=0
  // {a:p.id ,b:p.name,c:p.oprice,d:p.offprice,e:p.img,f:p.description}
  constructor(public q:ActivatedRoute){

    q.queryParams.subscribe(data =>{
      this.pid=data['a'],
      this.pname=data['b'],
      this.price=data['c'],
      this.offprice=data['d']
      this.des=data['f'],
      this.img=data['e']

    })
  }
  

}
