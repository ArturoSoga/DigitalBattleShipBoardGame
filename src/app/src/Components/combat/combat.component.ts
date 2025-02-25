import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {CdkDrag} from '@angular/cdk/drag-drop';


export interface Inavios {
  clase:string;
  image:string;
  points:number;
  cords:string
}

@Component({
  selector: 'app-combat',
  imports: [CommonModule,MatGridListModule,CdkDrag],
  templateUrl: './combat.component.html',
  styleUrl: './combat.component.css',
})
export class CombatComponent {


  }