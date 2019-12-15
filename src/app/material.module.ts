import { NgModule } from '@angular/core';
import { MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatButtonModule, MatInputModule } from '@angular/material';
@NgModule({
  declarations: [],
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatInputModule
  ],
  exports: [
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class MaterialModule { }
