import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule}  from '@angular/forms';
import {HttpModule} from '@angular/http';
import {ReactiveFormsModule}  from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from './material.module';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DishDetailComponent } from './dish-detail/dish-detail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LeaderService } from './services/leader.service';
import { RestangularModule,Restangular} from 'ngx-restangular';
import { RestangularConfigFactory } from './shared/restConfig';

import 'hammerjs';

import {DishService} from './services/dish.service';
import {PromotionService} from './services/promotion.service';
import { LoginComponent } from './login/login.component';
import { baseURL } from './shared/baseurl';
import { ProcessHttpmsgService } from './services/process-httpmsg.service';
import { HighlightDirective } from './directives/highlight.directive';
import { FeedbackService } from './services/feedback.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishDetailComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RestangularModule.forRoot(RestangularConfigFactory)
    ],
    entryComponents:[LoginComponent],
  providers: [DishService,
              PromotionService,
              LeaderService,
              ProcessHttpmsgService,
              FeedbackService,
            {provide:'BaseURL',useValue:baseURL}],
  bootstrap: [AppComponent]
})
export class AppModule { }
