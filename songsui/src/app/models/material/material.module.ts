import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MatCardModule, MatInputModule, MatFormFieldModule, MatButtonModule } from '@angular/material';
@NgModule({
  imports: [
    CommonModule, FlexLayoutModule, MatCardModule, MatInputModule, MatFormFieldModule, MatButtonModule
  ],
  exports : [
    FlexLayoutModule, MatCardModule, MatInputModule, MatFormFieldModule, MatButtonModule
  ]
})
export class MaterialModule { }
