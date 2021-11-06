import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { HomeComponent } from './componentes/home/home.component';
import { ImagenesComponent } from './componentes/imagenes/imagenes.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { AppRoutingModule } from './app-routing.module';
import { CarruselComponent } from './componentes/carrusel/carrusel.component';
import { BannerPrincipalComponent } from './componentes/banner-principal/banner-principal.component';
import { CarouselNoticiasComponent } from './componentes/carousel-noticias/carousel-noticias.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ImagenesComponent,
    ContactoComponent,
    CarruselComponent,
    BannerPrincipalComponent,
    CarouselNoticiasComponent,
    // SidebarComponent,
    // HeaderComponent,
    // CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

