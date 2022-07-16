import { Injectable } from '@angular/core';
import { CanActivateChild } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class GuardService implements CanActivateChild {
  async canActivateChild(): Promise<boolean> {
    return true;
  }
}
