import { NgModule } from '@angular/core';
import * as material from '@angular/material';
@NgModule({
  declarations: [],
  imports: [
    material.MatToolbarModule,
    material.MatSidenavModule,
    material.MatIconModule,
    material.MatListModule,
    material.MatButtonModule,
    material.MatInputModule,
    material.MatRadioModule,
    material.MatCardModule,
    material.MatIconModule
  ],
  exports: [
    material.MatToolbarModule,
    material.MatSidenavModule,
    material.MatIconModule,
    material.MatListModule,
    material.MatButtonModule,
    material.MatInputModule,
    material.MatRadioModule,
    material.MatCardModule,
    material.MatIconModule
  ]
})
export class MaterialModule { }
