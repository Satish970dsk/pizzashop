import { Component } from '@angular/core';
import { Router, UrlSegment } from '@angular/router';
import { PizzaserviceService } from '../pizzaservice.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    
  constructor(public r:Router, private ob:PizzaserviceService){

  }
 err:any
 clr={red:false,green:false}


 user!:Users
   
 validatelogindetail(frm:any){
    // now from details contains in frm valiable
    if(frm.uname != '' && frm.pwd!=''){
      
   
    let iserr=false
    try {
      
      this.ob.getlogindetails(frm.uname).subscribe({
        next: (res:any) => {if(res.id==frm.uname && res.password==frm.pwd){
          this.clr={red:false,green:true}
          this.err='Login successful redirecting to home page'
          sessionStorage.setItem('login',frm.uname)
          setTimeout(()=>{
            this.r.navigate(['/home'])
          },2000)
        }else{
          this.err='invalid username or password',
          this.clr={red:true,green:false}
        }},
        error:()=>{
          this.err='invalid username or password',
          this.clr={red:true,green:false}
        }
        
      })
  
    } catch (error) {
        console.log(error);
        
      }

    }
    else{
      this.err='please fill all details'
    }
  
  } 


}
export interface Users{
  id:'',
  name:'',
  password:'',
  gender:'',
  state:''

}