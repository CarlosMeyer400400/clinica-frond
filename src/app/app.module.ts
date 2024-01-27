// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactoComponent } from './contacto/contacto.component';
import { SomosComponent } from './somos/somos.component';
import { FooterComponent } from './footer/footer.component';

import { CustomHttpClientService } from './custom-http-client.service';
import { LoginComponent } from './login/login.component'; // Importa tus componentes
import { RegistroComponent } from './registro/registro.component';
import { RecuperadoComponent } from './recuperado/recuperado.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ServiciosComponent,
    ContactoComponent,
    SomosComponent,
    FooterComponent,
    LoginComponent,
    RegistroComponent,
    RecuperadoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    // Usa tu servicio personalizado en lugar de HttpClient
    { provide: CustomHttpClientService, useClass: CustomHttpClientService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
