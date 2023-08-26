import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModelModule } from '../model/model.module';
import { StoreComponent } from './store.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [StoreComponent],
  imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
  exports: [StoreComponent],
})
export class StoreModule {}
