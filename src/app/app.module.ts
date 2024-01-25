import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestTimeInterceptor } from './interceptors/request.time.interceptor';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule //module importé sur les conseils de chatGPT (merci !) car sinon erreur dans console du navigateur
    //cela permet à Angular de trouver un fournisseur pour HttpClient
  ],
  providers: [
    provideClientHydration(),
    //j'ajoute l'objet ci dessous pour pouvoir utiliser mon interceptor
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestTimeInterceptor,
       multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
