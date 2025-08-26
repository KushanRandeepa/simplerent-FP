import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, CanDeactivateFn, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';
import { AuthBypassService } from '../auth-bypass.service';

export interface IDeactivateGuard{
    canDeactivate():boolean;
}
@Injectable({  
      providedIn:"root"
})
export class DeactivateGuardService implements CanDeactivate<IDeactivateGuard>{

  constructor(private bypassService: AuthBypassService) {}

  canDeactivate(component: IDeactivateGuard, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): boolean {
   if(this.bypassService.bypassGuard) {
      this.bypassService.bypassGuard = false; // Reset the bypass flag after use
    return true; // Allow navigation without confirmation
  }else{
    return component.canDeactivate();
  }
}
}