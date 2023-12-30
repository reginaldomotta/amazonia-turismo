import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcaiPageRoutingModule } from './acai-routing.module';

import { AcaiPage } from './acai.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcaiPageRoutingModule
  ],
  declarations: [AcaiPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AcaiPageModule {}
