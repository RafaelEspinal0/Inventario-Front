import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivateChild {
  
  constructor(
    private authService: AuthService,
    private router: Router){}
  id:number = 0;
  role:string =''
  
  async canActivateChild(): Promise<boolean> {
    if (this.authService.getSession() !== null) {
      const dataDecode: any = this.decodeToken();
      if (dataDecode.exp < new Date().getTime() / 1000) {
        return this.redirect();
      }
      const {
        id,
        role: { name },
      } = await this.authService.getMe().toPromise();
      this.id = id;
      this.role = name;

      if (this.role === 'Administrador') {
        return true;
      }
      return this.redirect();
    }

    return this.redirect();
  }

  redirect() {
    this.router.navigate(['/']);
    return false;
  }

  decodeToken() {
    return jwtDecode(this.authService.getSession().jwt || '');
  }
  
}
