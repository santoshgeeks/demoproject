import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { OurProductComponent } from './our-product/our-product.component';
import { OurBrandComponent } from './our-brand/our-brand.component';
import { DronServicesComponent } from './dron-services/dron-services.component';
import { DronKitComponent } from './dron-kit/dron-kit.component';
import { PnpAndRtfComponent } from './pnp-and-rtf/pnp-and-rtf.component';
import { FrameComponent } from './frame/frame.component';
import { MotorComponent } from './motor/motor.component';
import { PropellerComponent } from './propeller/propeller.component';
import { ESCComponent } from './esc/esc.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    OurProductComponent,
    OurBrandComponent,
    DronServicesComponent,
    DronKitComponent,
    PnpAndRtfComponent,
    FrameComponent,
    MotorComponent,
    PropellerComponent,
    ESCComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
