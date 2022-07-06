import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RandomPageRoutingModule } from './random-routing.module';

import { RandomPage } from './random.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RandomPageRoutingModule
  ],
  declarations: [RandomPage]
})
export class RandomPageModule {}
