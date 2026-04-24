import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http'; // 👈 mudou aqui

import { App } from './app';
import { Item } from './item/item';

@NgModule({
  declarations: [App, Item],
  imports: [BrowserModule],                              // 👈 removido daqui
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),                                 // 👈 adicionado aqui
  ],
  bootstrap: [App],
})
export class AppModule {}