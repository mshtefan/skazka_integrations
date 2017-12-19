import { Injectable } from '@angular/core';
import { Jsonp, Http } from '@angular/http';

@Injectable()
export class ApiService {
  users: any = [];
  config: any = {};
  data: any = {};

  constructor(protected jsonp: Jsonp, protected http: Http) { }

  getPartnerConfig(config: any) {
    let url = `/js-api/${config.partner_id}/loyalty-page/config/by-name/?callback=JSONP_CALLBACK`;
    let request_params = {
      params: {
        name: config.name,
        lang: config.lang
      }
    };
    this.config = config;
    return this.jsonp.get(url, request_params)
  } 

  getUsers(params?: any, type: any = 'unsorted') {
    let url = `/js-api/${this.config.partner_id}/custom/moderation/users/`;
    let tags = [...this.data.user_types.filter(item => type ? (item.type == type) : true).map(item => item.tag), ...this.data.user_occupations.map(item => item.tag)];
    // let vars = Object.keys(this.data.user_variables).map(item => { return this.data.user_variables[item] });
    let request_params: any = {
      params: {
        tags: tags.join(','),
        // custom_vars: vars.join(','),
        ...params
      }
    };
    return this.http.get(url, request_params)
  }

  tags(action: string, user_id: any, tags: string[]) {
    let url = `/js-api/${this.config.partner_id}/custom/moderation/users/tags/${action}/`;
    let request_params = new FormData();
    request_params.append('user_id', user_id);
    request_params.append('tags', tags.join(','));
    return this.http.post(url, request_params)
  }


  vars(action: string, user_id: any, vars: any) {
    let url = `/js-api/${this.config.partner_id}/custom/moderation/users/custom-vars/${action}/`;
    let request_params = new FormData();
    request_params.append('user_id', user_id);
    request_params.append('vars', JSON.stringify(vars));
    return this.http.post(url, request_params)
  }


}
