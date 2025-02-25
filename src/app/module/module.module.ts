import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

//Component
import { AppComponent } from '../src/Components/Index/app.component';
import { DialogInfoComponent } from '../src/Components/dialog-info/dialog-info.component';
import { MainComponent } from '../src/Components/main/main.component';
import { CombatComponent } from '../src/Components/combat/combat.component';


import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialog } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatCardActions } from '@angular/material/card';
import { RouterModule} from '@angular/router'
import { routes } from '../app.routes';

@NgModule({
  declarations: [MainComponent,AppComponent,DialogInfoComponent],
  imports: [
    CommonModule,MatDialog,MatButtonModule,MatCardModule,MatCardActions,BrowserModule,BrowserAnimationsModule,CombatComponent,
    RouterModule.forRoot(routes)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports:[AppComponent,DialogInfoComponent,RouterModule],
})
export class ModuleModule { }
