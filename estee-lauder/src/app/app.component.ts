import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  template: `<router-outlet *ngIf="loaded"></router-outlet>`,
  styles: []
})
export class AppComponent {
  title: string = 'app';
  loaded: boolean = false;

  constructor(private API: ApiService) {
    this.API.getPartnerConfig({
      name: 'moderation',
      partner_id: 1822,
      domain: window.location.origin
    })
      .subscribe((res: any): any => {
        this.API.data = res.json().config.config.moderation;

        this.API.getUsers()
          .subscribe((res: any) => {
            if(res && res.status == 'error') return;
            this.API.users = res.json();
            this.loaded = true;
          })

      })
  }



}
