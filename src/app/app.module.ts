import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule,NavController } from 'ionic-angular';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MenuProvider } from '../providers/menu/menu';
import { CategoryService} from './app.service';
import { Topic1Page } from '../pages/topic1/topic1';
import { Topic2Page } from '../pages/topic2/topic2';
import { TopicsPage } from '../pages/topics/topics';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule} from '@angular/forms';
//import { Input } from '@ionic/angular';
const appRoutes: Routes = [
   { path: 'topic1', component: Topic1Page },
   { path: 'topic2', component: Topic2Page },
   { path: 'topics', component: TopicsPage }
];

@NgModule({
  declarations: [
    MyApp,Topic1Page,Topic2Page,TopicsPage
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes),
    IonicModule.forRoot(MyApp),
    HttpClientModule,FormsModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    HttpClient,
    MenuProvider, CategoryService
  ]
})
export class AppModule { }
