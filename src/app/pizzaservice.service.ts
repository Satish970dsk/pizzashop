import { HttpClient } from '@angular/common/http';
import { Injectable,  } from '@angular/core';
import { Iprod } from './home/home.component';
import { Observable } from 'rxjs';
import { Users } from './login/login.component';



@Injectable({
  providedIn: 'root'
})
export class PizzaserviceService {

  constructor(public h: HttpClient) { 

  }
  url="http://localhost:3000/"
  getpizza():Observable<Iprod []>{
    return this.h.get<Iprod []>('http://localhost:3000/pizza')
  }

  postuserdetails(data:any):Observable<any>{
    return this.h.post('http://localhost:3000/users',data)
  }

  getlogindetails(id:any):Observable<Users>{
     
    return this.h.get<Users>(`http://localhost:3000/users/${id}`)
  }
  getstates(){
    return this.h.get("http://localhost:3000/states")
  }
}
