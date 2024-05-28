import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app/app.routes';

platformBrowserDynamic().bootstrapModule(AppComponent, {
  providers: [importProvidersFrom(BrowserModule, RouterModule.forRoot(routes))]
})
  .catch(err => console.error(err));
