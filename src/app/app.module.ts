import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ApiService } from 'src/service/api.service';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { InterceptorService } from 'src/service/interceptor.service';

import { ToastrModule } from 'ngx-toastr';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FaqComponent } from './faq/faq.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AccordionModule } from '@syncfusion/ej2-angular-navigations';

@NgModule({
  declarations: [AppComponent, AboutUsComponent, ContactUsComponent, FaqComponent, NavbarComponent, FooterComponent],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatSidenavModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    AccordionModule,
    ToastrModule.forRoot()
  ],
  providers: [
    ApiService,
    CookieService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
