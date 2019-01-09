import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MenuProvider {

  constructor(public http: HttpClient) { }

  getSideMenus() {
    return [{
      title: 'Home', component: 'HomePage'
    },
    {
      title: 'Topics',
      subPages: [{
        title: 'Topic1',
        component: 'Topic1Page',
      }, {
        title: 'Topic1',
        component: 'Topic2Page',
      }]
    }];
  }
}