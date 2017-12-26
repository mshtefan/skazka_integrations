import { RequestOptions, BaseRequestOptions, RequestOptionsArgs } from '@angular/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class CustomRequestOptions extends BaseRequestOptions {

    constructor(private cookieService: CookieService) {
        super();
        const csrftoken = this.cookieService.get('csrftoken');
        if (csrftoken) {
            this.headers.set('X-CSRFToken', csrftoken);
        }
    }

}