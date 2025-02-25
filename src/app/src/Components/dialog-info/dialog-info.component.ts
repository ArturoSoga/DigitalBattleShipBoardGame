import { Component,CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { MatCardActions } from '@angular/material/card';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-info',
  imports: [MatCardActions,MatButtonModule,MatIconModule,CommonModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './dialog-info.component.html',
  styleUrl: './dialog-info.component.css'
})
export class DialogInfoComponent {
  data = inject(MAT_DIALOG_DATA);

  constructor(private MatDialogRef : MatDialogRef<DialogInfoComponent>,
    private router : Router
  ){}

  Close(){
    this.MatDialogRef.close();
  }

  Goingto(){

    this.router.navigate(['/combat']);
    this.MatDialogRef.close();
  }

}
