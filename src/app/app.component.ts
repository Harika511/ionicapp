import { Component, ViewChild } from '@angular/core';
import { Nav,  Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MenuProvider } from '../providers/menu/menu';
import {HttpClient,HttpHeaders,HttpResponse} from '@angular/common/http';
import { CategoryService} from './app.service';
import { Topic1Page } from '../pages/topic1/topic1';
import { Topic2Page } from '../pages/topic2/topic2';
import { TopicsPage } from '../pages/topics/topics';
//import { RouterModule, Routes } from '@angular/router';
@Component({
  templateUrl: 'app.1.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
   appRoutes: any = [
    { path: 'topic1', component: Topic1Page },
    { path: 'topic2', component: Topic2Page },
    { path: 'topics', component: TopicsPage }
 ];
  rootPage: any = 'HomePage';

  pages: any;

  // Selected Side Menu
  selectedMenu: any;

  constructor(public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public menuProvider: MenuProvider,
    private categoryService:CategoryService,
    public menuCtrl: MenuController
    
    ) {
    this.initializeApp();
    this.menuCtrl.enable(true, 'menu1');
  this.menuCtrl.enable(true, 'menu2');
  }
  
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
     // this.getSideMenuData();
     this.getCat();
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  getSideMenuData() {
    this.pages = this.menuProvider.getSideMenus();
  }

  openPage(page, index) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.rootPage='Topic1Page';
    if (page.component) {
      this.nav.setRoot(page.component);
      this.menuCtrl.close();
    } else {
      // if (this.selectedMenu) {
      //  // this.selectedMenu = 0;
      // } else {
        this.selectedMenu = index;
      //  this.menuCtrl.close();
    //  }
    }
  }

  public getCat():void{
  
    this.categoryService.getCategories().subscribe(
     
    response => {
      this.pages=response.GetCatSubcatListResult.mains;
      console.log(this.pages)
  },
    (error) => console.log(error)
  );
  
}

  public search(){
alert("hi search");
this.nav.push(this.appRoutes[0].component);
  }

}