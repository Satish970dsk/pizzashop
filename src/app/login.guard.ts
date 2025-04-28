import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';


export const loginGuard: CanActivateFn = (route, state) => {
  
  if(sessionStorage.getItem('login')==null){
    const r =inject(Router)
    r.navigate(['/login'])
    return false
  }
  return true
  
};
