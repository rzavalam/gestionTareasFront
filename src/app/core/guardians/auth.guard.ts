import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
 
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

      if (typeof window !== 'undefined' && !localStorage.getItem('token')) {
        // Si no hay token, redirige al login
        this.router.navigate(['/login']);
        return false;
      }

    /*const isAuthenticated = !localStorage.getItem('token');
 
    if (!isAuthenticated) {
      this.router.navigate(['/login']);
      return false;
    }*/
    return true;
  }
}