import {NgModule} from '@angular/core';


import { MatButtonModule,
MatMenuModule,
MatToolbarModule,
MatIconModule,
MatCardModule,
MatListModule,
MatGridListModule,MatDialogModule,MatFormFieldModule } from '@angular/material';


@NgModule({
imports:[MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    MatDialogModule,
    MatFormFieldModule],
exports:[MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    MatDialogModule,
    MatFormFieldModule]


})

export class MaterialModule{}