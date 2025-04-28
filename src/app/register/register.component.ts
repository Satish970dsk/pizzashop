import { Component } from '@angular/core';
import { PizzaserviceService } from '../pizzaservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  
  constructor(private ob: PizzaserviceService, public r:Router){

  }
  clr={red:false,green:false}
  
  users={
    id:'',
    name:'',
    password:''
   
  }
  states:any=[]
  ngOnInit(){
    this.ob.getstates().subscribe((res:any)=>this.states=res)
    console.log(this.states);
    
  }
  err:any
  validate(frm:any){
    
    if(frm.uname != '' && frm.pwd!='' && frm.email!='' && frm.state!=''){
      
      let gender:string
      // let st=(document.getElementById('se') as HTMLSelectElement).value
      let m=(document.getElementById('m') as HTMLInputElement).checked
      if(m==true){
        gender='male'
      }
      else{
        gender='female'
      }
      console.log(gender);
      console.log(frm.se);
      
      this.users.id=frm.email
      this.users.name=frm.uname
      this.users.password=frm.pwd
      this.ob.getlogindetails(frm.email).subscribe({
        next:(res:any)=>{this.err='Your details already exists!..',this.clr.red=true},
        error:(err)=>{
          this.ob.postuserdetails(this.users).subscribe((res:any)=>{
       
          })
           this.clr.green=true
            this.err='Registrastion successful please wait redirecting to login'
            setTimeout(()=>{
              this.r.navigate(['/login'])
            },2000)
        
        }
      })
      
    }
    else{
      this.clr.red=true
      this.err='Please fil all the fields!..'
    }
    
   
  }

  
  




}
