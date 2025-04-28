import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
   s=false
   clr={n:false,bgdark:true}
  constructor(public r:Router){

  }
  islogin=sessionStorage.getItem('login')

  logut(){
    sessionStorage.clear()
    this.r.navigate(['/login'])

  }
  change(){
    let s1=(document.getElementById('s1') as HTMLSelectElement).value
    console.log(s1);
    if(s1=='l'){
      this.clr.n=true
      this.clr.bgdark=false
    }
    else{
      this.clr.n=false
      this.clr.bgdark=true
    }
    

    
  }
}
