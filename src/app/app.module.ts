import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { StoreModule } from 'src/store/store.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule,
    //RouterModule.forRoot([{ path: '**', redirectTo: '/store' }]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
