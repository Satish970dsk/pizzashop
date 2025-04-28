import { Component } from '@angular/core';
import { PizzaserviceService } from '../pizzaservice.service';
import { Iprod } from '../home/home.component';

@Component({
  selector: 'app-viewpizza',
  standalone: false,
  templateUrl: './viewpizza.component.html',
  styleUrl: './viewpizza.component.css'
})
export class ViewpizzaComponent {
  constructor(private ob:PizzaserviceService){

  }
  x=false
  pizzadetails:Iprod[]=[]
  error:any

  ngOnInit(){
    this.displayallpizzas()
    this.x=true
  }

  displayallpizzas(){
    this.ob.getpizza().subscribe({
      next: (res:any) => this.pizzadetails = res,
      error: (err) => this.error = err.message
    })
    // console.log(this.pizzadetails);
   
    
    
  }
  
}
